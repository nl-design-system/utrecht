import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Drawer } from './Drawer';
import '@testing-library/jest-dom';

describe('Drawer', () => {
  it('renders an HTML dialog element', () => {
    const { container } = render(<Drawer />);

    const div = container.querySelector('dialog:only-child');

    expect(div).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Drawer />);

    const doc = container.querySelector(':only-child');

    expect(doc).toHaveClass('utrecht-drawer');
  });
  it('can have a additional class name', () => {
    const { container } = render(<Drawer className="large" />);

    const document = container.querySelector(':only-child');

    expect(document).toHaveClass('large');

    expect(document).toHaveClass('utrecht-drawer');
  });
  it('displays as none', () => {
    const { container } = render(<Drawer />);

    const doc = container.querySelector(':only-child');

    expect(doc).toBeEmptyDOMElement();
    expect(doc).toHaveStyle({ display: 'none' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Drawer>
        <h1>Hello, world</h1>
      </Drawer>,
    );

    const doc = container.querySelector(':only-child');

    const richText = doc?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Drawer hidden />);

    const doc = container.querySelector(':only-child');

    expect(doc).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Drawer className="large" />);

    const doc = container.querySelector(':only-child');

    expect(doc).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>();

    const { container } = render(<Drawer ref={ref} />);

    const doc = container.querySelector(':only-child');

    expect(ref.current).toBe(doc);
  });
  it('can be opened', () => {
    const { container } = render(<Drawer open />);

    const doc = container.querySelector(':only-child');

    expect(doc).toBeVisible();
  });
});
