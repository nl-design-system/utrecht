import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading5 } from './Heading5';
import '@testing-library/jest-dom';

describe('Heading 5', () => {
  it('renders a heading role element', () => {
    render(<Heading5>Breaking news</Heading5>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 5', () => {
    render(<Heading5>Breaking news</Heading5>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 5,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h5 element', () => {
    const { container } = render(<Heading5 />);

    const heading = container.querySelector('h5:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Heading5 />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-5');
  });

  it('renders rich text content', () => {
    render(
      <Heading5>
        <strong>Breaking</strong> news
      </Heading5>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Heading5 hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Heading5 className="large" />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<Heading5 ref={ref} />);

    const heading = container.querySelector(':only-child');

    expect(ref.current).toBe(heading);
  });
});
