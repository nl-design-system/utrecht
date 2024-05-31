import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Blockquote } from './Blockquote';
import '@testing-library/jest-dom';

describe('Blockquote', () => {
  it('renders an HTML blockquote element', () => {
    const { container } = render(<Blockquote />);

    const blockquote = container.querySelector('blockquote:only-child');

    expect(blockquote).toBeInTheDocument();
  });

  it('renders a block element', () => {
    const { container } = render(<Blockquote />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveStyle({ display: 'block' });
  });

  it('renders a design system BEM class name: utrecht-blockquote', () => {
    const { container } = render(<Blockquote />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('utrecht-blockquote');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Blockquote>
        <code>Hello, world</code>
      </Blockquote>,
    );

    const blockquote = container.querySelector(':only-child');

    const richText = blockquote?.querySelector('code');

    expect(richText).toBeInTheDocument();
  });

  // Make sure Blockquote isn't implemented as `<p>` element,
  // because then it would be impossible to render `<p>` children.
  it('can render multiple paragraph of rich text content', () => {
    const { container } = render(
      <Blockquote>
        <p>Hello...</p>
        <p>...world</p>
      </Blockquote>,
    );

    const blockquote = container.querySelector(':only-child');

    const richText = blockquote?.querySelector('p + p');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Blockquote hidden />);

    const blockquote = container.querySelector(':only-child');

    expect(blockquote).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Blockquote className="callout" />);

    const blockquote = container.querySelector(':only-child');

    expect(blockquote).toHaveClass('callout');
  });

  it('can have a additional class name', () => {
    const { container } = render(<Blockquote className="callout" />);

    const blockquote = container.querySelector(':only-child');

    expect(blockquote).toHaveClass('callout');
    expect(blockquote).toHaveClass('utrecht-blockquote');
  });

  describe('attribution', () => {
    it('can contain rich text', () => {
      const { container } = render(
        <Blockquote attribution={<cite>The C Programming Language</cite>}>
          <p>Hello, world</p>
        </Blockquote>,
      );

      const richText = container.querySelector('cite');

      expect(richText).toBeInTheDocument();
    });

    it('follows the the content in document order', () => {
      const { container } = render(
        <Blockquote attribution={<cite>The C Programming Language</cite>}>
          <p>Hello, world</p>
        </Blockquote>,
      );

      const attribution = container.querySelector('cite');
      const content = container.querySelector('p');

      if (attribution && content) {
        expect(attribution.compareDocumentPosition(content)).toBe(2);
      }
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLQuoteElement>();

    const { container } = render(<Blockquote ref={ref} />);

    const blockquote = container.querySelector(':only-child');

    expect(ref.current).toBe(blockquote);
  });
});
