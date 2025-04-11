import { Button } from '@utrecht/button-react';
import clsx from 'clsx';
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useId,
  useRef,
  useState,
} from 'react';
import { HTMLHeading } from './HTMLHeading';
import { Heading } from './Heading';

const IconChevronDown = () => (
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="currentColor">
    <defs>
      <clipPath id="clippath">
        <rect width="14" height="8" style={{ fill: 'none', strokeWidth: '0px' }} />
      </clipPath>
    </defs>
    <g style={{ clipPath: 'url(#clippath)' }}>
      <path
        d="m7,8c-.26,0-.51-.1-.71-.29L.29,1.71C-.1,1.32-.1.68.29.29S1.32-.1,1.71.29l5.29,5.29L12.29.29c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-6,6c-.2.2-.45.29-.71.29Z"
        style={{ strokeWidth: '0px' }}
      />
    </g>
  </svg>
);

/**
 * Find the first item in an array
 */
const firstItem = <T,>(items: T[]): T | undefined => (items.length >= 1 ? items[0] : undefined);

/**
 * Find the last item in an array
 */
const lastItem = <T,>(items: T[]): T | undefined => (items.length >= 1 ? items[items.length - 1] : undefined);

/**
 * Find the next item in an array, compared to an item in the array
 */
const nextItem = <T,>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex + 1 <= items.length - 1 ? items[currentIndex + 1] : undefined;
};

/**
 * Find the previous item in an array, compared to an item in the array
 */
const previousItem = <T,>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex - 1 <= items.length - 1 ? items[currentIndex - 1] : undefined;
};

export interface AccordionSectionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  label: string;
  body: any;
  expanded?: boolean;
  disabled?: boolean;
  section?: boolean;
  onActivate?: Function;
  onButtonFocus?: Function;
  onButtonBlur?: Function;
  buttonRef?: RefObject<HTMLButtonElement>;
  icon?: ReactNode;
  appearance?: string;
}

export const AccordionSection = forwardRef(
  (
    {
      id,
      label,
      className,
      headingLevel = 1,
      expanded = false,
      disabled,
      section,
      children,
      buttonRef,
      onActivate,
      onButtonBlur,
      onButtonFocus,
      icon,
      appearance,
      ...props
    }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const panelAttributes = {
      className: clsx('utrecht-accordion__panel', {
        'utrecht-accordion__panel--expanded': expanded,
      }),
      // Use the `hidden` attribute so the toggle works even without CSS
      hidden: !expanded,
      // Use the `aria-hidden` attribute too, so it even works when CSS
      // doesn't use `display: none` to make transitions.
      'aria-hidden': !expanded,
    };

    let iconStart = icon ? icon : icon === null ? null : <IconChevronDown />;

    if (appearance === 'utrecht') {
      iconStart = null;
    }

    const idPrefix = 'utrecht-accordion';
    const idSuffix = id || useId();
    const buttonId = `${idPrefix}${idSuffix}-button`;
    const panelId = `${idPrefix}${idSuffix}-panel`;

    // We render `__section` as `div` for a specific reasons:
    // - when a user navigates to the `region` landmark we want the first
    //   content of the landmark to be the actual content, instead of starting
    //   with the button that controls the region.
    // - we only want expanded sections to show up as landmarks
    return (
      <div className={clsx('utrecht-accordion__section', className)} id={id} ref={ref} {...props}>
        <HTMLHeading level={headingLevel} className={clsx('utrecht-accordion__header')}>
          <Button
            className={clsx('utrecht-accordion__button', {
              ['utrecht-accordion__button--utrecht']: appearance === 'utrecht',
            })}
            appearance="subtle-button"
            aria-expanded={expanded === true}
            aria-controls={panelId}
            disabled={disabled}
            id={buttonId}
            onClick={() => typeof onActivate === 'function' && onActivate(ref)}
            onFocus={() => typeof onButtonFocus === 'function' && onButtonFocus(ref)}
            onBlur={() => typeof onButtonBlur === 'function' && onButtonBlur(ref)}
            ref={buttonRef}
          >
            {iconStart && <span className="utrecht-accordion__button-icon">{iconStart}</span>}
            <span className="utrecht-accordion__button-label">{label}</span>
          </Button>
        </HTMLHeading>
        {section ? (
          <section id={panelId} aria-labelledby={buttonId} {...panelAttributes}>
            {children}
          </section>
        ) : (
          <div id={panelId} {...panelAttributes}>
            {children}
          </div>
        )}
      </div>
    );
  },
);

AccordionSection.displayName = 'AccordionSection';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  heading?: string; // TODO: Allow nodes
  group?: false;
}

