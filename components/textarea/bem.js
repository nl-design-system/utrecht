import clsx from 'clsx';

export const defaultArgs = {
  disabled: false,
  focus: false,
  hover: false,
  invalid: false,
  placeholder: '',
  readOnly: false,
  required: false,
  textContent: '',
};

export const TextArea = ({
  disabled = false,
  focus = false,
  hover = false,
  invalid = false,
  placeholder = '',
  readOnly = false,
  required = false,
  textContent = '',
}) =>
  `<textarea class="${clsx(
    'utrecht-textarea',
    'utrecht-textarea--html-textarea',
    disabled && 'utrecht-textarea--disabled',
    focus && 'utrecht-textarea--focus utrecht-textarea--focus-visible',
    hover && 'utrecht-textarea--hover',
    invalid && 'utrecht-textarea--invalid',
    readOnly && 'utrecht-textarea--readonly',
    required && 'utrecht-textarea--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly' : ''}${required ? ' required' : ''}>${textContent}</textarea>`;
