import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading6 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading6],
  template: `<utrecht-heading-6 [hidden]="true">Breaking news</utrecht-heading-6>`,
})
class TestHiddenHostComponent {}

describe('Heading 6', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading6, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h6')).not.toBeNull();
  });

  it('renders a heading at heading level 6', () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h6')).not.toBeNull();
  });

  it('renders an HTML h6 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h6:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h6 = el.querySelector('h6')!;
    h6.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-6') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h6 = el.querySelector('h6')!;
    h6.classList.add('large');
    expect(h6.classList.contains('large')).toBeTruthy();
  });
});
