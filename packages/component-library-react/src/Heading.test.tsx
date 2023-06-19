import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Heading } from './Heading';
import '@testing-library/jest-dom';

describe('Heading with variable heading level', () => {
  it('renders a heading role element', () => {
    render(<Heading>Breaking news</Heading>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 6 by default', () => {
    render(<Heading>Breaking news</Heading>);

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 6,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h6 element by default', () => {
    const { container } = render(<Heading />);

    const heading = container.querySelector('h6:only-child');

    expect(heading).toBeInTheDocument();
  });

  [1, 2, 3, 4, 5, 6].forEach((level) => {
    describe(`heading level ${level}`, () => {
      it('renders rich text content', () => {
        render(
          <Heading level={level}>
            <strong>Breaking</strong> news
          </Heading>,
        );

        const heading = screen.getByRole('heading', {
          name: 'Breaking news',
          level,
        });

        const richText = heading.querySelector('strong');

        expect(richText).toBeInTheDocument();
      });

      it('can be hidden', () => {
        const { container } = render(<Heading level={level} hidden />);

        const heading = container.querySelector(':only-child');

        expect(heading).not.toBeVisible();
      });

      it('can have a custom class name', () => {
        const { container } = render(<Heading level={level} className="large" />);

        const heading = container.querySelector(':only-child');

        expect(heading).toHaveClass('large');
      });

      it('can have a additional class name', () => {
        const { container } = render(<Heading level={level} className="large" />);

        const heading = container.querySelector(':only-child');

        expect(heading).toHaveClass('large');

        expect(heading).toHaveClass(`utrecht-heading-${level}`);
      });

      it('supports ForwardRef in React', () => {
        const ref = createRef<HTMLHeadingElement>();

        const { container } = render(<Heading level={level} ref={ref} />);

        const heading = container.querySelector(':only-child');

        expect(ref.current).toBe(heading);
      });
    });
  });

  describe('invalid heading level', () => {
    [0, 7, NaN].forEach((level) => {
      describe(`level ${level}`, () => {
        it('renders a heading at heading level 6', () => {
          render(<Heading>Breaking news</Heading>);

          const heading = screen.getByRole('heading', {
            name: 'Breaking news',
            level: 6,
          });

          expect(heading).toBeInTheDocument();
        });
      });

      it('renders an HTML h6 element by default', () => {
        const { container } = render(<Heading />);

        const heading = container.querySelector('h6:only-child');

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
