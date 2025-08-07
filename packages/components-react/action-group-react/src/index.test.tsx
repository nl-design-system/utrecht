import { render, screen } from '@testing-library/react';
import { Button } from '@utrecht/button-react';
import { createRef } from 'react';
import { ActionGroup } from './index';
import '@testing-library/jest-dom';

describe('Action group', () => {
  it('renders a visible element', () => {
    const { container } = render(<ActionGroup />);

    const actionGroup = container.querySelector(':only-child');

    expect(actionGroup).toBeInTheDocument();
    expect(actionGroup).toBeVisible();
  });

  it('renders no group role element', () => {
    render(<ActionGroup />);

    expect(() => {
      screen.getByRole('group');
    }).toThrow();
  });

  it('renders an HTML p element', () => {
    const { container } = render(<ActionGroup />);

    const actionGroup = container.querySelector('p:only-child');

    expect(actionGroup).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    // Rich text content is not recommended for this component,
    // but changing this behavior should be a breaking change.
    const { container } = render(
      <ActionGroup>
        Currently <strong>unavailable</strong>
      </ActionGroup>,
    );

    const actionGroup = container.querySelector(':only-child');

    const strong = actionGroup?.querySelector('strong');

    expect(strong).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<ActionGroup />);

    const actionGroup = container.querySelector(':only-child');

    expect(actionGroup).toHaveClass('utrecht-action-group');
  });

  it('can be hidden', () => {
    const { container } = render(<ActionGroup hidden />);

    const actionGroup = container.querySelector(':only-child');

    expect(actionGroup).not.toBeVisible();
  });

  describe('one button', () => {
    it('renders no group role element', () => {
      render(
        <ActionGroup>
          <Button>Button 1</Button>
        </ActionGroup>,
      );

      expect(() => {
        screen.getByRole('group');
      }).toThrow();
    });
  });

  describe('many buttons', () => {
    it('renders a group role element', () => {
      render(
        <ActionGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ActionGroup>,
      );

      const actionGroup = screen.getByRole('group');

      expect(actionGroup).toBeInTheDocument();
      expect(actionGroup).toBeVisible();
    });
  });

  describe('fragment with many buttons', () => {
    it.skip('renders a group role element', () => {
      render(
        <ActionGroup>
          <>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </>
        </ActionGroup>,
      );

      const actionGroup = screen.getByRole('group');

      expect(actionGroup).toBeInTheDocument();
      expect(actionGroup).toBeVisible();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>();

    const { container } = render(<ActionGroup ref={ref} />);

    const actionGroup = container.querySelector(':only-child');

    expect(ref.current).toBe(actionGroup);
  });
});
