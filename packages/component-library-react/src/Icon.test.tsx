import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Icon } from './Icon';
import '@testing-library/jest-dom';

describe('Icon', () => {
  it('with text is not available in the accessibility tree', () => {
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
  });

  it('with SVG is not available in the accessibility tree', () => {
    render(
      <div>
        <button>← Previous</button>
        <button>
          Next{' '}
          <Icon>
            <svg role="presentation" width="8" height="14" viewBox="0 0 8 14">
              <title>›</title>
              <path
                d="m7,14c-.26,0-.51-.1-.71-.29L.29,7.71c-.39-.39-.39-1.02,0-1.41L6.29.29c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41L2.41,7l5.29,5.29c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29Z"
                strokeWidth="0"
              />
            </svg>
          </Icon>
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
  });

  it('with SVG link is not available in the accessibility tree', () => {
    render(
      <div>
        <button>← Previous</button>
        <button>
          Next{' '}
          <Icon>
            <svg role="presentation" width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <a href="https://www.example.com"></a>
              <title>›</title>
              <path
                d="m7,14c-.26,0-.51-.1-.71-.29L.29,7.71c-.39-.39-.39-1.02,0-1.41L6.29.29c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41L2.41,7l5.29,5.29c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29Z"
                strokeWidth="0"
              />
            </svg>
          </Icon>
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

  it.skip('displays as CSS inline-block element', () => {
    const { container } = render(<Icon />);

    const icon = container.querySelector(':only-child');

    expect(icon).toBeVisible();
    expect(icon).toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Icon>
        <svg />
      </Icon>,
    );

    const icon = container.querySelector(':only-child');

    const dialog = icon?.querySelector('svg');

    expect(dialog).toBeInTheDocument();
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
