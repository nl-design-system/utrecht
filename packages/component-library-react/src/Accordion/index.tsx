import clsx from 'clsx';
import { useId, useState } from 'react';
import React from 'react';
import { Button, Heading3 } from '..';

export interface AccordionProps {
  label: string;
  body: any;
  locale?: string;
  expandedAccordion?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ label, body, locale, expandedAccordion = false }) => {
  const [expanded, setExpanded] = useState(expandedAccordion);
  const id = useId();
  return (
    <div className={clsx('utrecht-accordion')}>
      <Heading3 className={clsx('utrecht-accordion__label')}>
        <Button
          dir={locale}
          className={clsx('utrecht-accordion__button')}
          appearance="subtle-button"
          aria-expanded={expanded}
          aria-controls={`utrecht-accordion-label-${id}`}
          id={`${id}-id`}
          onClick={() => setExpanded(!expanded)}
        >
          {label}
        </Button>
      </Heading3>
      {expanded && (
        <div
          id={`utrecht-accordion-label-${id}`}
          role="region"
          aria-labelledby={`${id}-id`}
          className={clsx('utrecht-accordion__body')}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {body}
        </div>
      )}
    </div>
  );
};
