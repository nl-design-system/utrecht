import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { FigureDetails } from './FigureDetails';
import '@testing-library/jest-dom';

describe('Figure details', () => {
  it('renders no dialog role element by default', () => {
    render(<FigureDetails />);

    expect(() => {
      screen.getByRole('dialog');
    }).toThrow();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FigureDetails />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('utrecht-figure');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FigureDetails className="large" />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('large');
    expect(drawer).toHaveClass('utrecht-figure');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FigureDetails>
        <h1>Hello, world</h1>
      </FigureDetails>,
    );

    const drawer = container.querySelector(':only-child');

    const richText = drawer?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FigureDetails hidden />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FigureDetails className="large" />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>();

    const { container } = render(<FigureDetails ref={ref} />);

    const drawer = container.querySelector(':only-child');

    expect(ref.current).toBe(drawer);
  });

  describe('open dialog', () => {
    it('can be opened with `open` attribute', () => {
      const { container } = render(<FigureDetails open />);
      const figure = container.querySelector('figure:only-child');

      expect(figure).toBeVisible();
    });

    it.skip('can be opened with the `showModal` method', () => {
      /* this only applies to the web component */
    });
  });
});
