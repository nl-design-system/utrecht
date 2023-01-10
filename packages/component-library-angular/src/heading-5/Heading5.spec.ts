import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading5 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 5', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    const heading5DebugElement = fixture.debugElement.query(By.css('h5'))!;
    heading5DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 5', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    const heading5DebugElement = fixture.debugElement.query(By.css('h5'))!;
    heading5DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 5,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h5 element', async () => {
    const { container } = await render(UtrechtHeading5);

    const heading = container.querySelector('h5:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    const heading5DebugElement = fixture.debugElement.query(By.css('h5'))!;
    heading5DebugElement.nativeElement.innerHTML = '<Heading5><strong>Breaking</strong> news</Heading5>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h5 [hidden]="true">Breaking news</h5>', {
      declarations: [UtrechtHeading5],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading5);
    const heading5DebugElement = fixture.debugElement.query(By.css('h5'))!;
    heading5DebugElement.nativeElement.classList.add('large');

    expect(heading5DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
