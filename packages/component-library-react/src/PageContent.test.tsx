import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { PageContent, PageContentMain } from './PageContent';
import '@testing-library/jest-dom';

describe('Page content', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<PageContent />);

    const pageContent = container.querySelector('div:only-child');

    expect(pageContent).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageContent />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).toHaveClass('utrecht-page-content');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<PageContent />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).toBeVisible();
    expect(pageContent).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <PageContent>
        <h1>Hello, world</h1>
      </PageContent>,
    );

    const pageContent = container.querySelector(':only-child');

    const richText = pageContent?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<PageContent hidden />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<PageContent className="condensed" />);

    const pageContent = container.querySelector(':only-child');

    expect(pageContent).toHaveClass('condensed');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<PageContent ref={ref} />);

    const pageContent = container.querySelector(':only-child');

    expect(ref.current).toBe(pageContent);
  });
});

describe('Page main content', () => {
  it('renders a main role element', () => {
    render(<PageContentMain />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  it('renders an HTML main element', () => {
    const { container } = render(<PageContentMain />);

    const main = container.querySelector('main:only-child');

    expect(main).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageContentMain />);

    const main = container.querySelector(':only-child');

    expect(main).toHaveClass('utrecht-page-content__main');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<PageContentMain />);

    const main = container.querySelector(':only-child');

    expect(main).toBeVisible();
    expect(main).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <PageContentMain>
        <h1>Hello, world</h1>
      </PageContentMain>,
    );

    const main = container.querySelector(':only-child');

    const richText = main?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<PageContentMain hidden />);

    const main = container.querySelector(':only-child');

    expect(main).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<PageContentMain className="error-page" />);

    const main = container.querySelector(':only-child');

    expect(main).toHaveClass('error-page');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<PageContentMain ref={ref} />);

    const main = container.querySelector(':only-child');

    expect(ref.current).toBe(main);
  });
});
