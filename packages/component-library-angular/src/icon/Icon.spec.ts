import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { UtrechtIcon } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Icon', () => {
  it('is not available in the accessibility tree', async () => {
    await render('<button><UtrechtIcon [hidden]="true">→</UtrechtIcon>Next</button>', {
      declarations: [UtrechtIcon],
    });

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const namedButton = screen.getByRole('button', { name: 'Next' });
    expect(namedButton).toBeInTheDocument();
  });

  it('renders an HTML span element', async () => {
    const { container } = await render(UtrechtIcon);

    const heading = container.querySelector('span:only-child');

    expect(heading).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-icon', async () => {
    const fixture = TestBed.createComponent(UtrechtIcon);
    const heading1DebugElement = fixture.debugElement.query(By.css(':only-child'))!;

    expect(heading1DebugElement.nativeElement.classList.contains('utrecht-icon')).toBeTruthy();
  });

  it('renders rich text content', async () => {
    const { container } = await render('<UtrechtIcon><svg></svg></UtrechtIcon>', {
      declarations: [UtrechtIcon],
    });

    const svg = container.querySelector('svg:only-child');
    expect(svg).toBeInTheDocument();
  });

  it('can be hidden', async () => {
    const { container } = await render('<UtrechtIcon [hidden]="true"><svg></svg></UtrechtIcon>', {
      declarations: [UtrechtIcon],
    });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { container } = await render('<UtrechtIcon [class.large]="true"><svg></svg></UtrechtIcon>', {
      declarations: [UtrechtIcon],
    });

    const largeElement = container.querySelector('.large');

    expect(largeElement).toBeInTheDocument();
  });
});
