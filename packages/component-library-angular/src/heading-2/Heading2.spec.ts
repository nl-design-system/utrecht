import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading2 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 2', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    const heading2DebugElement = fixture.debugElement.query(By.css('h2'))!;
    heading2DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 2', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    const heading2DebugElement = fixture.debugElement.query(By.css('h2'))!;
    heading2DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 2,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h2 element', async () => {
    const { container } = await render(UtrechtHeading2);

    const heading = container.querySelector('h2:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    const heading2DebugElement = fixture.debugElement.query(By.css('h2'))!;
    heading2DebugElement.nativeElement.innerHTML = '<Heading2><strong>Breaking</strong> news</Heading2>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h2 [hidden]="true">Breaking news</h2>', {
      declarations: [UtrechtHeading2],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading2);
    const heading2DebugElement = fixture.debugElement.query(By.css('h2'))!;
    heading2DebugElement.nativeElement.classList.add('large');

    expect(heading2DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
