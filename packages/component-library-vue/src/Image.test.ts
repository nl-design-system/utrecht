/* eslint-env jest */
import { render } from '@testing-library/vue';
import Image from './Image.vue';
import '@testing-library/jest-dom';

describe('Image', () => {
  it('renders an img role element', () => {
    const { getByRole } = render(Image, {
      props: {
        alt: 'Logo',
        src: '/logo.png',
      },
    });

    const img = getByRole('img', { name: 'Logo' });

    expect(img).toBeInTheDocument();
    expect(img).toBeVisible();
  });

  it('renders an HTML img element', () => {
    const { container } = render(Image);

    const img = container.querySelector('img:only-child');

    expect(img).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Image);

    const img = container.querySelector(':only-child');

    expect(img).toHaveClass('utrecht-img');
  });

  it('can have img attributes', () => {
    const { container } = render(Image, {
      props: {
        alt: 'Logo',
        src: '/logo.png',
        height: 48,
        width: '96',
      },
    });

    const img = container.querySelector('img:only-child');

    expect(img).toHaveAttribute('alt', 'Logo');
    expect(img).toHaveAttribute('src', '/logo.png');
    expect(img).toHaveAttribute('height', '48');
    expect(img).toHaveAttribute('width', '96');
  });

  it('is not a photo by default', () => {
    const { container } = render(Image);

    const img = container.querySelector(':only-child');

    expect(img).not.toHaveClass('utrecht-img--photo');
  });

  it('can be a photo', () => {
    const { container } = render(Image, { props: { photo: true } });

    const img = container.querySelector(':only-child');

    expect(img).toHaveClass('utrecht-img--photo');
  });

  it('can be hidden', () => {
    const { container } = render(Image, { props: { hidden: true } });

    const img = container.querySelector(':only-child');

    expect(img).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Image, { props: { class: 'large' } });

    const img = container.querySelector(':only-child');

    expect(img).toHaveClass('utrecht-img');
    expect(img).toHaveClass('large');
  });
});
