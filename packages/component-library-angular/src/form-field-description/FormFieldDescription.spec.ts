import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtFormFieldDescription } from './component';

@Component({
  standalone: true,
  imports: [UtrechtFormFieldDescription],
  template: `<utrecht-form-field-description><strong>Current</strong> password</utrecht-form-field-description>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFormFieldDescription],
  template: `<utrecht-form-field-description hidden></utrecht-form-field-description>`,
})
class TestHiddenHostComponent {}

describe('Form Field Description', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtFormFieldDescription, TestRichTextHostComponent, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders an HTML div element', () => {
    const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('div')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-form-field-description')).toBe(true);
  });

  describe('variant for a message that describes why the form control is invalid', () => {
    it('renders a design system BEM class name', () => {
      const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector(':only-child')?.classList.contains('utrecht-form-field-description--invalid')).toBe(true);
    });
  });

  describe('variant for a message that mentions the form control has become valid', () => {
    it('renders a design system BEM class name', () => {
      const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
      fixture.componentRef.setInput('valid', true);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector(':only-child')?.classList.contains('utrecht-form-field-description--valid')).toBe(true);
    });
  });

  describe('variant for a warning that is provided with a form control', () => {
    it('renders a design system BEM class name', () => {
      const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
      fixture.componentRef.setInput('warning', true);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector(':only-child')?.classList.contains('utrecht-form-field-description--warning')).toBe(true);
    });
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const desc = el.querySelector('utrecht-form-field-description') as HTMLElement;
    expect(desc.hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
    fixture.componentRef.setInput('class', 'custom-class');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('custom-class')).toBe(true);
  });
});
