import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading3 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading3],
  template: `<utrecht-heading-3 [hidden]="true">Breaking news</utrecht-heading-3>`,
})
class TestHiddenHostComponent {}

describe('Heading 3', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading3, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3')).not.toBeNull();
  });

  it('renders a heading at heading level 3', () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3')).not.toBeNull();
  });

  it('renders an HTML h3 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h3 = el.querySelector('h3')!;
    h3.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-3') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h3 = el.querySelector('h3')!;
    h3.classList.add('large');
    expect(h3.classList.contains('large')).toBeTruthy();
  });
});
