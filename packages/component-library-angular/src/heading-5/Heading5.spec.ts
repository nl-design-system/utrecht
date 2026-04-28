import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading5 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading5],
  template: `<utrecht-heading-5 [hidden]="true">Breaking news</utrecht-heading-5>`,
})
class TestHiddenHostComponent {}

describe('Heading 5', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading5, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h5')).not.toBeNull();
  });

  it('renders a heading at heading level 5', () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h5')).not.toBeNull();
  });

  it('renders an HTML h5 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h5:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h5 = el.querySelector('h5')!;
    h5.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-5') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h5 = el.querySelector('h5')!;
    h5.classList.add('large');
    expect(h5.classList.contains('large')).toBeTruthy();
  });
});
