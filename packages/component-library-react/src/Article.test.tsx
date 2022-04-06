import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Article } from './Article';
import '@testing-library/jest-dom';

describe('Article', () => {
  it('renders an article role element', () => {
    render(<Article />);

    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
    expect(article).toBeVisible();
  });

  it('renders an article HTML element', () => {
    const { container } = render(<Article />);

    const article = container.querySelector('article:only-child');

    expect(article).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Article />);

    const article = container.querySelector(':only-child');

    expect(article).toHaveClass('utrecht-article');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Article>
        <strong>Breaking</strong> news
      </Article>,
    );

    const article = container.querySelector(':only-child');

    const richText = article?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Article hidden />);

    const article = container.querySelector('article');

    expect(article).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Article className="breaking-news" />);

    const article = container.querySelector(':only-child');

    expect(article).toHaveClass('breaking-news');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Article ref={ref}>Breaking news</Article>);

    const article = container.querySelector(':only-child');

    expect(ref.current).toBe(article);
  });
});
