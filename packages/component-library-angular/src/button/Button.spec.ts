import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UtrechtButtonAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtButtonAttr],
  template: `<button utrecht-button>ok</button>`,
})
class TestButtonHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonAttr],
  template: `<button utrecht-button>Order <strong>now</strong></button>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtButtonAttr],
  template: `<form (ngSubmit)="onSubmit()"><button utrecht-button type="submit" disabled>Submit</button></form>`,
})
class TestFormHostComponent {
  onSubmit = vi.fn();
}

describe('Button', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtButtonAttr, TestButtonHostComponent, TestRichTextHostComponent, TestFormHostComponent],
    }).compileComponents();
  });

  it('renders a button role element', () => {
    const fixture = TestBed.createComponent(TestButtonHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('button')).not.toBeNull();
  });

  it('renders an HTML button element', () => {
    const fixture = TestBed.createComponent(TestButtonHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('button:only-child')).not.toBeNull();
  });

  it('renders labels that contain HTML rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('button')?.querySelector('strong')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.classList.contains('utrecht-button--html-button')).toBe(true);
    expect(el.classList.contains('utrecht-button')).toBe(true);
  });

  it('is not busy by default', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.hasAttribute('aria-busy')).toBe(false);
  });

  it('is not a submit button by default', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('type')).not.toBe('submit');
  });

  it('is not disabled by default', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLButtonElement).disabled).toBe(false);
    expect(fixture.nativeElement.hasAttribute('aria-disabled')).toBe(false);
    expect(fixture.nativeElement.hasAttribute('disabled')).toBe(false);
  });

  it('can have a busy state', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentInstance.busy = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-busy')).toBe('true');
  });

  it('can be a submit button', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('type')).toBe('submit');
  });

  it('can be a reset button', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentRef.setInput('type', 'reset');
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('type')).toBe('reset');
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement.style.hidden).toBeUndefined();
  });

  describe('toggle button', () => {
    it('is not a toggle button by default', () => {
      const fixture = TestBed.createComponent(UtrechtButtonAttr);
      fixture.detectChanges();
      expect(fixture.nativeElement.hasAttribute('aria-pressed')).toBe(false);
    });

    it('can be a toggle button', () => {
      const fixture = TestBed.createComponent(UtrechtButtonAttr);
      fixture.componentRef.setInput('pressed', false);
      fixture.detectChanges();
      expect(fixture.nativeElement.getAttribute('aria-pressed')).toBe('false');
    });

    describe('pressed state', () => {
      it('can have a pressed state', () => {
        const fixture = TestBed.createComponent(UtrechtButtonAttr);
        fixture.componentRef.setInput('pressed', true);
        fixture.detectChanges();
        expect(fixture.nativeElement.getAttribute('aria-pressed')).toBe('true');
      });

      it('renders a design system BEM class name', () => {
        const fixture = TestBed.createComponent(UtrechtButtonAttr);
        fixture.componentRef.setInput('pressed', true);
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('utrecht-button--pressed')).toBe(true);
      });
    });
  });

  it('does not trigger a form submit when disabled', () => {
    const fixture = TestBed.createComponent(TestFormHostComponent);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    expect(fixture.componentInstance.onSubmit).not.toHaveBeenCalled();
  });

  // TODO to be able to test the custom class we have to add new property to the component `class` so we can test it.
});
