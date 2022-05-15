const exampleOptions = [
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2', selected: true },
  { value: '3', label: 'Option #3' },
];

export const defaultArgs = {
  disabled: false,
  invalid: false,
  required: false,
  options: exampleOptions,
};

export const Select = ({ disabled = false, invalid = false, options = [], required = false }) =>
  `<section class="utrecht-html">
  <select${invalid ? ' aria-invalid="true"' : ''}${disabled ? ' disabled' : ''}${
    required ? ' required' : ''
  } class="utrecht-select">
    ${options
      .map(
        ({ label, selected, value }) =>
          `<option${selected ? ' selected' : ''}${value ? ` value="${value}"` : ''}>${label}</option>`,
      )
      .join('\n    ')}
  </select>
</section>`;
