import { render } from '@testing-library/react';
import { createRef } from 'react';
import { DataBadge } from './DataBadge';
import '@testing-library/jest-dom';

describe('Data badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(<DataBadge>{'Den Haag'}</DataBadge>);

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('can render an HTML time element', () => {
    const dateTime = '2038-01-19T03:14:08Z';
    const { container } = render(<DataBadge dateTime={dateTime}>19 januari 2038 om 03:14:08</DataBadge>);

    const badge = container.querySelector('time:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('datetime', dateTime);
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(<DataBadge value={value}>≥ 250㎡</DataBadge>);

    const badge = container.querySelector('data[value]:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<DataBadge />);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-data');
  });
  it('can have a additional class name', () => {
    const { container } = render(<DataBadge className="large" />);

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass('large');

    expect(dataBadge).toHaveClass('utrecht-badge-data');
  });
  it('renders rich text content', () => {
    const { container } = render(
      <DataBadge>
        <code>https:</code>
      </DataBadge>,
    );

    const badge = container.querySelector(':only-child');

    const richText = badge?.querySelector('code');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<DataBadge hidden>Secrets</DataBadge>);

    const badge = container.querySelector(':only-child');

    expect(badge).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<DataBadge className="utrecht-badge-data--example-dataviz-1">{'Utrecht'}</DataBadge>);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-data');
    expect(badge).toHaveClass('utrecht-badge-data--example-dataviz-1');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<DataBadge ref={ref}>{'https://example.com/'}</DataBadge>);

    const badge = container.querySelector(':only-child');

    expect(ref.current).toBe(badge);
  });
});
