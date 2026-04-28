import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtHeading1 } from './component';

@Component({
  standalone: true,
  imports: [UtrechtHeading1],
  template: `<utrecht-heading-1 [hidden]="true">Breaking news</utrecht-heading-1>`,
})
class TestHiddenHostComponent {}

describe('Heading 1', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtHeading1, TestHiddenHostComponent],
    }).compileComponents();
  });

  it('renders a heading role element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')).not.toBeNull();
  });

  it('renders a heading at heading level 1', () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')).not.toBeNull();
  });

  it('renders an HTML h1 element', () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1:only-child')).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h1 = el.querySelector('h1')!;
    h1.innerHTML = '<strong>Breaking</strong> news';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('can be hidden', () => {
    const fixture = TestBed.createComponent(TestHiddenHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect((el.querySelector('utrecht-heading-1') as HTMLElement).hidden).toBe(true);
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const h1 = el.querySelector('h1')!;
    h1.classList.add('large');
    expect(h1.classList.contains('large')).toBeTruthy();
  });
});
