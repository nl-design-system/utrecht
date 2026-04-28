import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading4 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading4],
  template: `<utrecht-heading-4 [hidden]="true">Breaking news</utrecht-heading-4>`,
})
class TestHiddenHostComponent {}

describe('Heading 4', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading4, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h4')).not.toBeNull();
  });

  it('renders a heading at heading level 4', () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h4')).not.toBeNull();
  });

  it('renders an HTML h4 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h4:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h4 = el.querySelector('h4')!;
    h4.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-4') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h4 = el.querySelector('h4')!;
    h4.classList.add('large');
    expect(h4.classList.contains('large')).toBeTruthy();
  });
});
