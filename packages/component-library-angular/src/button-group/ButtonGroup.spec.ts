import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtButtonGroup } from './component';

@Component({
  standalone: true,
  imports: [UtrechtButtonGroup],
  template: `<utrecht-button-group>
    <button>Save and continue</button>
    <button>Back</button>
  </utrecht-button-group>`,
})
class TestHostComponent {}

describe('Button Group', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtButtonGroup, TestHostComponent],
    }).compileComponents();
  });

  it('renders a group role element', () => {
    const fixture = TestBed.createComponent(UtrechtButtonGroup);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[role="group"]')).not.toBeNull();
  });

  it('renders an HTML p element', () => {
    const fixture = TestBed.createComponent(UtrechtButtonGroup);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p:only-child')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtButtonGroup);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-button-group'));
    expect(el.nativeElement.classList.contains('utrecht-button-group')).toBe(true);
  });

  it('renders Button Group that contain buttons as children', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-button-group'));
    expect(el.nativeElement.querySelector('button')).not.toBeNull();
  });

  it('can have a custom class name', () => {
    const fixture = TestBed.createComponent(UtrechtButtonGroup);
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.utrecht-button-group'))!;
    debugElement.nativeElement.classList.add('custom-class');
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList.contains('custom-class')).toBeTruthy();
  });
});
