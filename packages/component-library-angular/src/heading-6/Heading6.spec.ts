import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtHeading6 } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Heading 6', () => {
  it('renders a heading role element', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    const heading6DebugElement = fixture.debugElement.query(By.css('h6'))!;
    heading6DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('renders a heading at heading level 6', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    const heading6DebugElement = fixture.debugElement.query(By.css('h6'))!;
    heading6DebugElement.nativeElement.textContent = 'Breaking news';

    fixture.detectChanges();

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 6,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an HTML h6 element', async () => {
    const { container } = await render(UtrechtHeading6);

    const heading = container.querySelector('h6:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders rich text content', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    const heading6DebugElement = fixture.debugElement.query(By.css('h6'))!;
    heading6DebugElement.nativeElement.innerHTML = '<Heading6><strong>Breaking</strong> news</Heading6>';

    expect(fixture.nativeElement).toContainHTML('strong');
  });

  it('can be hidden', async () => {
    const { container } = await render('<h6 [hidden]="true">Breaking news</h6>', {
      declarations: [UtrechtHeading6],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const fixture = TestBed.createComponent(UtrechtHeading6);
    const heading6DebugElement = fixture.debugElement.query(By.css('h6'))!;
    heading6DebugElement.nativeElement.classList.add('large');

    expect(heading6DebugElement.nativeElement.classList.contains('large')).toBeTruthy();
  });
});
