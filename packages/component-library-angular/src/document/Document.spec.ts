import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtDocument } from './component';

@Component({
  standalone: true,
  imports: [UtrechtDocument],
  template: `<div utrecht-document></div>`,
})
class TestDocumentHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtDocument],
  template: `<div utrecht-document><h1>Breaking news</h1></div>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtDocument],
  template: `<div utrecht-document hidden></div>`,
})
class TestHiddenHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtDocument],
  template: `<div utrecht-document class="large"></div>`,
})
class TestCustomClassHostComponent {}

describe('Document', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestDocumentHostComponent,
        TestRichTextHostComponent,
        TestHiddenHostComponent,
        TestCustomClassHostComponent,
      ],
    }).compileComponents();
  });

  it('renders an HTML div element', () => {
    const fixture = TestBed.createComponent(TestDocumentHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('div')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(TestDocumentHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-document')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const div = el.querySelector('div[utrecht-document]');
    expect(div?.querySelector('h1')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const doc = el.querySelector('div') as HTMLElement;
    expect(doc.hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('large')).toBe(true);
  });
});
