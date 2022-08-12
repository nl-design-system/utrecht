/* eslint-env jest */
import { render } from '@testing-library/vue';
import Heading from './Heading.vue';
import '@testing-library/jest-dom';

describe('Heading', () => {
  it('renders a heading role element', () => {
    const { getByRole } = render(Heading, {
      slots: {
        default: 'Breaking news',
      },
      props: {
        level: 1,
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeVisible();
  });

  it('renders rich text content', () => {
    const { getByRole } = render(Heading, {
      slots: {
        default: '<strong>Breaking</strong> news',
      },
      props: {
        level: 1,
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    const richText = heading.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Heading, { props: { hidden: true, level: 1 } });

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Heading, { props: { class: 'large', level: 1 } });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('large');
    expect(heading).toHaveClass('utrecht-heading-1');
  });

  describe('Heading 1', () => {
    it('can render a heading at heading level 1', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 1,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h1 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector('h1:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-1');
    });
  });
  describe('Heading 1', () => {
    it('can render a heading at heading level 1', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 1,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h1 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector('h1:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-1');
    });
  });
  describe('Heading 1', () => {
    it('can render a heading at heading level 1', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 1,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h1 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector('h1:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 1,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-1');
    });
  });
  describe('Heading 2', () => {
    it('can render a heading at heading level 2', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 2,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 2,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h2 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 2,
        },
      });

      const heading = container.querySelector('h2:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 2,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-2');
    });
  });
  describe('Heading 3', () => {
    it('can render a heading at heading level 3', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 3,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 3,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h3 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 3,
        },
      });

      const heading = container.querySelector('h3:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 3,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-3');
    });
  });
  describe('Heading 4', () => {
    it('can render a heading at heading level 4', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 4,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 4,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h4 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 4,
        },
      });

      const heading = container.querySelector('h4:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 4,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-4');
    });
  });
  describe('Heading 5', () => {
    it('can render a heading at heading level 5', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 5,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 5,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h5 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 5,
        },
      });

      const heading = container.querySelector('h5:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 5,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-5');
    });
  });
  describe('Heading 6', () => {
    it('can render a heading at heading level 6', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 6,
        },
      });

      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 6,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders an HTML h6 element', () => {
      const { container } = render(Heading, {
        props: {
          level: 6,
        },
      });

      const heading = container.querySelector('h6:only-child');

      expect(heading).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Heading, {
        props: {
          level: 6,
        },
      });

      const heading = container.querySelector(':only-child');

      expect(heading).toHaveClass('utrecht-heading-6');
    });
  });

  describe('Heading level greater than 6', () => {
    it('renders maximum heading level 6', () => {
      const { getByRole } = render(Heading, {
        slots: {
          default: 'Breaking news',
        },
        props: {
          level: 7,
        },
      });
      const heading = getByRole('heading', {
        name: 'Breaking news',
        level: 6,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
