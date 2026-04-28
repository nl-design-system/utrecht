import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtColorSample } from './component';

describe('Color sample', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtColorSample],
    }).compileComponents();
  });

  it('renders a ColorSample', () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toBeNull();
  });

  it('renders a data HTML element', () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('data')).not.toBeNull();
  });

  it('renders the color in the value attribute', () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);
    fixture.componentInstance.color = 'red';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('data')?.getAttribute('value')).toBe('red');
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(':only-child')?.classList.contains('utrecht-color-sample')).toBe(true);
  });
});
