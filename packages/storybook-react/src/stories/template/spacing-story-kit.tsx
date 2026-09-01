import type { StoryObj } from '@storybook/react-vite';
import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import spacingMatrix from '../../../../../components/rich-text/src/spacing-matrix.json';
import { RichText } from '../../../../component-library-react/src/index.js';

// ---- Data ----

// Maps spacing-matrix.json relationship terms to CSS tier names (from getSpacingCSS.mjs)
const SPACE_MAP: Record<string, string | undefined> = {
  NVT: undefined,
  Onbekenden: 'stranger',
  Kennissen: 'acquaintance',
  Vrienden: 'friend',
  Besties: 'best-friend',
  Kind: 'confidant',
};

const EXCLUDED_TERMS = new Set(['NTV', 'NTB', 'NTB - Vrienden?', '']);

// All unique relationship values from the matrix, excluding invalid/placeholder entries
const MATRIX_OPTIONS = [
  ...new Set(
    spacingMatrix.flatMap((entry) =>
      Object.entries(entry)
        .filter(([k]) => k !== 'component')
        .map(([, v]) => v),
    ),
  ),
].filter((v): v is string => !EXCLUDED_TERMS.has(v));

function tierCSSValue(term: string): string | undefined {
  const tier = SPACE_MAP[term];
  return tier ? `var(--utrecht-rich-text-${tier}-margin-block-end)` : undefined;
}

export function matrixDefault(component: string, sibling: string): string {
  const entry = spacingMatrix.find((e) => e.component === component) as Record<string, string> | undefined;
  return entry?.[sibling] ?? 'NVT';
}

// Returns inline style + data-* attributes for a controlled element→sibling pair
export function elemProps(term: string, componentName: string, siblingName: string) {
  const original = matrixDefault(componentName, siblingName);
  return {
    style: { [`--${componentName}-margin-block-end`]: tierCSSValue(term) } as React.CSSProperties,
    'data-spacing-term': term,
    ...(term !== original ? { 'data-spacing-override': original } : {}),
  };
}

// ---- Debug visibility context (fed by the toolbar global via a preview decorator) ----

export const SpacingDebugContext = createContext(false);

// ---- Debug overlay ----

const SPACING_DEBUG_SELECTORS = [
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'link',
  'paragraph',
]
  .map((s) => `.utrecht-${s}`)
  .join(', ');

const spacingDebugStyles = `
  .spacing-debug [data-margin-block-end] {
    position: relative;
  }

  .spacing-debug [data-margin-block-end]::after {
    background-color: color-mix(in srgb, var(--_dc, mediumorchid) 10%, transparent);
    border: 1px dashed var(--_dc, mediumorchid);
    box-sizing: border-box;
    padding-inline-end: 12px;
    color: var(--_dc, mediumorchid);
    content: '↓ ' attr(data-margin-block-end) ' - ' attr(data-spacing-label);
    display: block;
    font-family: monospace;
    font-size: 11px;
    font-weight: normal;
    height: var(--_margin-block-end);
    position: absolute;
    text-align: right;
    top: 100%;
    width: 100%;
  }

  /* Tier colors: biggest spacing (blue) -> smallest spacing (red) */
  .spacing-debug [data-spacing-term="Onbekenden"] { --_dc: #1d4ed8; }
  .spacing-debug [data-spacing-term="Kennissen"]  { --_dc: #0e7490; }
  .spacing-debug [data-spacing-term="Vrienden"]   { --_dc: #15803d; }
  .spacing-debug [data-spacing-term="Besties"]    { --_dc: #b45309; }
  .spacing-debug [data-spacing-term="Kind"]       { --_dc: #b91c1c; }

  /* Override indicator: solid red border when user has deviated from the matrix default */
  .spacing-debug [data-spacing-override][data-margin-block-end]::after {
    background-color: rgba(220, 38, 38, 0.06);
    border-color: #dc2626;
    border-style: solid;
    color: #dc2626;
  }
`;

// ---- Hooks ----

// Read the resolved pixel values of each tier from CSS custom properties
function useTierPixelValues(): Record<string, number> {
  const [values, setValues] = useState<Record<string, number>>({});

  useEffect(() => {
    const themeEl = document.querySelector('.utrecht-theme') ?? document.documentElement;
    const cs = getComputedStyle(themeEl);
    const result: Record<string, number> = {};
    for (const [term, tier] of Object.entries(SPACE_MAP)) {
      if (!tier) continue;
      const raw = cs.getPropertyValue(`--utrecht-rich-text-${tier}-margin-block-end`).trim();
      const px = parseFloat(raw);
      if (!isNaN(px)) result[term] = px;
    }
    setValues(result);
  }, []);

  return values;
}

