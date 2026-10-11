import type { StoryObj } from '@storybook/react-vite';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SpacingDebugContext } from './spacing-story-kit.js';
import spacingMatrix from '../../../../../components/rich-text/src/spacing-matrix.json';
import { RichText } from '../../../../component-library-react/src/index.js';

// ---- Data ----

const SPACE_MAP: Record<string, string | undefined> = {
  NVT: undefined,
  Onbekenden: 'stranger',
  Kennissen: 'acquaintance',
  Vrienden: 'friend',
  Besties: 'best-friend',
  Kind: 'confidant',
};

const EXCLUDED_TERMS = new Set(['NTV', 'NTB', 'NTB - Vrienden?', '']);

const MATRIX_OPTIONS = [
  ...new Set(
    spacingMatrix.flatMap((entry) =>
      Object.entries(entry)
        .filter(([k]) => k !== 'component')
        .map(([, v]) => v),
    ),
  ),
].filter((v): v is string => !EXCLUDED_TERMS.has(v));

// Tier colors: biggest spacing (blue) -> smallest spacing (red)
const TIER_COLORS: Record<string, string> = {
  Onbekenden: '#1d4ed8',
  Kennissen: '#0e7490',
  Vrienden: '#15803d',
  Besties: '#b45309',
  Kind: '#b91c1c',
};

function hexWithAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function tierCSSValue(term: string): string | undefined {
  const tier = SPACE_MAP[term];
  return tier ? `var(--utrecht-rich-text-${tier}-margin-block-end)` : undefined;
}

export function matrixDefault(component: string, sibling: string): string {
  const entry = spacingMatrix.find((e) => e.component === component) as Record<string, string> | undefined;
  return entry?.[sibling] ?? 'NVT';
}

export function elemProps(term: string, componentName: string, siblingName: string) {
  const original = matrixDefault(componentName, siblingName);
  return {
    style: { [`--${componentName}-margin-block-end`]: tierCSSValue(term) } as React.CSSProperties,
    'data-spacing-term': term,
    ...(term !== original ? { 'data-spacing-override': original } : {}),
  };
}

// ---- Canvas debug overlay ----

// Expanded selectors: canvas can track all components, not just those that support ::after
const SPACING_DEBUG_SELECTORS = [
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'link',
  'paragraph',
  'blockquote',
  'breadcrumb-nav',
  'unordered-list',
  'ordered-list',
  'figure',
  'table',
  'data-list',
  'alert',
  'accordion',
  'form-field',
  'button-group',
  'spotlight-section',
  'badge-list',
  'separator',
]
  .map((s) => `.utrecht-${s}`)
  .join(', ');

function useSpacingDebugCanvas() {
  const showDebug = useContext(SpacingDebugContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setVersion] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver(() => setVersion((v) => v + 1));
    if (container) observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const containerRect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio;

    // Setting canvas.width clears the canvas and resets the context transform
    canvas.width = containerRect.width * dpr;
    canvas.height = containerRect.height * dpr;
    canvas.style.width = `${containerRect.width}px`;
    canvas.style.height = `${containerRect.height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    if (!showDebug) return;

    const matrixByComponent = Object.fromEntries(spacingMatrix.map((entry) => [entry.component, entry]));

    container.querySelectorAll(SPACING_DEBUG_SELECTORS).forEach((el) => {
      const htmlEl = el as HTMLElement;
      const computed = getComputedStyle(el);
      const marginBlockEnd = parseFloat(computed.getPropertyValue('margin-block-end'));

      const nextSibling = el.nextElementSibling;
      if (nextSibling) {
        const currentClass = Array.from(el.classList).find((c) => c.startsWith('utrecht-'));
        const nextClass = Array.from(nextSibling.classList).find((c) => c.startsWith('utrecht-'));
        if (currentClass && nextClass) {
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
        htmlEl.dataset['spacingLabel'] = 'Geen relaties';
      }

      if (isNaN(marginBlockEnd) || marginBlockEnd < 0) return;

      const elRect = el.getBoundingClientRect();
      const x = elRect.left - containerRect.left;
      const y = elRect.bottom - containerRect.top;
      const w = elRect.width;
      const h = marginBlockEnd;

      const term = htmlEl.dataset['spacingTerm'] ?? '';
      const isOverride = 'spacingOverride' in htmlEl.dataset;
      const color = isOverride ? '#dc2626' : TIER_COLORS[term] ?? '#888888';
      const label = htmlEl.dataset['spacingLabel'] ?? '';

      if (h === 0) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash(isOverride ? [] : [4, 4]);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.stroke();
      } else {
        ctx.fillStyle = hexWithAlpha(color, 0.08);
        ctx.fillRect(x, y, w, h);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash(isOverride ? [] : [4, 4]);
        ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
      }

      // Text sits below the top border when there is room; otherwise below the bottom border
      const FONT_SIZE = 11;
      const textY = h >= FONT_SIZE + 4 ? y + 2 : y + h + 2;
      ctx.setLineDash([]);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.fillStyle = color;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillText(`↓ ${h}px - ${label}`, x + w - 12, textY);
    });
  });

  return { containerRef, canvasRef };
}

// ---- Hooks ----

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

export function useSpacingStory<T extends Record<string, string>>(defaults: T) {
  const tierValues = useTierPixelValues();
  const [terms, setTerms] = useState<T>(defaults);
  const { containerRef, canvasRef } = useSpacingDebugCanvas();

  const sortedOptions = [...MATRIX_OPTIONS].sort((a, b) => (tierValues[a] ?? Infinity) - (tierValues[b] ?? Infinity));
  const optionLabel = (term: string) => {
    const px = tierValues[term];
    return px !== null && px !== undefined ? `${term} (${px}px)` : term;
  };

  const setTerm = (key: keyof T, value: string) => setTerms((prev) => ({ ...prev, [key]: value } as T));
  const isModified = (Object.keys(defaults) as (keyof T)[]).some((k) => terms[k] !== defaults[k]);

  return {
    terms,
    setTerm,
    containerRef,
    canvasRef,
    sortedOptions,
    optionLabel,
    isModified,
    reset: () => setTerms(defaults),
  };
}

// ---- Control panel ----

interface ControlEntry {
  key: string;
  label: string;
  value: string;
  isModified: boolean;
  onChange: (value: string) => void;
}

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
  containerRef: React.RefObject<HTMLDivElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  sortedOptions: string[];
  optionLabel: (term: string) => string;
  isModified: boolean;
  reset: () => void;
}

export function StoryShell({
  controls,
  children,
  containerRef,
  canvasRef,
  sortedOptions,
  optionLabel,
  isModified,
  reset,
}: StoryShellProps) {
  return (
    <>
      <SpacingControlPanel
        controls={controls}
        sortedOptions={sortedOptions}
        optionLabel={optionLabel}
        isModified={isModified}
        onReset={reset}
      />
      <div ref={containerRef} style={{ position: 'relative' }}>
        <RichText>{children}</RichText>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />
      </div>
    </>
  );
}

// ---- Story factory ----

export function makeStory(name: string, description: string, Component: () => React.JSX.Element): StoryObj {
  return { name, parameters: { docs: { description: { story: description } } }, render: () => <Component /> };
}
