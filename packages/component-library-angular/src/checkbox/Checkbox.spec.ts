import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UtrechtCheckboxAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input type="checkbox" (change)="onChange($event)" utrecht-checkbox />`,
})
class TestChangeHostComponent {
  onChange = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input type="checkbox" (change)="onChange($event)" [disabled]="true" utrecht-checkbox />`,
})
class TestDisabledChangeHostComponent {
  onChange = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input (input)="onInput($event)" type="checkbox" utrecht-checkbox />`,
})
class TestInputEventHostComponent {
  onInput = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input (input)="onInput($event)" [disabled]="true" type="checkbox" utrecht-checkbox />`,
})
class TestDisabledInputHostComponent {
  onInput = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input [hidden]="true" type="checkbox" utrecht-checkbox />`,
})
class TestHiddenHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtCheckboxAttr],
  template: `<input class="custom-class" type="checkbox" utrecht-checkbox />`,
})
class TestCustomClassHostComponent {}

describe('Checkbox', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UtrechtCheckboxAttr,
        TestChangeHostComponent,
        TestDisabledChangeHostComponent,
        TestInputEventHostComponent,
        TestDisabledInputHostComponent,
        TestHiddenHostComponent,
        TestCustomClassHostComponent,
      ],
    }).compileComponents();
  });

  it('renders a checkbox role element', () => {
    const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLInputElement).type).toBe('checkbox');
  });

  it('renders an HTML input type=checkbox element', () => {
    const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLInputElement;
    expect(el.localName).toBe('input');
    expect(el.type).toBe('checkbox');
  });

  it('renders a design system BEM block class name', () => {
    const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('utrecht-checkbox')).toBe(true);
  });

  describe('checked variant', () => {
    it('is not checked by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).checked).toBe(false);
    });

    it('omits non-essential checked attributes when not checked', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('checked', false);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('checked')).toBe(false);
    });

    it('can have a checked state', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('checked', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('checked')).toBe(true);
    });

    it('can have a checked state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('checked', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':checked')).toBe(true);
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains('utrecht-checkbox--invalid')).toBe(true);
    });

    it('is not invalid by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-invalid')).toBe(false);
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-invalid')).toBe(false);
    });

    it('can have an invalid state', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.getAttribute('aria-invalid')).toBe('true');
    });

    it('can have an invalid state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':invalid')).toBe(true);
    });
  });

  describe('noValidate variant', () => {
    it('`noValidate` is falsy by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':invalid')).toBe(true);
    });

    it('can have a required state when `noValidate` is false', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('required')).toBe(true);
    });

    it('can have a valid state when `noValidate` is true', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.componentRef.setInput('noValidate', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':valid')).toBe(true);
    });
  });

  describe('disabled variant', () => {
    it('is not disabled by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).disabled).toBe(false);
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-disabled')).toBe(false);
      expect(fixture.nativeElement.hasAttribute('disabled')).toBe(false);
    });

    it('can have a disabled state', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).disabled).toBe(true);
    });

    it('can have a disabled state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':disabled')).toBe(true);
    });
  });

  describe('required variant', () => {
    it('is not required by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).required).toBe(false);
    });

    it('omits non-essential required attributes when not required', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-required')).toBe(false);
      expect(fixture.nativeElement.hasAttribute('required')).toBe(false);
    });

    it('can have a required state', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).required).toBe(true);
    });

    it('can have a required state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':required')).toBe(true);
    });
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('input[type="checkbox"]') as HTMLElement).hidden).toBe(true);
  });

  it('can have an additional class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const checkbox = el.querySelector('input[type="checkbox"]')!;
    expect(checkbox.classList.contains('custom-class')).toBe(true);
    expect(checkbox.classList.contains('utrecht-checkbox--html-input')).toBe(true);
    expect(checkbox.classList.contains('utrecht-checkbox--custom')).toBe(true);
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const fixture = TestBed.createComponent(TestChangeHostComponent);
      fixture.detectChanges();
      const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.click();
      expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger a change event when disabled', () => {
      const fixture = TestBed.createComponent(TestDisabledChangeHostComponent);
      fixture.detectChanges();
      const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.click();
      expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('input event', () => {
    it('can trigger an input event', () => {
      const fixture = TestBed.createComponent(TestInputEventHostComponent);
      fixture.detectChanges();
      const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.click();
      expect(fixture.componentInstance.onInput).toHaveBeenCalledTimes(1);
    });

    it('does not trigger an input event when disabled', () => {
      const fixture = TestBed.createComponent(TestDisabledInputHostComponent);
      fixture.detectChanges();
      const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.click();
      expect(fixture.componentInstance.onInput).toHaveBeenCalledTimes(0);
    });
  });

  describe('appearance variant', () => {
    it('renders design system BEM modifier class utrecht-checkbox--custom by default', () => {
      const fixture = TestBed.createComponent(UtrechtCheckboxAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains('utrecht-checkbox--custom')).toBe(true);
    });
  });
});