// Returns a ref to attach to the debug wrapper div; re-measures on every render of the caller
function useSpacingDebugRef() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const matrixByComponent = Object.fromEntries(spacingMatrix.map((entry) => [entry.component, entry]));

    ref.current.querySelectorAll(SPACING_DEBUG_SELECTORS).forEach((el) => {
      const computed = getComputedStyle(el);
      const marginBlockEnd = computed.getPropertyValue('margin-block-end');
      (el as HTMLElement).dataset['marginBlockEnd'] = marginBlockEnd;
      (el as HTMLElement).style.setProperty('--_margin-block-end', marginBlockEnd);

      const nextSibling = el.nextElementSibling;
      if (nextSibling) {
        const currentClass = Array.from(el.classList).find((c) => c.startsWith('utrecht-'));
        const nextClass = Array.from(nextSibling.classList).find((c) => c.startsWith('utrecht-'));
        if (currentClass && nextClass) {
          const htmlEl = el as HTMLElement;
          const term =
            htmlEl.dataset['spacingTerm'] ??
            (matrixByComponent[currentClass] as Record<string, string> | undefined)?.[nextClass];
          if (term && term !== 'NVT') {
            const currentName = currentClass.replace('utrecht-', '');
            const nextName = nextClass.replace('utrecht-', '');
            htmlEl.dataset['spacingLabel'] = `${currentName} en ${nextName} zijn ${term.toLowerCase()}`;
          } else {
            htmlEl.dataset['spacingLabel'] = 'Geen relaties';
          }
        }
      } else {
        (el as HTMLElement).dataset['spacingLabel'] = 'Geen relaties';
      }
    });
  });

  return ref;
}

// Consolidates all repeated state and derived values for a spacing story
export function useSpacingStory<T extends Record<string, string>>(defaults: T) {
  const tierValues = useTierPixelValues();
  const [terms, setTerms] = useState<T>(defaults);
  const debugRef = useSpacingDebugRef();

  const sortedOptions = [...MATRIX_OPTIONS].sort((a, b) => (tierValues[a] ?? Infinity) - (tierValues[b] ?? Infinity));
  const optionLabel = (term: string) => {
    const px = tierValues[term];
    return px !== null && px !== undefined ? `${term} (${px}px)` : term;
  };

  const setTerm = (key: keyof T, value: string) => setTerms((prev) => ({ ...prev, [key]: value } as T));
  const isModified = (Object.keys(defaults) as (keyof T)[]).some((k) => terms[k] !== defaults[k]);

  return { terms, setTerm, debugRef, sortedOptions, optionLabel, isModified, reset: () => setTerms(defaults) };
}

// ---- Control panel ----

interface ControlEntry {
  key: string;
  label: string;
  value: string;
  isModified: boolean;
  onChange: (value: string) => void;
}

// Build ControlEntry[] from a key→label map; value, onChange, and isModified are derived automatically
export function makeControls<T extends Record<string, string>>(
  labels: Partial<Record<keyof T, string>>,
  terms: T,
  setTerm: (k: keyof T, v: string) => void,
  defaults: T,
): ControlEntry[] {
  return Object.entries(labels).map(([key, label]) => ({
    key,
    label: label as string,
    value: terms[key as keyof T],
    isModified: terms[key as keyof T] !== defaults[key as keyof T],
    onChange: (v: string) => setTerm(key as keyof T, v),
  }));
}

function SpacingControlPanel({
  controls,
  sortedOptions,
  optionLabel,
  isModified,
  onReset,
}: {
  controls: ControlEntry[];
  sortedOptions: string[];
  optionLabel: (term: string) => string;
  isModified: boolean;
  onReset: () => void;
}) {
  return (
    <div
      style={{
        marginBlockEnd: '24px',
        padding: '12px',
        background: '#f5f5f5',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '12px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '8px',
          marginBlockEnd: '8px',
        }}
      >
        {controls.map(({ key, label, value, isModified, onChange }) => (
          <label key={key} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span>{label}</span>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ fontFamily: 'monospace', fontSize: '11px', ...(isModified ? { borderColor: 'red' } : {}) }}
            >
              {sortedOptions.map((term) => (
                <option key={term} value={term}>
                  {optionLabel(term)}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <button
          disabled={!isModified}
          onClick={onReset}
          style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            padding: '2px 8px',
            cursor: isModified ? 'pointer' : 'default',
            opacity: isModified ? 1 : 0.4,
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// ---- Story shell ----

interface StoryShellProps {
  controls: ControlEntry[];
  children: React.ReactNode;
  debugRef: React.RefObject<HTMLDivElement | null>;
  sortedOptions: string[];
  optionLabel: (term: string) => string;
  isModified: boolean;
  reset: () => void;
}

export function StoryShell({
  controls,
  children,
  debugRef,
  sortedOptions,
  optionLabel,
  isModified,
  reset,
}: StoryShellProps) {
  const showDebug = useContext(SpacingDebugContext);
  return (
    <>
      <style>{spacingDebugStyles}</style>
      <div ref={debugRef} className={showDebug ? 'spacing-debug' : undefined}>
        <SpacingControlPanel
          controls={controls}
          sortedOptions={sortedOptions}
          optionLabel={optionLabel}
          isModified={isModified}
          onReset={reset}
        />
        <RichText>{children}</RichText>
      </div>
    </>
  );
}

// ---- Story factory ----

export function makeStory(name: string, description: string, Component: () => React.JSX.Element): StoryObj {
  return { name, parameters: { docs: { description: { story: description } } }, render: () => <Component /> };
}
