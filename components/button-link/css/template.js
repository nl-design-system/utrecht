import clsx from 'clsx';

export const defaultArgs = {
  external: false,
  hover: false,
  href: '',
  focus: false,
  focusVisible: false,
  textContent: '',
};

export const ButtonLink = ({
  external = false,
  hover = false,
  href = '',
  focus = false,
  focusVisible = false,
  textContent = '',
}) =>
  `<a role="button" href="${href}" class="${clsx(
    'utrecht-button-link',
    hover && 'utrecht-button-link--hover',
    focus && 'utrecht-button-link--focus',
    focusVisible && 'utrecht-button-link--focus-visible',
  )}"${external ? ' rel="external noopener noreferrer"' : ''}>${textContent}</a>`;
