import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Paragraph } from './Paragraph';
import '@testing-library/jest-dom';

describe('Paragraph', () => {
  it('renders an HTML p element', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector('p:only-child');

    expect(paragraph).toBeInTheDocument();
  });

  it('renders a block element', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveStyle({ display: 'block' });
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('utrecht-paragraph');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Paragraph>
        Hello, <strong>world</strong>
      </Paragraph>,
    );

    const paragraph = container.querySelector(':only-child');

    const richText = paragraph?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('has no special appearance by default', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).not.toHaveClass('utrecht-paragraph--lead');
    expect(paragraph).not.toHaveClass('utrecht-paragraph--small');
  });

  it('has a lead paragraph appearance', () => {
    const { container } = render(<Paragraph appearance="lead" />);

    const leadParagraph = container.querySelector(':only-child');

    expect(leadParagraph).toHaveClass('utrecht-paragraph--lead');
    expect(leadParagraph).not.toHaveClass('utrecht-paragraph--small');
  });

  it('has a small paragraph appearance', () => {
    const { container } = render(<Paragraph appearance="small" />);

    const leadParagraph = container.querySelector(':only-child');

    expect(leadParagraph).toHaveClass('utrecht-paragraph--small');
    expect(leadParagraph).not.toHaveClass('utrecht-paragraph--lead');
  });

  it('can be hidden', () => {
    const { container } = render(<Paragraph hidden />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Paragraph className="intro" />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('intro');
  });
  it('can have a additional class name', () => {
    const { container } = render(<Paragraph className="large" />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('large');

    expect(paragraph).toHaveClass('utrecht-paragraph');
  });
  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>();

    const { container } = render(<Paragraph ref={ref} />);

    const paragraph = container.querySelector(':only-child');

    expect(ref.current).toBe(paragraph);
  });

  describe('deprecated', () => {
    it('has a lead paragraph variant with a `lead` flag', () => {
      const { container } = render(<Paragraph lead />);

      const leadParagraph = container.querySelector(':only-child');

      expect(leadParagraph).toHaveClass('utrecht-paragraph--lead');
    });

    it('has a lead paragraph variant with a `small` flag', () => {
      const { container } = render(<Paragraph small />);

      const leadParagraph = container.querySelector(':only-child');

      expect(leadParagraph).toHaveClass('utrecht-paragraph--small');
    });

    it('favors `appearance="lead"` over deprecated equivalent API', () => {
      const { container } = render(<Paragraph appearance="lead" small />);

      const leadParagraph = container.querySelector(':only-child');

      expect(leadParagraph).toHaveClass('utrecht-paragraph--lead');
      expect(leadParagraph).not.toHaveClass('utrecht-paragraph--small');
    });

    it('favors `appearance="small"` over deprecated equivalent API', () => {
      const { container } = render(<Paragraph appearance="small" lead />);

      const leadParagraph = container.querySelector(':only-child');

      expect(leadParagraph).toHaveClass('utrecht-paragraph--small');
      expect(leadParagraph).not.toHaveClass('utrecht-paragraph--lead');
    });
  });
});
