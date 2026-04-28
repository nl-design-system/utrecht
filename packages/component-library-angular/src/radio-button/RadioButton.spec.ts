import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UtrechtRadioButtonAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" (change)="onChange($event)" utrecht-radio-button />`,
})
class TestChangeHostComponent {
  onChange = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" [disabled]="true" (change)="onChange($event)" utrecht-radio-button />`,
})
class TestDisabledChangeHostComponent {
  onChange = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" (input)="onInput($event)" utrecht-radio-button />`,
})
class TestInputEventHostComponent {
  onInput = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" [disabled]="true" (input)="onInput($event)" utrecht-radio-button />`,
})
class TestDisabledInputHostComponent {
  onInput = vi.fn();
}

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" [hidden]="true" utrecht-radio-button />`,
})
class TestHiddenHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtRadioButtonAttr],
  template: `<input type="radio" class="ballot-box" utrecht-radio-button />`,
})
class TestCustomClassHostComponent {}

describe('RadioButton', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UtrechtRadioButtonAttr,
        TestChangeHostComponent,
        TestDisabledChangeHostComponent,
        TestInputEventHostComponent,
        TestDisabledInputHostComponent,
        TestHiddenHostComponent,
        TestCustomClassHostComponent,
      ],
    }).compileComponents();
  });

  it('renders a radioButton role element', () => {
    const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLInputElement).type).toBe('radio');
  });

  it('renders an HTML input type=radio element', () => {
    const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLInputElement;
    expect(el.localName).toBe('input');
    expect(el.type).toBe('radio');
  });

  it('renders a design system BEM block class name', () => {
    const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('utrecht-radio-button')).toBe(true);
  });

  describe('checked variant', () => {
    it('is not checked by default', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).checked).toBe(false);
    });

    it('omits non-essential checked attributes when not checked', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-checked')).toBe(false);
      expect(fixture.nativeElement.hasAttribute('checked')).toBe(false);
    });

    it('can have a checked state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLInputElement;
      el.checked = true;
      expect(el.matches(':checked')).toBe(true);
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains('utrecht-radio-button--invalid')).toBe(true);
    });

    it('is not invalid by default', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-invalid')).toBe(false);
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.componentRef.setInput('invalid', false);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-invalid')).toBe(false);
    });

    it('can have an invalid state', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();
      expect(fixture.nativeElement.getAttribute('aria-invalid')).toBe('true');
    });

    it('can have an invalid state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      fixture.nativeElement.setAttribute('required', 'true');
      expect((fixture.nativeElement as HTMLInputElement).matches(':invalid')).toBe(true);
    });
  });

  describe('disabled variant', () => {
    it('can have a disabled state in CSS', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).matches(':disabled')).toBe(true);
    });

    it('is not disabled by default', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).disabled).toBe(false);
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-disabled')).toBe(false);
      expect(fixture.nativeElement.hasAttribute('disabled')).toBe(false);
    });

    it('can have a disabled state', () => {
      const fixture = TestBed.createComponent(UtrechtRadioButtonAttr);
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
      expect((fixture.nativeElement as HTMLInputElement).disabled).toBe(true);
    });
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('input[type="radio"]') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('input[type="radio"]')?.classList.contains('ballot-box')).toBe(true);
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const fixture = TestBed.createComponent(TestChangeHostComponent);
      fixture.detectChanges();
      const radio = fixture.nativeElement.querySelector('input[type="radio"]') as HTMLInputElement;
      radio.click();
      expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger a change event when disabled', () => {
      const fixture = TestBed.createComponent(TestDisabledChangeHostComponent);
      fixture.detectChanges();
      const radio = fixture.nativeElement.querySelector('input[type="radio"]') as HTMLInputElement;
      radio.click();
      expect(fixture.componentInstance.onChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger an input event', () => {
      const fixture = TestBed.createComponent(TestInputEventHostComponent);
      fixture.detectChanges();
      const radio = fixture.nativeElement.querySelector('input[type="radio"]') as HTMLInputElement;
      radio.click();
      expect(fixture.componentInstance.onInput).toHaveBeenCalled();
    });

    it('does not trigger an input event when disabled', () => {
      const fixture = TestBed.createComponent(TestDisabledInputHostComponent);
      fixture.detectChanges();
      const radio = fixture.nativeElement.querySelector('input[type="radio"]') as HTMLInputElement;
      radio.click();
      expect(fixture.componentInstance.onInput).not.toHaveBeenCalled();
    });
  });
});
