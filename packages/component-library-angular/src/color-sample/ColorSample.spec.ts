import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render } from '@testing-library/angular';
import { UtrechtColorSample } from './component';
import 'jest';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).forEach(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Color sample', () => {
  it('renders a ColorSample', async () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);

    expect(fixture.nativeElement).toBeInTheDocument();
    expect(fixture.nativeElement).toBeVisible();
  });

  it('renders a data HTML element', async () => {
    const { fixture } = await render('<utrecht-color-sample color="red"></utrecht-color-sample>', {
      declarations: [UtrechtColorSample],
    });

    const data = fixture.debugElement.query(By.css('data:only-child'));

    expect(data.nativeElement).toBeInTheDocument();
  });

  it('renders the color in the value attribute', async () => {
    const color = 'red';

    const { fixture } = await render(`<utrecht-color-sample color="${color}"></utrecht-color-sample>`, {
      declarations: [UtrechtColorSample],
    });

    const data = fixture.debugElement.query(By.css('data:only-child'));

    expect(data.nativeElement).toHaveAttribute('value', color);
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtColorSample);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css(':only-child'));
    expect(el.nativeElement.classList).toContain('utrecht-color-sample');
  });
});
