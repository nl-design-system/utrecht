import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtFieldsetAttr } from './component';

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset></fieldset>`,
})
class TestFieldsetHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset role="radiogroup"></fieldset>`,
})
class TestRadioGroupHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset class="large"></fieldset>`,
})
class TestCustomClassHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset><p>Description</p></fieldset>`,
})
class TestRichTextHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset name="first and last name fields"></fieldset>`,
})
class TestNameHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset form="this is a form"></fieldset>`,
})
class TestFormHostComponent {}

@Component({
  standalone: true,
  imports: [UtrechtFieldsetAttr],
  template: `<fieldset utrecht-fieldset hidden></fieldset>`,
})
class TestHiddenHostComponent {}

describe('Fieldset', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestFieldsetHostComponent,
        TestRadioGroupHostComponent,
        TestCustomClassHostComponent,
        TestRichTextHostComponent,
        TestNameHostComponent,
        TestFormHostComponent,
        TestHiddenHostComponent,
      ],
    }).compileComponents();
  });

  it('renders a group role', () => {
    const fixture = TestBed.createComponent(TestFieldsetHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset')).not.toBeNull();
  });

  it('can be configured with the radiogroup role', () => {
    const fixture = TestBed.createComponent(TestRadioGroupHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[role="radiogroup"]')).not.toBeNull();
  });

  it('renders an HTML fieldset element', () => {
    const fixture = TestBed.createComponent(TestFieldsetHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset:only-child')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(TestFieldsetHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset')?.classList.contains('utrecht-fieldset')).toBe(true);
  });

  it('can have a additional class name', () => {
    const fixture = TestBed.createComponent(TestCustomClassHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const fieldset = el.querySelector('fieldset')!;
    expect(fieldset.classList.contains('large')).toBe(true);
    expect(fieldset.classList.contains('utrecht-fieldset')).toBe(true);
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(TestRichTextHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset')?.querySelector('p')).not.toBeNull();
  });

  it('can have a name', () => {
    const fixture = TestBed.createComponent(TestNameHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset')?.getAttribute('name')).toBe('first and last name fields');
  });

  it('can have a form', () => {
    const fixture = TestBed.createComponent(TestFormHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('fieldset')?.getAttribute('form')).toBe('this is a form');
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('fieldset') as HTMLElement).hidden).toBe(true);
  });
});
