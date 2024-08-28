import { render } from '@testing-library/react';
import { createRef } from 'react';
import { NumberBadge } from './NumberBadge';
import '@testing-library/jest-dom';

describe('Number badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(<NumberBadge>42</NumberBadge>);

    const numberBadge = container.querySelector('span:only-child');

    expect(numberBadge).toBeInTheDocument();
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(<NumberBadge value={value}>259</NumberBadge>);

    const numberBadge = container.querySelector('data[value]:only-child');

    expect(numberBadge).toBeInTheDocument();
    expect(numberBadge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<NumberBadge />);

    const numberBadge = container.querySelector(':only-child');

    expect(numberBadge).toHaveClass('utrecht-number-badge');
  });

  it('can have a additional class name', () => {
    const additionalClass = 'large';
    const { container } = render(<NumberBadge className={additionalClass} />);

    const numberBadge = container.querySelector(':only-child');

    expect(numberBadge).toHaveClass('utrecht-number-badge');
    expect(numberBadge).toHaveClass(additionalClass);
  });

  it('renders rich text content', () => {
    const { container } = render(
      <NumberBadge>
        <span>42</span>
      </NumberBadge>,
    );

    const numberBadge = container.querySelector(':only-child');

    const richText = numberBadge?.querySelector('span');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<NumberBadge hidden>42</NumberBadge>);

    const numberBadge = container.querySelector(':only-child');

    expect(numberBadge).not.toBeVisible();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<NumberBadge ref={ref}>42</NumberBadge>);

    const numberBadge = container.querySelector(':only-child');

    expect(ref.current).toBe(numberBadge);
  });
});
