import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Drawer } from './Drawer';
import '@testing-library/jest-dom';

describe('Drawer', () => {
  it('renders no dialog role element by default', () => {
    render(<Drawer />);

    expect(() => {
      screen.getByRole('dialog');
    }).toThrow();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Drawer />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('utrecht-drawer');
  });

  it('is not visible by default', () => {
    const { container } = render(<Drawer />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).not.toBeVisible();
  });

  it('can have a additional class name', () => {
    const { container } = render(<Drawer className="large" />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('large');
    expect(drawer).toHaveClass('utrecht-drawer');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Drawer>
        <h1>Hello, world</h1>
      </Drawer>,
    );

    const drawer = container.querySelector(':only-child');

    const richText = drawer?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Drawer hidden />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Drawer className="large" />);

    const drawer = container.querySelector(':only-child');

    expect(drawer).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>();

    const { container } = render(<Drawer ref={ref} />);

    const drawer = container.querySelector(':only-child');

    expect(ref.current).toBe(drawer);
  });

  describe('open dialog', () => {
    it('renders an HTML dialog element', () => {
      const { container } = render(<Drawer open />);

      const drawer = container.querySelector('dialog:only-child');

      expect(drawer).toBeInTheDocument();
    });

    it('can be opened with `open` attribute', () => {
      const { container } = render(<Drawer open />);
      const drawer = container.querySelector(':only-child');

      expect(drawer).toBeVisible();
    });

    it.skip('can be opened with the `showModal` method', () => {
      /* this only applies to the web component */
    });

    it('can be hidden', () => {
      const { container } = render(<Drawer open hidden />);

      const drawer = container.querySelector(':only-child');

      expect(drawer).not.toBeVisible();
    });
  });
});