export const Accordion = forwardRef(
  (
    { children, group, headingLevel, heading, ...props }: PropsWithChildren<AccordionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const headingId = useId();

    return (
      <>
        {!!heading && typeof headingLevel === 'number' && <Heading level={headingLevel}>{heading}</Heading>}
        <div
          className={clsx('utrecht-accordion')}
          role={group ? 'group' : undefined}
          aria-labelledby={group ? headingId : undefined}
          {...props}
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  },
);

Accordion.displayName = 'Accordion';

export const useAccordion = <T,>(sections: T[], ref: RefObject<HTMLDivElement | undefined>) => {
  // const sections: AccordionSectionProviderProps[] = [];
  const refs: RefObject<HTMLDivElement>[] = sections.map((_) => useRef<HTMLDivElement>(null));
  const buttonRefs = sections.map((_) => useRef<HTMLButtonElement>(null));

  return {
    ref,
    refs,
    buttonRefs,

    /* ForwardedRef of the last section to receive focus */
    activeElement: null,

    /* ForwardedRef for each section, in document order */
    sections,
    focusNextSection: (activeElement: RefObject<HTMLDivElement>) => {
      const index = refs.indexOf(activeElement);
      const buttonRef = index >= 0 ? buttonRefs[index] : undefined;
      const nextSection = buttonRef ? nextItem(buttonRefs, buttonRef) : undefined;
      nextSection?.current?.focus();
    },
    focusFirstSection: () => {
      const firstSection = firstItem(buttonRefs);
      firstSection?.current?.focus();
    },
    focusPreviousSection: (activeElement: RefObject<HTMLDivElement>) => {
      const index = refs.indexOf(activeElement);
      const buttonRef = index >= 0 ? buttonRefs[index] : undefined;
      const previousSection = buttonRef ? previousItem(buttonRefs, buttonRef) : undefined;
      previousSection?.current?.focus();
    },
    focusLastSection: () => {
      const firstSection = lastItem(buttonRefs);
      firstSection?.current?.focus();
    },
  };
};

export interface AccordionSectionProviderProps {
  defaultExpanded?: boolean;
  expanded?: boolean;
}

export const useAccordionSection = (
  { defaultExpanded = false, expanded }: AccordionSectionProviderProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return {
    ref,
    expanded: typeof expanded === 'boolean' ? expanded : defaultExpanded,
  };
};

export interface AccordionProviderProps
  extends Pick<AccordionProps, 'heading' | 'headingLevel'>,
    Pick<AccordionSectionProps, 'icon' | 'appearance'> {
  sections: AccordionSectionProps[];
}

export const AccordionProvider = ({ sections, icon, appearance, heading, headingLevel }: AccordionProviderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { refs, buttonRefs, focusNextSection, focusFirstSection, focusLastSection, focusPreviousSection } =
    useAccordion(sections, ref);

  const [activeElement, setActiveElement] = useState<RefObject<HTMLDivElement> | null>(null);
  const [sectionsState, setSectionsState] = useState(sections);

  const handleButtonFocus = (ref: RefObject<HTMLDivElement>) => {
    setActiveElement(ref);
  };

  const handleButtonBlur = (_: RefObject<HTMLDivElement>) => {
    setActiveElement(null);
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLDivElement>) => {
    if (evt.code === 'End') {
      focusLastSection();
    } else if (evt.code === 'Home') {
      focusFirstSection();
    } else if (evt.code === 'ArrowDown') {
      if (activeElement) {
        focusNextSection(activeElement);
      }
    } else if (evt.code === 'ArrowUp') {
      if (activeElement) {
        focusPreviousSection(activeElement);
      }
    } else {
      // Do not `preventDefault()`
      return;
    }

    // Prevent scrolling the page
    evt.preventDefault();
  };

  const sectionHeadingLevel = typeof headingLevel === 'number' ? headingLevel + (heading ? 1 : 0) : undefined;

  return (
    <Accordion heading={heading} headingLevel={headingLevel} onKeyDown={handleKeyDown} ref={ref}>
      {sectionsState.map((section, index) => {
        const handleActivate = (ref: RefObject<HTMLDivElement>) => {
          const activatedIndex = refs.indexOf(ref);
          // const activatedSection = activatedIndex >= 0 ? sections[index] : undefined;
          setSectionsState(
            sectionsState.map((section, index) => {
              if (index === activatedIndex) {
                return {
                  ...section,
                  expanded: !section.expanded,
                };
              } else {
                return section;
              }
            }),
          );
        };
        return (
          <AccordionSection
            headingLevel={sectionHeadingLevel}
            {...section}
            icon={icon}
            appearance={appearance}
            ref={refs[index]}
            buttonRef={buttonRefs[index]}
            key={index}
            onButtonFocus={handleButtonFocus}
            onButtonBlur={handleButtonBlur}
            onActivate={handleActivate}
          >
            {section.body}
          </AccordionSection>
        );
      })}
    </Accordion>
  );
};

AccordionProvider.displayName = 'AccordionProvider';
