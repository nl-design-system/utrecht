import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading4 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 4', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    const heading4DebugElement = fixture.debugElement.query(By.css('h4'))!;
    heading4DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 4', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    const heading4DebugElement = fixture.debugElement.query(By.css('h4'))!;
    heading4DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 4,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h4 element', async () => {
    const { container } = await render(UtrechtHeading4);

    const heading = container.querySelector('h4:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    const heading4DebugElement = fixture.debugElement.query(By.css('h4'))!;
    heading4DebugElement.nativeElement.innerHTML = '<Heading4><strong>Breaking</strong> news</Heading4>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h4 [hidden]="true">Breaking news</h4>', {
      declarations: [UtrechtHeading4],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading4);
    const heading4DebugElement = fixture.debugElement.query(By.css('h4'))!;
    heading4DebugElement.nativeElement.classList.add('large');

    expect(heading4DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
