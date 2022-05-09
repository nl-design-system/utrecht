import clsx from 'clsx';

export const defaultArgs = {
  direction: 'horizontal',
  innerHTML: '',
};

export const ButtonGroup = ({ innerHTML = '', direction = 'horizontal' }) =>
  `<div class="${clsx(
    'utrecht-button-group',
    direction === 'horizontal' && 'utrecht-button-group--horizontal',
    direction === 'vertical' && 'utrecht-button-group--vertical',
  )}" role="group">${innerHTML}</div>`;
