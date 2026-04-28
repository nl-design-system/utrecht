import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtParagraph } from './component';

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph></p>`,
})
class TestParagraphHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph>Hello, <strong>world</strong></p>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph [lead]="true"></p>`,
})
class TestLeadHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph [small]="true"></p>`,
})
class TestSmallHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph [hidden]="true"></p>`,
})
class TestHiddenHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtParagraph],
  template: `<p utrecht-paragraph class="intro"></p>`,
})
class TestCustomClassHostComponent {}

describe('Paragraph', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        UtrechtParagraph,
        TestParagraphHostComponent,
        TestRichTextHostComponent,
        TestLeadHostComponent,
        TestSmallHostComponent,
        TestHiddenHostComponent,
        TestCustomClassHostComponent,
      ],
    });
    TestBed.overrideComponent(UtrechtParagraph, { add: { imports: [NgIf, NgTemplateOutlet] } });
    await TestBed.compileComponents();
  });

  it('renders an HTML p element', () => {
    const fixture = TestBed.createComponent(TestParagraphHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p:only-child')).not.toBeNull();
  });

  it('renders no additional elements', () => {
    const fixture = TestBed.createComponent(TestParagraphHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('*').length).toBe(1);
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(TestParagraphHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-paragraph')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const p = el.querySelector('p')!;
    expect(p.querySelector('strong')).not.toBeNull();
  });

  it('is not a lead paragraph variant by default', () => {
    const fixture = TestBed.createComponent(TestParagraphHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-paragraph--lead')).toBe(false);
  });

  it('has a lead paragraph variant', () => {
    const fixture = TestBed.createComponent(TestLeadHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-paragraph--lead')).toBe(true);
  });

  describe('lead', () => {
    it('renders a <b> element', () => {
      const fixture = TestBed.createComponent(TestLeadHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('b')).not.toBeNull();
    });
  });

  describe('small print', () => {
    it('renders a <small> element', () => {
      const fixture = TestBed.createComponent(TestSmallHostComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('small')).not.toBeNull();
    });
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('p') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const p = el.querySelector('p')!;
    expect(p.classList.contains('utrecht-paragraph')).toBe(true);
    expect(p.classList.contains('intro')).toBe(true);
  });
});
