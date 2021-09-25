import clsx from 'clsx';

export const AccordionHeading = ({ expanded, innerHTML }) =>
  `<div class="${clsx(
    'utrecht-accordion__heading',
    expanded && 'utrecht-accordion__heading--expanded',
    !expanded && 'utrecht-accordion__heading--not-expanded',
  )}" aria-expanded="${!!expanded}">${innerHTML}</div>`;

export const AccordionPanel = ({ expanded, innerHTML }) =>
  `<div class="${clsx(
    'utrecht-accordion__panel',
    expanded && 'utrecht-accordion__panel--expanded',
    !expanded && 'utrecht-accordion__panel--not-expanded',
  )}">${innerHTML}</div>`;

export const AccordionSection = ({ expanded, innerHTML }) =>
  `<div class="${clsx(
    'utrecht-accordion__section',
    expanded && 'utrecht-accordion__section--expanded',
    !expanded && 'utrecht-accordion__section--not-expanded',
  )}">${innerHTML}</div>`;

export const defaultArgs = { items: [] };

export const Accordion = ({ items }) => `<div class="utrecht-accordion">
${items
  .map(
    ({ heading, panel, expanded }) =>
      `<div class="utrecht-accordion__section">
      ${AccordionSection({
        innerHTML:
          AccordionHeading({ expanded, innerHTML: heading }) +
          AccordionPanel({
            expanded,
            innerHTML: panel,
          }),
      })}
      </div>`,
  )
  .join('\n')}
</div>`;
