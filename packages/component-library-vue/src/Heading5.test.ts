/* eslint-env jest */
import { render } from '@testing-library/vue';
import Heading5 from './Heading5.vue';
import '@testing-library/jest-dom';

describe('Heading 5', () => {
  it('renders a heading role element', () => {
    const { getByRole } = render(Heading5, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 5', () => {
    const { getByRole } = render(Heading5, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
      level: 5,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h5 element', () => {
    const { container } = render(Heading5);

    const heading = container.querySelector('h5:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Heading5);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-5');
  });

  it('renders rich text content', () => {
    const { getByRole } = render(Heading5, {
      slots: {
        default: '<strong>Breaking</strong> news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Heading5, { props: { hidden: true } });

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Heading5, { props: { class: 'large' } });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });
});
