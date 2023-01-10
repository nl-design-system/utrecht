import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading1 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 1', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    const heading1DebugElement = fixture.debugElement.query(By.css('h1'))!;
    heading1DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 1', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    const heading1DebugElement = fixture.debugElement.query(By.css('h1'))!;
    heading1DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h1 element', async () => {
    const { container } = await render(UtrechtHeading1);

    const heading = container.querySelector('h1:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    const heading1DebugElement = fixture.debugElement.query(By.css('h1'))!;
    heading1DebugElement.nativeElement.innerHTML = '<Heading1><strong>Breaking</strong> news</Heading1>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h1 [hidden]="true">Breaking news</h1>', {
      declarations: [UtrechtHeading1],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading1);
    const heading1DebugElement = fixture.debugElement.query(By.css('h1'))!;
    heading1DebugElement.nativeElement.classList.add('large');

    expect(heading1DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
