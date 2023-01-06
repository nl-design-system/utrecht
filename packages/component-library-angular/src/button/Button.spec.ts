import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { UtrechtButtonAttr } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).map(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Button', () => {
  it('renders a button role element', async () => {
    await render('<button>ok</button>', {
      declarations: [UtrechtButtonAttr],
    });
    const button = screen.getByRole('button', { name: 'ok' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('renders an HTML button element', async () => {
    const { container } = await render('<button>submit</button>', {
      declarations: [UtrechtButtonAttr],
    });

    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('renders labels that contain HTML rich text content', async () => {
    const { container } = await render(
      `<button>
          Order <strong>now</strong>
        </button>`,
      {
        declarations: [UtrechtButtonAttr],
      },
    );
    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('class', 'utrecht-button--html-button utrecht-button');
  });

  it('is not busy by default', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveAttribute('aria-busy');
  });

  it('is not a submit button by default', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveAttribute('type', 'submit');
  });

  it('is not disabled by default', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toBeDisabled();
    expect(fixture.nativeElement).not.toHaveAttribute('aria-disabled');
    expect(fixture.nativeElement).not.toHaveAttribute('disabled');
  });

  it('can have a busy state', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentInstance.busy = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('aria-busy', 'true');
  });

  it('can have a busy state', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('type', 'submit');
  });

  it('can be a reset button', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);
    fixture.componentRef.setInput('type', 'reset');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('type', 'reset');
  });

  it('can be hidden', async () => {
    const fixture = TestBed.createComponent(UtrechtButtonAttr);

    fixture.detectChanges();
    expect(fixture.nativeElement.style.hidden).toBeUndefined();
  });

  it('does not trigger a form submit when disabled', async () => {
    const handleSubmit = jest.fn();

    await render(
      `<form (ngSubmit)={handleSubmit}>
          <button type="submit" disabled>
            Submit
          </button>
        </form>`,
      {
        declarations: [UtrechtButtonAttr],
      },
    );

    const button = screen.getByRole('button', {
      name: 'Submit',
    });

    button.click();

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  // TODO to be able to test the custom class we have to add new property to the component `class` so we can test it.
});
