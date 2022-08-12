/* eslint-env jest */
import { render } from '@testing-library/vue';
import Button from './Button.vue';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a button role element', () => {
    const { getByRole } = render(Button, {
      slots: {
        default: 'OK',
      },
    });

    const button = getByRole('button', { name: 'OK' });

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('renders an HTML button element', () => {
    const { container } = render(Button);

    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Button);

    const button = container.querySelector(':only-child');

    expect(button).toHaveClass('utrecht-button');
  });

  it('renders a label that can contain rich text content', () => {
    const { container } = render(Button, {
      slots: {
        default: 'Order <strong>now</strong>',
      },
    });

    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  describe('busy state', () => {
    it('is not busy by default', () => {
      const { container } = render(Button);

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveAttribute('aria-busy');
      expect(button).not.toHaveClass('utrecht-button--busy');
    });

    it('does not specify `aria-busy` when not busy', () => {
      const { container } = render(Button, { props: { busy: false } });

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveAttribute('aria-busy');
    });

    it('can have a busy state', () => {
      const { container } = render(Button, { props: { busy: true } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Button, { props: { busy: true } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveClass('utrecht-button--busy');
    });
  });

  describe('disabled state', () => {
    it('is not disabled by default', () => {
      const { getByRole } = render(Button);

      const button = getByRole('button');

      expect(button).not.toBeDisabled();
    });

    it('does not specify `aria-disabled` when not disabled', () => {
      const { container } = render(Button, { props: { disabled: false } });

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveAttribute('aria-disabled');
    });

    it('can have a disabled state', () => {
      const { container } = render(Button, { props: { disabled: true } });

      const button = container.querySelector(':only-child');

      expect(button).toBeDisabled();
    });
  });

  describe('submit button', () => {
    it('is not a submit button by default', () => {
      const { container } = render(Button);

      const button = container.querySelector('button:only-child');

      expect(button).not.toHaveClass('utrecht-button--submit');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('can be a submit button', () => {
      const { container } = render(Button, { props: { type: 'submit' } });

      const button = container.querySelector('button:only-child');

      expect(button).toHaveAttribute('type', 'submit');
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Button, { props: { type: 'submit' } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveClass('utrecht-button--submit');
    });
  });

  describe('primary action appearance', () => {
    it('is not a primary-action-button by default', () => {
      const { container } = render(Button);

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveClass('utrecht-button--primary-action');
    });

    it('can have a primary-action-button appearance', () => {
      const { container } = render(Button, { props: { appearance: 'primary-action-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Button, { props: { appearance: 'primary-action-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveClass('utrecht-button--primary-action');
    });
  });

  describe('secondary action appearance', () => {
    it('is not a secondary-action-button by default', () => {
      const { container } = render(Button);

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveClass('utrecht-button--primary-action');
    });

    it('can have a secondary-action-button appearance', () => {
      const { container } = render(Button, { props: { appearance: 'secondary-action-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Button, { props: { appearance: 'secondary-action-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveClass('utrecht-button--secondary-action');
    });
  });

  describe('subtle appearance', () => {
    it('is not a subtle-button by default', () => {
      const { container } = render(Button);

      const button = container.querySelector(':only-child');

      expect(button).not.toHaveClass('utrecht-button--subtle');
    });

    it('can have a subtle-button appearance', () => {
      const { container } = render(Button, { props: { appearance: 'subtle-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Button, { props: { appearance: 'subtle-button' } });

      const button = container.querySelector(':only-child');

      expect(button).toHaveClass('utrecht-button--subtle');
    });
  });

  it('can be hidden', () => {
    const { container } = render(Button, { props: { hidden: true } });

    const button = container.querySelector(':only-child');

    expect(button).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Button, { props: { class: 'large' } });

    const button = container.querySelector(':only-child');

    expect(button).toHaveClass('large');
  });
});
