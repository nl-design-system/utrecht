import { render } from '@testing-library/react';
import { createRef } from 'react';
import { StatusBadge } from './StatusBadge';
import '@testing-library/jest-dom';

describe('Status Badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(<StatusBadge>{'neutral'}</StatusBadge>);

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<StatusBadge />);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-status-badge');
  });
  it('can have a additional class name', () => {
    const { container } = render(<StatusBadge className="large" />);

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass('large');

    expect(dataBadge).toHaveClass('utrecht-status-badge');
  });
  it('renders rich text content', () => {
    const { container } = render(
      <StatusBadge>
        <i>neutral</i>
      </StatusBadge>,
    );

    const badge = container.querySelector(':only-child');
    const richText = badge?.querySelector('i');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<StatusBadge hidden>neutral</StatusBadge>);

    const badge = container.querySelector(':only-child');

    expect(badge).not.toBeVisible();
  });

  it('can have a status', () => {
    const { container } = render(<StatusBadge status="neutral">{'neutral'}</StatusBadge>);

    const badge = container.querySelector('span:only-child');

    expect(badge).toHaveClass('utrecht-status-badge');
    expect(badge).toHaveClass('utrecht-status-badge--neutral');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<StatusBadge ref={ref}>neutral</StatusBadge>);

    const badge = container.querySelector(':only-child');

    expect(ref.current).toBe(badge);
  });
});
