import clsx from 'clsx';
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  RefObject,
  useId,
  useRef,
} from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';

export interface AccordionSectionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  label: string;
  body: any;
  expanded?: boolean;
  disabled?: boolean;
  section?: boolean;
  onActivate?: Function;
}

export const AccordionSection = forwardRef(
  (
    { id, label, headingLevel = 1, expanded = false, disabled, section, children, onActivate }: AccordionSectionProps,
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
            onClick={() => typeof onActivate === 'function' && onActivate()}
          >
            {label}
          </Button>
        </Heading>
        {section ? (
          <section id={panelId} aria-labelledby={buttonId} {...panelAttributes}>
            {children}
          </section>
        ) : (
          <div {...panelAttributes}>{children}</div>
        )}
      </div>
    );
  },
);

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  heading?: string; // TODO: Allow nodes
  group?: false;
}

export const Accordion = forwardRef(
  (
    { children, group, headingLevel, heading }: PropsWithChildren<AccordionProps>,
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
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  },
);

const nextItem = <T,>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex + 1 <= items.length - 1 ? items[currentIndex + 1] : undefined;
};

const previousItem = <T,>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex - 1 <= items.length - 1 ? items[currentIndex - 1] : undefined;
};

export const useAccordion = <T,>(sections: T[], ref: RefObject<HTMLDivElement | undefined>) => {
  // const sections: AccordionSectionProviderProps[] = [];
  let activeElement: RefObject<HTMLDivElement | undefined> | null = null;
  const refs: RefObject<HTMLDivElement | undefined>[] = sections.map((_) => useRef<HTMLDivElement>());
  return {
    ref,
    refs,

    /* ForwardedRef of the last section to receive focus */
    activeElement: null,

    /* ForwardedRef for each section, in document order */
    sections,
    focusNextSection: () => {
      const nextSection: RefObject<HTMLDivElement | undefined> | undefined = activeElement
        ? nextItem(refs, activeElement)
        : undefined;
      nextSection?.current?.focus();
    },
    focusFirstSection: () => {
      const firstSection = refs[0];
      firstSection?.current?.focus();
    },
    focusPreviousSection: () => {
      const previousSection = activeElement ? previousItem(refs, activeElement) : undefined;
      previousSection?.current?.focus();
    },
    focusLastSection: () => {
      const firstSection = refs[refs.length - 1];
      firstSection?.current?.focus();
    },
  };
};

interface AccordionSectionProviderProps {
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

interface AccordionProviderProps {
  // sections: PropsWithChildren<AccordionSectionProviderProps>[];
  sections: AccordionSectionProps[];
}

export const AccordionProvider = ({ sections }: AccordionProviderProps) => {
  const ref = useRef();
  const { refs, focusNextSection, focusFirstSection, focusLastSection, focusPreviousSection } = useAccordion(
    sections,
    ref,
  );

  const handleKeyDown = (evt: KeyboardEvent<HTMLDivElement>) => {
    if (evt.code === 'End') {
      console.log('Section: Focus last section');
      focusLastSection();
    } else if (evt.code === 'Home') {
      console.log('Section: Focus first section');
      focusFirstSection();
    } else if (evt.code === 'ArrowDown') {
      console.log('Section: Focus next section');
      focusNextSection();
    } else if (evt.code === 'ArrowUp') {
      console.log('Section: Focus previous section');
      focusPreviousSection();
    } else {
      return;
    }

    // Prevent scrolling the page
    evt.preventDefault();
  };

  return (
    <Accordion onKeyDown={handleKeyDown} ref={ref}>
      {sections.map((section, index) => {
        const handleActivate = () => console.log('activate', section);
        return (
          <AccordionSection {...section} ref={refs[index]} key={index} onActivate={handleActivate}>
            {section.children}
          </AccordionSection>
        );
      })}
    </Accordion>
  );
};

export const test = () => {
  <AccordionProvider sections={[{ label: 'Hello world', body: <p>Lorem ipsum</p> }]} />;
};
