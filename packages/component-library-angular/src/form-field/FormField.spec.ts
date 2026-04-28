import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtFormField } from './component';

@Component({
  standalone: true,
  imports: [UtrechtFormField],
  template: `<utrecht-form-field><input /></utrecht-form-field>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFormField],
  template: `<utrecht-form-field hidden></utrecht-form-field>`,
})
class TestHiddenHostComponent {}

describe('Form Field', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtFormField, TestRichTextHostComponent, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders an HTML div element', () => {
    const fixture = TestBed.createComponent(UtrechtFormField);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('div')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtFormField);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('div')?.classList.contains('utrecht-form-field')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('input')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const host = el.querySelector('utrecht-form-field') as HTMLElement;
    expect(host.hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtFormField);
    fixture.componentRef.setInput('class', 'custom-class');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-form-field')?.classList.contains('custom-class')).toBe(true);
  });

  describe('`type` variants', () => {
    it('does not have type="checkbox" class by default', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--checkbox')).toBe(false);
    });

    it('does not have type="radio" class by default', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--radio')).toBe(false);
    });

    it('does not have type="text" class by default', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--text')).toBe(false);
    });

    it('renders a design system BEM modifier class utrecht-form-field--checkbox based on type="checkbox"', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.componentRef.setInput('type', 'checkbox');
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--checkbox')).toBe(true);
    });

    it('renders a design system BEM modifier class utrecht-form-field--radio based on type="radio"', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.componentRef.setInput('type', 'radio');
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--radio')).toBe(true);
    });

    it('renders a design system BEM modifier class utrecht-form-field--text based on type="text"', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.componentRef.setInput('type', 'text');
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--text')).toBe(true);
    });
  });

  describe('`invalid` variants', () => {
    it('does not have invalid class by default', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--invalid')).toBe(false);
    });

    it('renders a design system BEM modifier class utrecht-form-field--invalid based on invalid="true"', () => {
      const fixture = TestBed.createComponent(UtrechtFormField);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('.utrecht-form-field')?.classList.contains('utrecht-form-field--invalid')).toBe(true);
    });
  });
});
