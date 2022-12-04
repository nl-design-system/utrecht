/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import {
  Accordion as ReactAccordion,
  AccordionSection as ReactAccordionSection,
} from '../../../packages/component-library-react/src';
import './index.scss';

export const argTypes = {
  label: {
    name: 'label',
    type: { name: 'string', required: true },
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
  body: {
    name: 'body',
    type: { name: 'string', required: true },
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
  expandedAccordion: {
    name: 'expandedAccordion',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  locale: {
    name: 'locale',
    type: { name: 'string', required: false },
    control: { type: 'select' },
    options: ['nl', 'en', 'ar'],
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
};

export const defaultArgs = {
  // label: '',
  // body: '',
  // locale: '',
  // expandedAccordion: false,
  sections: [],
};

// export const exampleArgs = {
//   label: 'Lorem ipsum',
//   body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
//   laborum.`,
//   locale: 'nl',
//   expandedAccordion: true,
// };

export const exampleArgs = {
  sections: [
    {
      headingLevel: 2,
      label: 'Section 1',
      children: <p>test</p>,
      expanded: true,
    },
    {
      headingLevel: 2,
      label: 'Section 2 (not expanded by default)',
      children: <p>test</p>,
      expanded: false,
    },
  ],
};

export const Accordion = ({ sections = defaultArgs.sections }) => {
  return (
    <ReactAccordion>
      {sections.map(({ children, disabled, expanded, headingLevel, label, section }, index) => (
        <ReactAccordionSection
          defaultExpanded={expanded}
          label={label}
          headingLevel={headingLevel}
          section={section}
          disabled={disabled}
          key={index}
        >
          {children}
        </ReactAccordionSection>
      ))}
    </ReactAccordion>
  );
};

export default Accordion;
