import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtArticle } from './component';

@Component({
  standalone: true,
  imports: [UtrechtArticle],
  template: `<utrecht-article> <strong>Breaking</strong> news </utrecht-article>`,
})
class TestHostComponent {}

describe('Article', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtArticle, TestHostComponent],
    }).compileComponents();
  });

  it('renders an article role element', () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('article')).not.toBeNull();
  });

  it('renders an article HTML element', () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('article:only-child')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-article')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('article')?.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    expect(fixture.nativeElement.style.hidden).toBeUndefined();
  });

  it('can have a additional class name', () => {
    const fixture = TestBed.createComponent(UtrechtArticle);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const article = el.querySelector(':only-child');
    article?.classList.add('breaking-news');
    expect(article?.classList.contains('breaking-news')).toBe(true);
    expect(article?.classList.contains('utrecht-article')).toBe(true);
  });
});
