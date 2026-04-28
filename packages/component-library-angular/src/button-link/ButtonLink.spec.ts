import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtButtonLinkAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" utrecht-button-link>Link</a>`,
})
class TestLinkHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" utrecht-button-link>Visit <strong>now</strong></a>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" [hidden]="true" utrecht-button-link></a>`,
})
class TestHiddenHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" class="custom-class" utrecht-button-link></a>`,
})
class TestCustomClassHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" [appearance]="appearance" utrecht-button-link></a>`,
})
class TestAppearanceHostComponent {
  appearance?: string;
}

@Component({
  standalone: true,
  imports: [UtrechtButtonLinkAttr],
  template: `<a href="https://example.com" [external]="true" utrecht-button-link>Link</a>`,
})
class TestExternalHostComponent {}

describe('Button Link', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestLinkHostComponent,
        TestRichTextHostComponent,
        TestHiddenHostComponent,
        TestCustomClassHostComponent,
        TestAppearanceHostComponent,
        TestExternalHostComponent,
      ],
    }).compileComponents();
  });

  it('renders a button link role element', () => {
    const fixture = TestBed.createComponent(TestLinkHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')).not.toBeNull();
  });

  it('renders an HTML button link element', () => {
    const fixture = TestBed.createComponent(TestLinkHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a:only-child')).not.toBeNull();
  });

  it('renders button link that contain HTML rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const buttonLink = el.querySelector('a');
    expect(buttonLink?.querySelector('strong')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(TestLinkHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const buttonLink = el.querySelector('a');
    expect(buttonLink?.classList.contains('utrecht-button-link')).toBe(true);
    expect(buttonLink?.classList.contains('utrecht-button-link--html-a')).toBe(true);
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const buttonLink = el.querySelector('a') as HTMLAnchorElement;
    expect(buttonLink.hidden).toBe(true);
  });

  it('can have an addition class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const buttonLink = el.querySelector('a');
    expect(buttonLink?.classList.contains('custom-class')).toBe(true);
    expect(buttonLink?.classList.contains('utrecht-button-link')).toBe(true);
  });

  describe('Button Link Appearance', () => {
    it('renders a design system BEM `utrecht-button-link--primary-action` class', () => {
      const fixture = TestBed.createComponent(TestAppearanceHostComponent);
      fixture.componentInstance.appearance = 'primary-action-button';
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--primary-action')).toBe(true);
    });

    it('renders a design system BEM `utrecht-button-link--secondary-action` class', () => {
      const fixture = TestBed.createComponent(TestAppearanceHostComponent);
      fixture.componentInstance.appearance = 'secondary-action-button';
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--secondary-action')).toBe(true);
    });

    it('renders a design system BEM `utrecht-button-link--subtle-action` class', () => {
      const fixture = TestBed.createComponent(TestAppearanceHostComponent);
      fixture.componentInstance.appearance = 'subtle-button';
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--subtle-action')).toBe(true);
    });

    it('does not have a design system BEM `utrecht-button-link--primary-action` class by default', () => {
      const fixture = TestBed.createComponent(TestLinkHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--primary-action')).toBe(false);
    });

    it('does not have a design system BEM `utrecht-button-link--secondary-action` class by default', () => {
      const fixture = TestBed.createComponent(TestLinkHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--secondary-action')).toBe(false);
    });

    it('does not have a design system BEM `utrecht-button-link--subtle-action` class by default', () => {
      const fixture = TestBed.createComponent(TestLinkHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      const buttonLink = el.querySelector('a')!;
      expect(buttonLink.classList.contains('utrecht-button-link--subtle-action')).toBe(false);
    });
  });

  describe('external', () => {
    it('prevents sharing referer information', () => {
      const fixture = TestBed.createComponent(TestExternalHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('a[rel~="noreferer" i]')).not.toBeNull();
    });

    it('prevents access to window.opener', () => {
      const fixture = TestBed.createComponent(TestExternalHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('a[rel~="noopener" i]')).not.toBeNull();
    });

    it('provides semantic information that the link is external', () => {
      const fixture = TestBed.createComponent(TestExternalHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('a[rel~="external" i]')).not.toBeNull();
    });
  });
});
