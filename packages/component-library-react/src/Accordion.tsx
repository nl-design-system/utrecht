import clsx from 'clsx';
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  RefObject,
  SVGProps,
  useId,
  useRef,
  useState,
} from 'react';
import { Button } from './Button';
import { Heading } from './Heading';

interface AccordionIconProps extends SVGProps<SVGSVGElement> {
  expanded: boolean;
}

const AccordionIcon = ({ expanded, ...restProps }: AccordionIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    className={clsx('utrecht-accordion__icon', {
      'utrecht-accordion__icon--expanded': expanded,
    })}
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 8"
    {...restProps}
  >
    <defs>
      <clipPath id="a">
        <path strokeWidth={0} d="M0 0h14v8H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path d="M7 8c-.26 0-.51-.1-.71-.29l-6-6C-.1 1.32-.1.68.29.29s1.03-.39 1.42 0L7 5.58 12.29.29A.996.996 0 1 1 13.7 1.7l-6 6c-.2.2-.45.29-.71.29Z" />
    </g>
  </svg>
);
export default AccordionIcon;

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
}

export const AccordionSection = forwardRef(
  (
    {
      id,
      label,
      headingLevel = 1,
      expanded = false,
      disabled,
      section,
      children,
      buttonRef,
      onActivate,
      onButtonBlur,
      onButtonFocus,
    }: AccordionSectionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const panelAttributes = {
      className: clsx('utrecht-accordion__panel', {
        'utrecht-accordion__panel--expanded': expanded,
      }),
      // Use the `aria-hidden` attribute too, so it even works when CSS
      // doesn't use `display: none` to make transitions.
      'aria-hidden': !expanded,
    };

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
      <div className={clsx('utrecht-accordion__section')} id={id} ref={ref}>
        <Heading level={headingLevel} className={clsx('utrecht-accordion__header')}>
          <Button
            className={clsx('utrecht-accordion__button')}
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
            {label}
            <div className="utrecht-accordion__icon-box">
              <AccordionIcon expanded={expanded} />
            </div>
          </Button>
        </Heading>
        {section ? (
          <section id={panelId} aria-labelledby={buttonId} {...panelAttributes}>
            {children}
          </section>
        ) : (
          <div {...panelAttributes}>
            <div className={clsx('utrecht-accordion__panel-content')}>{children}</div>
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
  console.log('useAccordion');
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
      console.log(refs);
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

export interface AccordionProviderProps {
  sections: AccordionSectionProps[];
}

export const AccordionProvider = ({ sections }: AccordionProviderProps) => {
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

  return (
    <Accordion onKeyDown={handleKeyDown} ref={ref}>
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
            {...section}
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
