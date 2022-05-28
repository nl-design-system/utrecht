/* eslint-env jest */
import { render } from '@testing-library/vue';
import Heading2 from './UtrechtHeading2.vue';
import '@testing-library/jest-dom';

describe('Heading 2', () => {
  it('renders a heading role element', () => {
    const { getByRole } = render(Heading2, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 2', () => {
    const { getByRole } = render(Heading2, {
      slots: {
        default: 'Breaking news',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
      level: 2,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h2 element', () => {
    const { container } = render(Heading2);

    const heading = container.querySelector('h2:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Heading2);

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-heading-2');
  });

  it('renders rich text content', () => {
    const { getByRole } = render(Heading2, {
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
    const { container } = render(Heading2, { props: { hidden: true } });

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Heading2, { props: { class: 'large' } });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
  });
});
