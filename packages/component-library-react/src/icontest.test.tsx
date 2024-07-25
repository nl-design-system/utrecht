import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Icon } from './Icon';
import '@testing-library/jest-dom';

describe('Icon', () => {
  it('is not available in the accessibility tree by default', () => {
    render(
      <div>
        <button>← Previous</button>
        <button>
          Next <Icon>→</Icon>
        </button>
      </div>,
    );

    const buttonWithoutIconComponent = screen.getByRole('button', {
      name: '← Previous',
    });

    const buttonWithIconComponent = screen.getByRole('button', {
      name: 'Next',
    });

    expect(buttonWithoutIconComponent).toBeInTheDocument();
    expect(buttonWithIconComponent).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('can be included in the accessibility tree when specified', () => {
    render(
      <Icon role="img" aria-label="Trash can">
        →
      </Icon>,
    );

    const accessibleIcon = screen.getByRole('img', { name: 'Trash can' });
    expect(accessibleIcon).toBeInTheDocument();
  });

  it('renders an HTML span element', () => {
    const { container } = render(<Icon />);

    const icon = container.querySelector('span:only-child');

    expect(icon).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Icon />);

    const icon = container.querySelector(':only-child');

    expect(icon).toHaveClass('utrecht-icon');
  });

  it('has aria-hidden="true" by default', () => {
    const { container } = render(<Icon />);

    const icon = container.querySelector(':only-child');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not have aria-hidden when role is not "presentation"', () => {
    const { container } = render(<Icon role="img" />);

    const icon = container.querySelector(':only-child');

    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Icon>
        <svg />
      </Icon>,
    );

    const icon = container.querySelector(':only-child');

    const svg = icon?.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Icon hidden />);

    const icon = container.querySelector(':only-child');

    expect(icon).not.toBeVisible();
  });

  it('can have an additional custom class name', () => {
    const { container } = render(<Icon className="xxl" />);

    const icon = container.querySelector(':only-child');

    expect(icon).toHaveClass('xxl');
    expect(icon).toHaveClass('utrecht-icon');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Icon ref={ref} />);

    const icon = container.querySelector(':only-child');

    expect(ref.current).toBe(icon);
  });
});
