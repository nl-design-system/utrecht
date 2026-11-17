import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Icon, type IconData } from './index';
import '@testing-library/jest-dom';

const arrow: IconData = {
  viewBox: '0 0 8 14',
  body: '<path d="M1 1l6 6-6 6"/>',
  unicodeBidi: false,
};

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

  it('renders the icon prop as an inline svg', () => {
    const { container } = render(<Icon icon={arrow} />);
    const svg = container.querySelector('span.utrecht-icon > svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 8 14');
    expect(svg?.querySelector('path')).toHaveAttribute('d', 'M1 1l6 6-6 6');
  });

  it('renders the svg of the icon prop in the text color and not focusable', () => {
    const { container } = render(<Icon icon={arrow} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('renders the icon prop instead of the children', () => {
    const { container } = render(<Icon icon={arrow}>→</Icon>);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container).not.toHaveTextContent('→');
  });

  it('keeps an icon from the icon prop out of the accessibility tree by default', () => {
    const { container } = render(<Icon icon={arrow} />);
    expect(container.querySelector(':only-child')).toHaveAttribute('aria-hidden', 'true');
  });
});
