import { TestBed } from '@angular/core/testing';
// import { render, screen } from '@testing-library/angular';
import { By } from '@angular/platform-browser';
import { UtrechtStatusBadge } from './component';
import 'jest';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Status Badge', () => {
  it('renders a StatusBadge', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);

    expect(fixture.nativeElement).toBeInTheDocument();
    expect(fixture.nativeElement).toBeVisible();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    el.nativeElement.innerHTML = '<strong>COMPLETED</strong>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge')).toBe(true);
  });

  it('renders a class utrecht-status-badge--error based on status="error" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'error';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--error')).toBe(true);
  });

  it('renders a class utrecht-status-badge--neutral based on status="neutral" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'neutral';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--neutral')).toBe(true);
  });

  it('renders a class utrecht-status-badge--danger based on status="danger" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'danger';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--danger')).toBe(true);
  });

  it('renders a class utrecht-status-badge--safe based on status="safe" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'safe';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--safe')).toBe(true);
  });

  it('renders a class utrecht-status-badge--invalid based on status="invalid" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'invalid';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--invalid')).toBe(true);
  });

  it('renders a class utrecht-status-badge--valid based on status="valid" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'valid';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--valid')).toBe(true);
  });

  it('renders a class utrecht-status-badge--warning based on status="warning" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'warning';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--warning')).toBe(true);
  });

  it('renders a class utrecht-status-badge--success based on status="success" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'success';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--success')).toBe(true);
  });

  it('renders a class utrecht-status-badge--inactive based on status="inactive" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'inactive';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--inactive')).toBe(true);
  });

  it('renders a class utrecht-status-badge--active based on status="active" property', async () => {
    const fixture = TestBed.createComponent(UtrechtStatusBadge);
    fixture.componentInstance.status = 'active';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-status-badge'));
    expect(el.nativeElement.classList.contains('utrecht-status-badge--active')).toBe(true);
  });
});
