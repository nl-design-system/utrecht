import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { UtrechtArticle } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).map(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Article', () => {
  it('renders an article role element', async () => {
    await render(UtrechtArticle);

    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
    expect(article).toBeVisible();
  });

  it('renders an article HTML element', async () => {
    const { container } = await render(UtrechtArticle);

    const article = container.querySelector('article:only-child');

    expect(article).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render(UtrechtArticle);

    const article = container.querySelector(':only-child');

    expect(article).toHaveClass('utrecht-article');
  });

  it('renders rich text content', async () => {
    const { container } = await render(
      ` <Article>
        <strong>Breaking</strong> news
      </Article>`,
      {
        declarations: [UtrechtArticle],
      },
    );

    const article = container.querySelector(':only-child');

    const richText = article?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', async () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    expect(fixture.nativeElement.style.hidden).toBeUndefined();
  });

  it('can have a additional class name', async () => {
    const { container } = await render(UtrechtArticle);

    const article = container.querySelector(':only-child');
    article?.classList.add('breaking-news');

    expect(article).toHaveClass('breaking-news');

    expect(article).toHaveClass('utrecht-article');
  });
});
