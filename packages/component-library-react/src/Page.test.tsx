import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Page } from './Page';
import '@testing-library/jest-dom';

describe('Page', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<Page />);

    const page = container.querySelector('div:only-child');

    expect(page).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Page />);

    const page = container.querySelector(':only-child');

    expect(page).toHaveClass('utrecht-page');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<Page />);

    const page = container.querySelector(':only-child');

    expect(page).toBeVisible();
    expect(page).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Page>
        <h1>Hello, world</h1>
      </Page>,
    );

    const page = container.querySelector(':only-child');

    const richText = page?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Page hidden />);

    const page = container.querySelector(':only-child');

    expect(page).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Page className="large" />);

    const page = container.querySelector(':only-child');

    expect(page).toHaveClass('large');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Page ref={ref} />);

    const page = container.querySelector(':only-child');

    expect(ref.current).toBe(page);
  });
});
