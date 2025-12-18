import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';

describe('Navigation bar', () => {
  it('renders an HTML nav element', () => {
    const { container } = render(<NavBar />);

    const nav = container.querySelector('nav');

    expect(nav).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<NavBar />);

    const nav = container.querySelector('nav');

    expect(nav).toHaveClass('utrecht-nav-bar');
  });

  it('sets aria-labelledby and renders heading when label prop is provided', () => {
    const { container } = render(<NavBar label="Hoofdmenu" />);

    const nav = container.querySelector('nav');
    const heading = screen.getByText('Hoofdmenu');

    expect(nav).toHaveAttribute('aria-labelledby');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute('aria-hidden', 'true');
    expect(heading.id).toBe(nav?.getAttribute('aria-labelledby'));
  });

  it('does not set aria-labelledby when label is not provided', () => {
    const { container } = render(<NavBar />);

    const nav = container.querySelector('nav');

    expect(nav).not.toHaveAttribute('aria-labelledby');
  });

  it('renders center modifier class when appearance is center', () => {
    const { container } = render(<NavBar appearance="center" />);

    const content = container.querySelector('.utrecht-nav-bar__content');

    expect(content).toHaveClass('utrecht-nav-bar__content--center');
  });

  it('can have a custom class name', () => {
    const { container } = render(<NavBar className="custom-nav" />);

    const nav = container.querySelector('nav');

    expect(nav).toHaveClass('custom-nav');
    expect(nav).toHaveClass('utrecht-nav-bar');
  });

  it('can contain children', () => {
    render(
      <NavBar>
        <div>Test content</div>
      </NavBar>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
