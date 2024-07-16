import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { HTMLHeading } from './HTMLHeading';
import '@testing-library/jest-dom';

describe('HTMLHeading', () => {
  it('renders a heading role element', () => {
    render(<HTMLHeading level={1}>Breaking news</HTMLHeading>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 1', () => {
    render(<HTMLHeading level={1}>Breaking news</HTMLHeading>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h1 element', () => {
    const { container } = render(<HTMLHeading level={1} />);

    const heading = container.querySelector('h1:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    render(
      <HTMLHeading level={1}>
        <strong>Breaking</strong> news
      </HTMLHeading>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<HTMLHeading level={1} hidden />);

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<HTMLHeading level={1} className="large" />);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>();

    const { container } = render(<HTMLHeading level={1} ref={ref} />);

    const heading = container.querySelector(':only-child');

    expect(ref.current).toBe(heading);
  });

  it(`it renders an <h2> element for headingLevel 2`, () => {
    const { container } = render(<HTMLHeading level={2} />);

    const heading = container.querySelector(`h2`);

    expect(heading).toBeInTheDocument();
  });

  it(`it renders an <h3> element for headingLevel 3`, () => {
    const { container } = render(<HTMLHeading level={3} />);

    const heading = container.querySelector(`h3`);

    expect(heading).toBeInTheDocument();
  });

  it(`it renders an <h4> element for headingLevel 4`, () => {
    const { container } = render(<HTMLHeading level={4} />);

    const heading = container.querySelector(`h4`);

    expect(heading).toBeInTheDocument();
  });

  it(`it renders an <h5> element for headingLevel 5`, () => {
    const { container } = render(<HTMLHeading level={5} />);

    const heading = container.querySelector(`h5`);

    expect(heading).toBeInTheDocument();
  });

  it(`it renders an <h6> element for headingLevel 6`, () => {
    const { container } = render(<HTMLHeading level={6} />);

    const heading = container.querySelector(`h6`);

    expect(heading).toBeInTheDocument();
  });

  it('renders a <p> element when no heading level is set', () => {
    const { container } = render(<HTMLHeading>Hello, world</HTMLHeading>);

    const paragraph = container.querySelector('p');

    expect(paragraph).toBeInTheDocument();
  });

  it('renders a <p> element when an invalid heading level is set', () => {
    const { container } = render(<HTMLHeading level={7}>Hello, world</HTMLHeading>);

    const paragraph = container.querySelector('p');

    expect(paragraph).toBeInTheDocument();
  });
});
