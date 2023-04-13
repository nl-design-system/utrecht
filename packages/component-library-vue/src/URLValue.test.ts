import { render } from '@testing-library/vue';
import UtrechtURLValue from './URLValue.vue';
import '@testing-library/jest-dom';

describe('URL value', () => {
  it('renders an HTML bdi element', () => {
    const { container } = render(UtrechtURLValue, {
      slots: {
        default: 'https://example.com/',
      },
    });

    const urlValue = container.querySelector('bdi:only-child');

    expect(urlValue).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(UtrechtURLValue);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('utrecht-url');
  });

  it('renders rich text content', () => {
    const { container } = render(UtrechtURLValue, {
      slots: {
        default: '<strong>https:</strong>//example.com/',
      },
    });

    const urlValue = container.querySelector(':only-child');
    const richText = urlValue?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(UtrechtURLValue, {
      attrs: {
        hidden: true,
      },
    });

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(UtrechtURLValue, {
      attrs: {
        class: 'visited',
      },
      slots: {
        default: 'https://example.com/',
      },
    });

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('visited');
  });

  it('can have an additional class name', () => {
    const { container } = render(UtrechtURLValue, {
      attrs: {
        class: 'large',
      },
    });

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('large');
    expect(urlValue).toHaveClass('utrecht-url');
  });
});
