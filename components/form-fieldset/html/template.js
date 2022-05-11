export const defaultArgs = {
  innerHTML: '',
  legend: '',
};

export const FormFieldset = ({ innerHTML = '', legend = '' }) =>
  `<div class="utrecht-html">
  <fieldset>
    ${legend ? `<legend>${legend}</legend>` : ''}
    ${innerHTML}
  </fieldset>
</div>`;
