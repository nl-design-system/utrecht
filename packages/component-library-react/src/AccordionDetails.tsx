import clsx from 'clsx';
import {
  DetailsHTMLAttributes,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  RefObject,
  useId,
  useRef,
  useState,
} from 'react';
import { Heading } from './Heading';

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

export interface AccordionDetailsSectionProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  headingLevel?: number;
  label: string;
  body: any;
  expanded?: boolean;
  disabled?: boolean;
  section?: boolean;
  onActivate?: Function;
  onButtonFocus?: Function;
  onButtonBlur?: Function;
  buttonRef?: RefObject<HTMLElement>;
}

export const AccordionDetailsSection = forwardRef(
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
      ...props
    }: AccordionDetailsSectionProps,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    const panelAttributes = {
      className: clsx('utrecht-accordion__panel', {
        'utrecht-accordion__panel--expanded': expanded,
      }),
      // Use the `hidden` attribute so the toggle works even without CSS
      // hidden: !expanded,
      // Use the `aria-hidden` attribute too, so it even works when CSS
      // doesn't use `display: none` to make transitions.
      // 'aria-hidden': !expanded,
    };

    const idPrefix = 'utrecht-accordion';
    const idSuffix = id || useId();
    const buttonId = `${idPrefix}${idSuffix}-button`;
    const panelId = `${idPrefix}${idSuffix}-panel`;

    console.log(onActivate, onButtonBlur, onButtonFocus);
    // We render `__section` as `div` for a specific reasons:
    // - when a user navigates to the `region` landmark we want the first
    //   content of the landmark to be the actual content, instead of starting
    //   with the button that controls the region.
    // - we only want expanded sections to show up as landmarks
    return (
      <details className={clsx('utrecht-accordion__section', className)} id={id} ref={ref} {...props}>
        <summary
          id={buttonId}
          className={clsx('utrecht-accordion__button', {
            'utrecht-accordion__button': disabled,
            'utrecht-accordion__button--expanded': expanded,
            'utrecht-accordion__button--not-expanded': !expanded,
          })}
          ref={buttonRef}

          // onClick={() => typeof onActivate === 'function' && onActivate(ref)}
          // onFocus={() => typeof onButtonFocus === 'function' && onButtonFocus(ref)}
          // onBlur={() => typeof onButtonBlur === 'function' && onButtonBlur(ref)}
        >
          {/* TODO: Refactor naar `<h1>` - `<h6>` */}
          <div role="heading" aria-level={headingLevel} className={clsx('utrecht-accordion__header')}>
            {label}
          </div>
        </summary>
        {section ? (
          <section id={panelId} aria-labelledby={buttonId} {...panelAttributes}>
            {children}
          </section>
        ) : (
          <div {...panelAttributes}>{children}</div>
        )}
      </details>
    );
  },
);

AccordionDetailsSection.displayName = 'AccordionDetailsSection';
export interface AccordionDetailsProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  heading?: string; // TODO: Allow nodes
  group?: false;
}

export const AccordionDetails = forwardRef(
  (
    { children, group, headingLevel, heading, ...props }: PropsWithChildren<AccordionDetailsProps>,
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

AccordionDetails.displayName = 'AccordionDetails';

export const useAccordion = <T,>(sections: T[], ref: RefObject<HTMLDivElement | undefined>) => {
  console.log('useAccordion');
  // const sections: AccordionDetailsSectionProviderProps[] = [];
  const refs: RefObject<HTMLDetailsElement>[] = sections.map((_) => useRef<HTMLDetailsElement>(null));
  const buttonRefs = sections.map((_) => useRef<HTMLElement>(null));

  return {
    ref,
    refs,
    buttonRefs,

    /* ForwardedRef of the last section to receive focus */
    activeElement: null,

    /* ForwardedRef for each section, in document order */
    sections,
    focusNextSection: (activeElement: RefObject<HTMLDetailsElement>) => {
      const index = refs.indexOf(activeElement);
      const buttonRef = index >= 0 ? buttonRefs[index] : undefined;
      const nextSection = buttonRef ? nextItem(buttonRefs, buttonRef) : undefined;
      nextSection?.current?.focus();
    },
    focusFirstSection: () => {
      const firstSection = firstItem(buttonRefs);
      console.log(refs);
      firstSection?.current?.focus();
    },
    focusPreviousSection: (activeElement: RefObject<HTMLDetailsElement>) => {
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

export interface AccordionDetailsSectionProviderProps {
  defaultExpanded?: boolean;
  expanded?: boolean;
}

export const useAccordionSection = (
  { defaultExpanded = false, expanded }: AccordionDetailsSectionProviderProps,
  ref: ForwardedRef<HTMLDetailsElement>,
) => {
  return {
    ref,
    expanded: typeof expanded === 'boolean' ? expanded : defaultExpanded,
  };
};

export interface AccordionDetailsProviderProps {
  sections: AccordionDetailsSectionProps[];
}

export const AccordionDetailsProvider = ({ sections }: AccordionDetailsProviderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { refs, buttonRefs, focusNextSection, focusFirstSection, focusLastSection, focusPreviousSection } =
    useAccordion(sections, ref);

  const [activeElement, setActiveElement] = useState<RefObject<HTMLDivElement> | null>(null);
  const [sectionsState, setSectionsState] = useState(sections);

  const handleButtonFocus = (ref: RefObject<HTMLElement>) => {
    setActiveElement(ref);
  };

  const handleButtonBlur = (_: RefObject<HTMLElement>) => {
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

  return (
    <AccordionDetails onKeyDown={handleKeyDown} ref={ref}>
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
          <AccordionDetailsSection
            {...section}
            ref={refs[index]}
            buttonRef={buttonRefs[index]}
            key={index}
            onButtonFocus={handleButtonFocus}
            onButtonBlur={handleButtonBlur}
            onActivate={handleActivate}
          >
            {section.body}
          </AccordionDetailsSection>
        );
      })}
    </AccordionDetails>
  );
};

AccordionDetailsProvider.displayName = 'AccordionDetailsProvider';
