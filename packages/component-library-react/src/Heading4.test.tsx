import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading4 } from './Heading4';
import '@testing-library/jest-dom';

describe('Heading 4', () => {
  it('renders a heading role element', () => {
    render(<Heading4>Breaking news</Heading4>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 4', () => {
    render(<Heading4>Breaking news</Heading4>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 4,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h4 element', () => {
    const { container } = render(<Heading4 />);

    const heading = container.querySelector('h4:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Heading4 />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-4');
  });

  it('renders rich text content', () => {
    render(
      <Heading4>
        <strong>Breaking</strong> news
      </Heading4>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Heading4 hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Heading4 className="large" />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<Heading4 ref={ref} />);

    const heading = container.querySelector(':only-child');

    expect(ref.current).toBe(heading);
  });
});
