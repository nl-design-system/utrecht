import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UtrechtStatusBadge } from './component';

describe('Status Badge', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtStatusBadge],
    }).compileComponents();
  });

  it('renders a StatusBadge', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toBeNull();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const badge = el.querySelector('.utrecht-status-badge')!;
    badge.innerHTML = '<strong>COMPLETED</strong>';
    expect(el.querySelector('strong')).not.toBeNull();
  });

  it('renders a design system BEM class name', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')).not.toBeNull();
  });

  it('renders a class utrecht-status-badge--error based on status="error" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'error';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--error')).toBe(true);
  });

  it('renders a class utrecht-status-badge--neutral based on status="neutral" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'neutral';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--neutral')).toBe(true);
  });

  it('renders a class utrecht-status-badge--danger based on status="danger" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'danger';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--danger')).toBe(true);
  });

  it('renders a class utrecht-status-badge--safe based on status="safe" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'safe';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--safe')).toBe(true);
  });

  it('renders a class utrecht-status-badge--invalid based on status="invalid" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'invalid';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--invalid')).toBe(true);
  });

  it('renders a class utrecht-status-badge--valid based on status="valid" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'valid';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--valid')).toBe(true);
  });

  it('renders a class utrecht-status-badge--warning based on status="warning" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'warning';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--warning')).toBe(true);
  });

  it('renders a class utrecht-status-badge--success based on status="success" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'success';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--success')).toBe(true);
  });

  it('renders a class utrecht-status-badge--inactive based on status="inactive" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'inactive';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--inactive')).toBe(true);
  });

  it('renders a class utrecht-status-badge--active based on status="active" property', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'active';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.utrecht-status-badge')?.classList.contains('utrecht-status-badge--active')).toBe(true);
  });
});
