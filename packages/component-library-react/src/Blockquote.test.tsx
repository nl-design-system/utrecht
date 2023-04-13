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

  it('can have the source URL in a cite attribute of the blockquote element', () => {
    const url = 'https://example.com/';

    const { container } = render(
      <Blockquote cite={url}>
        <p>
          This domain is for use in illustrative examples in documents. You may use this domain in literature without
          prior coordination or asking for permission.
        </p>
      </Blockquote>,
    );

    const blockquote = container.querySelector('blockquote');

    expect(blockquote).toBeInTheDocument();

    if (blockquote) {
      expect(blockquote).toHaveAttribute('cite', url);
    }
  });

  describe('with a caption', () => {
    it('contains the blockquote inside a figure element', () => {
      const { container } = render(<Blockquote caption="example.com" />);

      const figure = container.querySelector('figure');

      expect(figure).toBeInTheDocument();

      if (figure) {
        const blockquote = figure.querySelector('blockquote');

        expect(blockquote).toBeInTheDocument();
      }
    });

    it('contains the caption inside a figcaption element', () => {
      const caption = 'example.com';
      const { container } = render(<Blockquote caption={caption} />);

      const figure = container.querySelector('figure');

      expect(figure).toBeInTheDocument();

      if (figure) {
        const figcaption = figure.querySelector('figcaption');

        expect(figcaption).toBeInTheDocument();
        expect(figcaption).toHaveTextContent(caption);
      }
    });
  });

  describe('in aside', () => {
    it('contains the blockquote inside the aside element', () => {
      const { container } = render(<Blockquote aside />);

      const aside = container.querySelector('aside');

      expect(aside).toBeInTheDocument();

      if (aside) {
        const blockquote = aside.querySelector('blockquote');

        expect(blockquote).toBeInTheDocument();
      }
    });

    it('can have the source URL in a cite attribute of the blockquote element', () => {
      const url = 'https://example.com/';

      const { container } = render(
        <Blockquote aside cite={url}>
          <p>
            This domain is for use in illustrative examples in documents. You may use this domain in literature without
            prior coordination or asking for permission.
          </p>
        </Blockquote>,
      );

      const blockquote = container.querySelector('blockquote');

      expect(blockquote).toBeInTheDocument();

      if (blockquote) {
        expect(blockquote).toHaveAttribute('cite', url);
      }
    });
  });

  describe('in figure', () => {
    it('contains the blockquote inside the aside element', () => {
      const { container } = render(<Blockquote figure />);

      const figure = container.querySelector('figure');

      expect(figure).toBeInTheDocument();

      if (figure) {
        const blockquote = figure.querySelector('blockquote');

        expect(blockquote).toBeInTheDocument();
      }
    });

    it('can have the source URL in a cite attribute of the blockquote element', () => {
      const url = 'https://example.com/';

      const { container } = render(
        <Blockquote figure cite={url}>
          <p>
            This domain is for use in illustrative examples in documents. You may use this domain in literature without
            prior coordination or asking for permission.
          </p>
        </Blockquote>,
      );

      const blockquote = container.querySelector('blockquote');

      expect(blockquote).toBeInTheDocument();

      if (blockquote) {
        expect(blockquote).toHaveAttribute('cite', url);
      }
    });
  });

  describe('in figure and aside', () => {
    it('contains the blockquote inside the aside element, inside the figure element', () => {
      const { container } = render(<Blockquote aside figure />);

      const figure = container.querySelector('figure');

      expect(figure).toBeInTheDocument();

      if (figure) {
        const aside = container.querySelector('aside');

        expect(aside).toBeInTheDocument();

        if (aside) {
          const blockquote = aside.querySelector('blockquote');

          expect(blockquote).toBeInTheDocument();
        }
      }
    });

    it('can have the source URL in a cite attribute of the blockquote element', () => {
      const url = 'https://example.com/';

      const { container } = render(
        <Blockquote aside figure cite={url}>
          <p>
            This domain is for use in illustrative examples in documents. You may use this domain in literature without
            prior coordination or asking for permission.
          </p>
        </Blockquote>,
      );

      const blockquote = container.querySelector('blockquote');

      expect(blockquote).toBeInTheDocument();

      if (blockquote) {
        expect(blockquote).toHaveAttribute('cite', url);
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
