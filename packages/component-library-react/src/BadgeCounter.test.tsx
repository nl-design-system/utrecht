import { render } from '@testing-library/react';
import { createRef } from 'react';
import { BadgeCounter } from './BadgeCounter';
import '@testing-library/jest-dom';

describe('Data badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(<BadgeCounter>{'42'}</BadgeCounter>);

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(<BadgeCounter value={value}>259</BadgeCounter>);

    const badge = container.querySelector('data[value]:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<BadgeCounter />);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-counter');
  });
  it('can have a additional class name', () => {
    const { container } = render(<BadgeCounter className="large" />);

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass('large');

    expect(dataBadge).toHaveClass('utrecht-badge-counter');
  });
  it('renders rich text content', () => {
    const { container } = render(
      <BadgeCounter>
        <span>42</span>
      </BadgeCounter>,
    );

    const badge = container.querySelector(':only-child');

    const richText = badge?.querySelector('span');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<BadgeCounter hidden>42</BadgeCounter>);

    const badge = container.querySelector(':only-child');

    expect(badge).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<BadgeCounter className="utrecht-badge-counter--positive">259</BadgeCounter>);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-counter');
    expect(badge).toHaveClass('utrecht-badge-counter--positive');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<BadgeCounter ref={ref}>42</BadgeCounter>);

    const badge = container.querySelector(':only-child');

    expect(ref.current).toBe(badge);
  });
});
