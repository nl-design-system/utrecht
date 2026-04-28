import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtLinkAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtLinkAttr],
  template: `<a href="https://example.com" utrecht-link>Home</a>`,
})
class TestLinkHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtLinkAttr],
  template: `<a href="https://example.com/" utrecht-link><strong>https:</strong>//example.com/</a>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtLinkAttr],
  template: `<a href="/" class="visited" utrecht-link>Link</a>`,
})
class TestCustomClassHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtLinkAttr],
  template: `<a [hidden]="true" utrecht-link>Link</a>`,
})
class TestHiddenHostComponent {}

describe('Link', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UtrechtLinkAttr,
        TestLinkHostComponent,
        TestRichTextHostComponent,
        TestCustomClassHostComponent,
        TestHiddenHostComponent,
      ],
    }).compileComponents();
  });

  it('renders an link role element', () => {
    const fixture = TestBed.createComponent(TestLinkHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')).not.toBeNull();
  });

  it('renders an HTML a element', () => {
    const fixture = TestBed.createComponent(TestLinkHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('utrecht-link')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')?.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('a') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const link = el.querySelector('a')!;
    expect(link.classList.contains('visited')).toBe(true);
    expect(link.classList.contains('utrecht-link')).toBe(true);
  });

  it('renders a design system BEM class name for external links', () => {
    const fixture = TestBed.createComponent(UtrechtLinkAttr);
    fixture.componentInstance.external = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('utrecht-link--external')).toBe(true);
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
