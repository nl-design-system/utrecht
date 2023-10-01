import { render } from '@testing-library/vue';
import UtrechtURLData from './URLData.vue';
import '@testing-library/jest-dom';

describe('URL data', () => {
  it('renders an HTML bdi element', () => {
    const { container } = render(UtrechtURLData, {
      slots: {
        default: 'https://example.com/',
      },
    });

    const urlValue = container.querySelector('bdi:only-child');

    expect(urlValue).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(UtrechtURLData);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('utrecht-url-data');
  });

  it('renders rich text content', () => {
    const { container } = render(UtrechtURLData, {
      slots: {
        default: '<strong>https:</strong>//example.com/',
      },
    });

    const urlValue = container.querySelector(':only-child');
    const richText = urlValue?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(UtrechtURLData, {
      attrs: {
        hidden: true,
      },
    });

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(UtrechtURLData, {
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
    const { container } = render(UtrechtURLData, {
      attrs: {
        class: 'large',
      },
    });

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('large');
    expect(urlValue).toHaveClass('utrecht-url-data');
  });
});
