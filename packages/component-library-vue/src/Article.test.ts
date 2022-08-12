/* eslint-env jest */
import { render } from '@testing-library/vue';
import Article from './Article.vue';
import '@testing-library/jest-dom';

describe('Article', () => {
  it('renders a article role element', () => {
    const { getByRole } = render(Article);

    const article = getByRole('article');

    expect(article).toBeVisible();
  });

  it('renders an HTML article element', () => {
    const { container } = render(Article);

    const article = container.querySelector('article:only-child');

    expect(article).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Article);

    const article = container.querySelector(':only-child');

    expect(article).toHaveClass('utrecht-article');
  });

  it('renders rich text content', () => {
    const { container } = render(Article, {
      slots: {
        default: '<strong>Breaking</strong> news',
      },
    });

    const article = container.querySelector(':only-child');

    const richText = article?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Article, { props: { hidden: true } });

    const article = container.querySelector(':only-child');

    expect(article).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Article, { props: { class: 'breaking-news' } });

    const article = container.querySelector(':only-child');

    expect(article).toHaveClass('breaking-news');
  });
});
