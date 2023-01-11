import { TestBed } from '@angular/core/testing';
// import { render, screen } from '@testing-library/angular';
import { By } from '@angular/platform-browser';
import { UtrechtBadgeStatus } from './component';
import 'jest';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Badge Status', () => {
  it('renders a BadgeStatus', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);

    expect(fixture.nativeElement).toBeInTheDocument();
    expect(fixture.nativeElement).toBeVisible();
  });

  it('renders rich text content', () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    el.nativeElement.innerHTML = '<strong>COMPLETED</strong>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status')).toBe(true);
  });

  it('renders a class utrecht-badge-status--error based on status="error" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'error';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--error')).toBe(true);
  });

  it('renders a class utrecht-badge-status--neutral based on status="neutral" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'neutral';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--neutral')).toBe(true);
  });

  it('renders a class utrecht-badge-status--danger based on status="danger" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'danger';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--danger')).toBe(true);
  });

  it('renders a class utrecht-badge-status--safe based on status="safe" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'safe';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--safe')).toBe(true);
  });

  it('renders a class utrecht-badge-status--invalid based on status="invalid" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'invalid';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--invalid')).toBe(true);
  });

  it('renders a class utrecht-badge-status--valid based on status="valid" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'valid';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--valid')).toBe(true);
  });

  it('renders a class utrecht-badge-status--warning based on status="warning" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'warning';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--warning')).toBe(true);
  });

  it('renders a class utrecht-badge-status--success based on status="success" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'success';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--success')).toBe(true);
  });

  it('renders a class utrecht-badge-status--inactive based on status="inactive" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'inactive';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--inactive')).toBe(true);
  });

  it('renders a class utrecht-badge-status--active based on status="active" property', async () => {
    const fixture = TestBed.createComponent(UtrechtBadgeStatus);
    fixture.componentInstance.status = 'active';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.utrecht-badge-status'));
    expect(el.nativeElement.classList.contains('utrecht-badge-status--active')).toBe(true);
  });
});
