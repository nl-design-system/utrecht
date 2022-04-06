import { render } from '@testing-library/react';
import { createRef } from 'react';
import { URLValue } from './URLValue';
import '@testing-library/jest-dom';

describe('URL value', () => {
  it('renders an HTML bdi element', () => {
    const { container } = render(<URLValue>{'https://example.com/'}</URLValue>);

    const urlValue = container.querySelector('bdi:only-child');

    expect(urlValue).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<URLValue />);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('utrecht-url');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <URLValue>
        <strong>https:</strong>
        {'//example.com/'}
      </URLValue>,
    );

    const urlValue = container.querySelector(':only-child');

    const richText = urlValue?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<URLValue hidden>Secrets</URLValue>);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<URLValue className="visited">{'https://example.com/'}</URLValue>);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('visited');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<URLValue ref={ref}>{'https://example.com/'}</URLValue>);

    const urlValue = container.querySelector(':only-child');

    expect(ref.current).toBe(urlValue);
  });
});
