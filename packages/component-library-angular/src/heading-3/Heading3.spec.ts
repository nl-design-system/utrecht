import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading3 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 3', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    const heading3DebugElement = fixture.debugElement.query(By.css('h3'))!;
    heading3DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 3', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    const heading3DebugElement = fixture.debugElement.query(By.css('h3'))!;
    heading3DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 3,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h3 element', async () => {
    const { container } = await render(UtrechtHeading3);

    const heading = container.querySelector('h3:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    const heading3DebugElement = fixture.debugElement.query(By.css('h3'))!;
    heading3DebugElement.nativeElement.innerHTML = '<Heading3><strong>Breaking</strong> news</Heading3>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h3 [hidden]="true">Breaking news</h3>', {
      declarations: [UtrechtHeading3],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading3);
    const heading3DebugElement = fixture.debugElement.query(By.css('h3'))!;
    heading3DebugElement.nativeElement.classList.add('large');

    expect(heading3DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
