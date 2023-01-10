import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { UtrechtLinkAttr } from './component';
afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Link', () => {
  it('renders an link role element', async () => {
    await render('<a href="https://example.com">Home</a>', {
      declarations: [UtrechtLinkAttr],
    });
    const link = screen.getByRole('link', { name: 'Home' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('renders an HTML a element', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.detectChanges();

    expect(fixture.nativeElement).toHaveClass('utrecht-link');
  });

  it('renders rich text content', async () => {
    const { container } = await render(
      `<a utrecht-link href="https://example.com/">
        <strong>https:</strong>
        //example.com/
      </a>`,
      {
        declarations: [UtrechtLinkAttr],
      },
    );

    const link = container.querySelector(':only-child');

    const richText = link?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', async () => {
    const { container } = await render('<a [hidden]="true">Link</a>', {
      declarations: [UtrechtLinkAttr],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { container } = await render('<a utrecht-link class="visited">Link</a>', {
      declarations: [UtrechtLinkAttr],
    });

    const article = container.querySelector(':only-child');
    article?.classList.add('visited');

    expect(article).toHaveClass('visited');
    expect(article).toHaveClass('utrecht-link');
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.componentInstance.external = true;
    fixture.detectChanges();

    expect(fixture.nativeElement).toHaveClass('utrecht-link--external');
  });

  it('prevents sharing referer information', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.componentInstance.external = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('rel')).toContain('noreferer');
  });

  it('prevents access to window.opener', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.componentInstance.external = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('rel')).toContain('noopener');
  });

  it('provides semantic information that the link is external', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.componentInstance.external = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('rel')).toContain('external');
  });
});
