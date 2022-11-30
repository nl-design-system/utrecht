import clsx from 'clsx';
import { useId, useState } from 'react';
import React, { HTMLAttributes } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';

export interface AccordionSectionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  label: string;
  body: any;
  defaultExpanded?: boolean;
  section: boolean;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  id,
  label,
  headingLevel = 1,
  defaultExpanded = false,
  section,
  children,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

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
    <div className={clsx('utrecht-accordion__section')} id={id}>
      <Heading level={headingLevel} className={clsx('utrecht-accordion__header')}>
        <Button
          className={clsx('utrecht-accordion__button')}
          appearance="subtle-button"
          aria-expanded={expanded === true}
          aria-controls={panelId}
          id={buttonId}
          onClick={() => setExpanded(!expanded)}
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
};

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel?: number;
  heading?: string; // TODO: Allow nodes
  group?: false;
}

export const Accordion: React.FC<AccordionProps> = ({ children, group, headingLevel, heading }) => {
  const headingId = useId();
  return (
    <>
      {!!heading && typeof headingLevel === 'number' && <Heading level={headingLevel}>{heading}</Heading>}
      <div
        className={clsx('utrecht-accordion')}
        role={group ? 'group' : undefined}
        aria-labelledby={group ? headingId : undefined}
      >
        {children}
      </div>
    </>
  );
};
