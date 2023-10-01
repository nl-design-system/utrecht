import { render } from '@testing-library/react';
import { createRef } from 'react';
import { URLData } from './URLData';
import '@testing-library/jest-dom';

describe('URL data', () => {
  it('renders an HTML bdi element', () => {
    const { container } = render(<URLData>{'https://example.com/'}</URLData>);

    const urlValue = container.querySelector('bdi:only-child');

    expect(urlValue).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<URLData />);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('utrecht-url-data');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <URLData>
        <strong>https:</strong>
        {'//example.com/'}
      </URLData>,
    );

    const urlValue = container.querySelector(':only-child');

    const richText = urlValue?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<URLData hidden>Secrets</URLData>);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<URLData className="visited">{'https://example.com/'}</URLData>);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('visited');
  });

  it('can have a additional class name', () => {
    const { container } = render(<URLData className="large" />);

    const urlValue = container.querySelector(':only-child');

    expect(urlValue).toHaveClass('large');

    expect(urlValue).toHaveClass('utrecht-url-data');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<URLData ref={ref}>{'https://example.com/'}</URLData>);

    const urlValue = container.querySelector(':only-child');

    expect(ref.current).toBe(urlValue);
  });
});
