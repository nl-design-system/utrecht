import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Combobox } from './index';
import '@testing-library/jest-dom';

describe('Combobox', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<Combobox />);

    const combobox = container.querySelector('div:only-child');

    expect(combobox).toBeInTheDocument();
    expect(combobox).toBeVisible();
  });

  it('does not render a combobox role element', () => {
    render(<Combobox />);

    let combobox;

    try {
      combobox = screen.getByRole('combobox');
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(combobox).toBeUndefined();
  });

  it('renders a design system BEM block class name: utrecht-combobox', () => {
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
