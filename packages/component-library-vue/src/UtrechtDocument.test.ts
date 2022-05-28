/* eslint-env jest */
import { render } from '@testing-library/vue';
import Document from './UtrechtDocument.vue';
import '@testing-library/jest-dom';

describe('Document', () => {
  it('renders an HTML div element', () => {
    const { container } = render(Document);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Document);

    const doc = container.querySelector(':only-child');

    expect(doc).toHaveClass('utrecht-document');
  });

  it('displays as CSS block element', () => {
    const { container } = render(Document);

    const doc = container.querySelector(':only-child');

    expect(doc).toBeVisible();
    expect(doc).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(Document, {
      slots: {
        default: '<h1>Hello, world</h1>',
      },
    });

    const document = container.querySelector(':only-child');

    const richText = document?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Document, { props: { hidden: true } });

    const doc = container.querySelector(':only-child');

    expect(doc).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Document, { props: { class: 'large' } });

    const doc = container.querySelector(':only-child');

    expect(doc).toHaveClass('large');
  });
});
