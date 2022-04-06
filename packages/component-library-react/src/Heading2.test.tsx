import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading2 } from './Heading2';
import '@testing-library/jest-dom';

describe('Heading 2', () => {
  it('renders a heading role element', () => {
    render(<Heading2>Breaking news</Heading2>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 2', () => {
    render(<Heading2>Breaking news</Heading2>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 2,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h2 element', () => {
    const { container } = render(<Heading2 />);

    const heading = container.querySelector('h2:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Heading2 />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-2');
  });

  it('renders rich text content', () => {
    render(
      <Heading2>
        <strong>Breaking</strong> news
      </Heading2>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Heading2 hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Heading2 className="large" />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<Heading2 ref={ref} />);

    const heading = container.querySelector(':only-child');

    expect(ref.current).toBe(heading);
  });
});
