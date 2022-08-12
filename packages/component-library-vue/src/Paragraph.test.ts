/* eslint-env jest */
import { render } from '@testing-library/vue';
import Paragraph from './Paragraph.vue';
import '@testing-library/jest-dom';

describe('Paragraph', () => {
  it('renders a implicit paragraph role element', () => {
    const { container } = render(Paragraph);

    const element = container.querySelector('p:only-child');

    expect(element).not.toHaveAttribute('aria-role');
    expect(element).not.toHaveAttribute('role');
  });

  it('renders an HTML p element', () => {
    const { container } = render(Paragraph);

    const paragraph = container.querySelector('p:only-child');

    expect(paragraph).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Paragraph);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('utrecht-paragraph');
  });

  it('renders rich text content', () => {
    const { container } = render(Paragraph, {
      slots: {
        default: '<strong>Breaking</strong> news',
      },
    });

    const paragraph = container.querySelector(':only-child');

    const richText = paragraph?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Paragraph, { props: { hidden: true } });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Paragraph, { props: { class: 'lead' } });

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toHaveClass('lead');
  });

  describe('lead variant', () => {
    it('is not a lead paragraph variant by default', () => {
      const { container } = render(Paragraph);

      const paragraph = container.querySelector(':only-child');

      expect(paragraph).not.toHaveClass('utrecht-paragraph--lead');
    });

    it('has a lead paragraph variant', () => {
      const { container } = render(Paragraph, { props: { lead: true } });

      const leadParagraph = container.querySelector(':only-child');

      expect(leadParagraph).toHaveClass('utrecht-paragraph--lead');
    });
  });
});
