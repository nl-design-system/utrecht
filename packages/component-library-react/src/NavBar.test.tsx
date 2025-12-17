import { render } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';

describe('Navigation bar', () => {
  it('sets aria-label from label prop', () => {
    const { container } = render(<NavBar label="Hoofdmenu" />);

    const nav = container.querySelector('nav');

    expect(nav).toHaveAttribute('aria-label', 'Hoofdmenu');
  });

  it('prefers aria-label prop over label prop', () => {
    const { container } = render(<NavBar label="Hoofdmenu" aria-label="Main navigation" />);

    const nav = container.querySelector('nav');

    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('does not set aria-label when neither label nor aria-label is provided', () => {
    const { container } = render(<NavBar />);

    const nav = container.querySelector('nav');

    expect(nav).not.toHaveAttribute('aria-label');
  });
});
