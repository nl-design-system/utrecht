/* eslint-env jest */
import { render } from '@testing-library/vue';
import Heading1 from './Heading1.vue';
import '@testing-library/jest-dom';

describe('Heading 1', () => {
  it('renders a heading role element', () => {
    const { getByRole } = render(Heading1, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 1', () => {
    const { getByRole } = render(Heading1, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h1 element', () => {
    const { container } = render(Heading1);

    const heading = container.querySelector('h1:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Heading1);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-1');
  });

  it('renders rich text content', () => {
    const { getByRole } = render(Heading1, {
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
    const { container } = render(Heading1, { props: { hidden: true } });

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Heading1, { props: { class: 'large' } });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });
});
