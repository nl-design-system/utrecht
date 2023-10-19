import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import '@testing-library/jest-dom';

describe('Button group', () => {
  it('renders a visible element', () => {
    const { container } = render(<ButtonGroup />);

    const buttonGroup = container.querySelector(':only-child');

    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toBeVisible();
  });

  it('renders no group role element', () => {
    render(<ButtonGroup />);

    expect(() => {
      screen.getByRole('group');
    }).toThrow();
  });

  it('renders an HTML p element', () => {
    const { container } = render(<ButtonGroup />);

    const buttonGroup = container.querySelector('p:only-child');

    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders rich text content', () => {
    // Rich text content is not recommended for this component,
    // but changing this behavior should be a breaking change.
    const { container } = render(
      <ButtonGroup>
        Currently <strong>unavailable</strong>
      </ButtonGroup>,
    );

    const buttonGroup = container.querySelector(':only-child');

    const strong = buttonGroup?.querySelector('strong');

    expect(strong).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<ButtonGroup />);

    const buttonGroup = container.querySelector(':only-child');

    expect(buttonGroup).toHaveClass('utrecht-button-group');
  });

  it('can be hidden', () => {
    const { container } = render(<ButtonGroup hidden />);

    const buttonGroup = container.querySelector(':only-child');

    expect(buttonGroup).not.toBeVisible();
  });

  describe('one button', () => {
    it('renders no group role element', () => {
      render(
        <ButtonGroup>
          <Button>Button 1</Button>
        </ButtonGroup>,
      );

      expect(() => {
        screen.getByRole('group');
      }).toThrow();
    });
  });

  describe('many buttons', () => {
    it('renders a group role element', () => {
      render(
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>,
      );

      const buttonGroup = screen.getByRole('group');

      expect(buttonGroup).toBeInTheDocument();
      expect(buttonGroup).toBeVisible();
    });
  });

  describe('fragment with many buttons', () => {
    it.skip('renders a group role element', () => {
      render(
        <ButtonGroup>
          <>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </>
        </ButtonGroup>,
      );

      const buttonGroup = screen.getByRole('group');

      expect(buttonGroup).toBeInTheDocument();
      expect(buttonGroup).toBeVisible();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>();

    const { container } = render(<ButtonGroup ref={ref} />);

    const buttonGroup = container.querySelector(':only-child');

    expect(ref.current).toBe(buttonGroup);
  });
});
