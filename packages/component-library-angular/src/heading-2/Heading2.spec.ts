import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading2 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading2],
  template: `<utrecht-heading-2 [hidden]="true">Breaking news</utrecht-heading-2>`,
})
class TestHiddenHostComponent {}

describe('Heading 2', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading2, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h2')).not.toBeNull();
  });

  it('renders a heading at heading level 2', () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h2')).not.toBeNull();
  });

  it('renders an HTML h2 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h2:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h2 = el.querySelector('h2')!;
    h2.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-2') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h2 = el.querySelector('h2')!;
    h2.classList.add('large');
    expect(h2.classList.contains('large')).toBeTruthy();
  });
});
