import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
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
});
