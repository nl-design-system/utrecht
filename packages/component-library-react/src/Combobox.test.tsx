import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { Combobox } from './Combobox';

describe('Combobox', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<Combobox />);

    const combobox = container.querySelector('div:only-child');

    expect(combobox).toBeInTheDocument();
    expect(combobox).toBeVisible();
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Combobox />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('utrecht-combobox');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Combobox ref={ref} />);

    const combobox = container.querySelector(':only-child');

    expect(ref.current).toBe(combobox);
  });
});
