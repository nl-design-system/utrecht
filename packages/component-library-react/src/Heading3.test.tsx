import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading3 } from './Heading3';
import '@testing-library/jest-dom';

describe('Heading 3', () => {
  it('renders a heading role element', () => {
    render(<Heading3>Breaking news</Heading3>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 3', () => {
    render(<Heading3>Breaking news</Heading3>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 3,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h3 element', () => {
    const { container } = render(<Heading3 />);

    const heading = container.querySelector('h3:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Heading3 />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-3');
  });

  it('renders rich text content', () => {
    render(
      <Heading3>
        <strong>Breaking</strong> news
      </Heading3>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Heading3 hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Heading3 className="large" />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<Heading3 ref={ref} />);

    const heading = container.querySelector(':only-child');

    expect(ref.current).toBe(heading);
  });
});
