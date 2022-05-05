import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { ButtonLink } from './ButtonLink';
import '@testing-library/jest-dom';

describe('Link that looks like a button', () => {
  it('renders an link role element', () => {
    render(<ButtonLink href="/">Home</ButtonLink>);

    const link = screen.getByRole('link', { name: 'Home' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('renders an HTML a element', () => {
    const { container } = render(<ButtonLink>{'https://example.com/'}</ButtonLink>);

    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('is focusable', async () => {
    const handleFocus = jest.fn();

    render(
      <ButtonLink href="/" onFocus={handleFocus}>
        Home
      </ButtonLink>,
    );

    const link = screen.getByRole('link');

    link?.focus();

    expect(handleFocus).toHaveBeenCalled();
  });

  it('can be activated with Enter', async () => {
    const handleClick = jest.fn();

    render(
      <ButtonLink href="/" onClick={handleClick}>
        Home
      </ButtonLink>,
    );

    const link = screen.getByRole('link');

    if (link) {
      link.focus();
      await userEvent.keyboard('{Enter}');
    }

    expect(handleClick).toHaveBeenCalled();
  });

  it('can NOT be activated with Space', async () => {
    const handleClick = jest.fn();

    render(
      <ButtonLink href="/" onClick={handleClick}>
        Home
      </ButtonLink>,
    );

    const link = screen.getByRole('link');

    if (link) {
      link.focus();
      await userEvent.keyboard(' ');
    }

    expect(handleClick).not.toHaveBeenCalled();
  });

  describe('with button role', () => {
    it('can render a link with button role element', () => {
      render(
        <ButtonLink href="/" role="button">
          Back
        </ButtonLink>,
      );

      const button = screen.getByRole('button', { name: 'Back' });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });

    it('can be activated with Enter', async () => {
      const handleClick = jest.fn();

      render(
        <ButtonLink href="/" role="button" onClick={handleClick}>
          Home
        </ButtonLink>,
      );

      const link = screen.getByRole('button');

      if (link) {
        link.focus();
        await userEvent.keyboard('{Enter}');
      }

      expect(handleClick).toHaveBeenCalled();
    });

    it('can be activated with Space', async () => {
      const handleClick = jest.fn();

      render(
        <ButtonLink href="/" role="button" onClick={handleClick}>
          Home
        </ButtonLink>,
      );

      const link = screen.getByRole('button');

      if (link) {
        link.focus();
        await userEvent.keyboard(' ');
      }

      expect(handleClick).toHaveBeenCalled();
    });
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<ButtonLink />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-button-link');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <ButtonLink href="https://example.com/">
        <strong>https:</strong>
        {'//example.com/'}
      </ButtonLink>,
    );

    const link = container.querySelector(':only-child');

    const richText = link?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<ButtonLink hidden />);

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<ButtonLink className="visited">{'https://example.com/'}</ButtonLink>);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('visited');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(<ButtonLink ref={ref}>{'https://example.com/'}</ButtonLink>);

    const link = container.querySelector(':only-child');

    expect(ref.current).toBe(link);
  });

  describe('variant for external links', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<ButtonLink external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveClass('utrecht-button-link--external');
    });

    it('prevents sharing referer information', () => {
      const { container } = render(<ButtonLink external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('noreferrer');
    });

    it('prevents access to window.opener', () => {
      const { container } = render(<ButtonLink external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('noopener');
    });

    it('provides semantic information that the link is external', () => {
      const { container } = render(<ButtonLink external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('external');
    });
  });

  describe('with simulated state', () => {
    describe('focus variant', () => {
      it('renders a design system BEM class name', () => {
        const { container } = render(<ButtonLink focusStyle />);

        const link = container.querySelector(':only-child');

        expect(link).toHaveClass('utrecht-button-link--focus');
      });
    });

    describe('focus-visible variant', () => {
      it('renders a design system BEM class name', () => {
        const { container } = render(<ButtonLink focusVisibleStyle />);

        const link = container.querySelector(':only-child');

        expect(link).toHaveClass('utrecht-button-link--focus-visible');
      });
    });

    describe('hover variant', () => {
      it('renders a design system BEM class name', () => {
        const { container } = render(<ButtonLink hoverStyle />);

        const link = container.querySelector(':only-child');

        expect(link).toHaveClass('utrecht-button-link--hover');
      });
    });
  });
});
