import { render } from '@testing-library/angular';
import { UtrechtParagraph } from './component';
import { clearElements } from '../utils';

import '@testing-library/jest-dom';

afterEach(() => {
  clearElements();
});

describe('Paragraph', () => {
  it('renders an HTML p element', async () => {
    const { container } = await render('<p utrecht-paragraph></p>', {
      declarations: [UtrechtParagraph],
    });

    const paragraph = container.querySelector('p:only-child');

    expect(paragraph).toBeInTheDocument();
  });

  it('renders no additional elements', async () => {
    const { container } = await render('<p utrecht-paragraph></p>', {
      declarations: [UtrechtParagraph],
    });

    const elements = container.querySelectorAll('*');

    expect(elements.length).toBe(1);
  });

  it('renders a block element', async () => {
    const { container } = await render('<p utrecht-paragraph></p>', {
      declarations: [UtrechtParagraph],
    });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveStyle({ display: 'block' });
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<p utrecht-paragraph></p>', {
      declarations: [UtrechtParagraph],
    });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('utrecht-paragraph');
  });

  it('renders rich text content', async () => {
    const { container } = await render('<p utrecht-paragraph> Hello, <strong>world </strong></p>', {
      declarations: [UtrechtParagraph],
    });

    const paragraph = container.querySelector(':only-child');

    const richText = paragraph?.querySelector('strong');

    expect(paragraph).toContainElement(richText as HTMLElement);
  });

  it('is not a lead paragraph variant by default', async () => {
    const { container } = await render('<p utrecht-paragraph></p>', {
      declarations: [UtrechtParagraph],
    });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).not.toHaveClass('utrecht-paragraph--lead');
  });

  it('has a lead paragraph variant', async () => {
    const { container } = await render('<p utrecht-paragraph [lead]="lead"></p>', {
      declarations: [UtrechtParagraph],
      componentProperties: {
        lead: true,
      },
    });

    const leadParagraph = container.querySelector(':only-child');

    expect(leadParagraph).toHaveClass('utrecht-paragraph--lead');
  });

  describe('lead', () => {
    it('has renders a <b> element', async () => {
      const { container } = await render('<p utrecht-paragraph [lead]="lead"></p>', {
        declarations: [UtrechtParagraph],
        componentProperties: {
          lead: true,
        },
      });

      const bold = container.querySelector('b');

      expect(bold).toBeInTheDocument();
    });
  });

  describe('small print', () => {
    it('has renders a <small> element', async () => {
      const { container } = await render('<p utrecht-paragraph [small]="small"></p>', {
        declarations: [UtrechtParagraph],
        componentProperties: {
          small: true,
        },
      });

      const small = container.querySelector('small');

      expect(small).toBeInTheDocument();
    });
  });
  it('can be hidden', async () => {
    const { container } = await render('<p utrecht-paragraph [hidden]="hidden"></p>', {
      declarations: [UtrechtParagraph],
      componentProperties: {
        hidden: true,
      },
    });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { container } = await render('<p utrecht-paragraph [class]="class"></p>', {
      declarations: [UtrechtParagraph],
      componentProperties: {
        class: 'intro',
      },
    });
    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('utrecht-paragraph');
    expect(paragraph).toHaveClass('intro');
  });
});
