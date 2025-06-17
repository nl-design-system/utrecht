import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { UtrechtLinkButtonAttr } from './component';

afterEach(() => {
  // Cleaning elements, because of a TestBed issue with the id attribute
  Array.from(document.body.children).map(
    (element: any) => element.tagName.toLocaleLowerCase() === 'div' && element.parentNode!.removeChild(element),
  );
});

describe('Link Button', () => {
  it('renders a button role element', async () => {
    await render('<button>ok</button>', {
      declarations: [UtrechtLinkButtonAttr],
    });
    const button = screen.getByRole('button', { name: 'ok' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('renders an HTML button element', async () => {
    const { container } = await render('<button>submit</button>', {
      declarations: [UtrechtLinkButtonAttr],
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
        declarations: [UtrechtLinkButtonAttr],
      },
    );
    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('class', 'utrecht-link-button--html-button utrecht-link-button');
  });

  it('is not busy by default', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveAttribute('aria-busy');
  });

  it('is not a submit button by default', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveAttribute('type', 'submit');
  });

  it('is not disabled by default', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toBeDisabled();
    expect(fixture.nativeElement).not.toHaveAttribute('aria-disabled');
    expect(fixture.nativeElement).not.toHaveAttribute('disabled');
  });

  it('can have a busy state', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.componentInstance.busy = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('aria-busy', 'true');
  });

  it('can have a busy state', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('type', 'submit');
  });

  it('can be a reset button', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
    fixture.componentRef.setInput('type', 'reset');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveAttribute('type', 'reset');
  });

  it('can be hidden', async () => {
    const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);

    fixture.detectChanges();
    expect(fixture.nativeElement.style.hidden).toBeUndefined();
  });

  describe('toggle button', () => {
    it('is not a toggle button by default', async () => {
      const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);

      fixture.detectChanges();
      expect(fixture.nativeElement).not.toHaveAttribute('aria-pressed');
    });

    it('is can be a toggle button', async () => {
      const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
      fixture.componentRef.setInput('pressed', false);
      fixture.detectChanges();
      expect(fixture.nativeElement).toHaveAttribute('aria-pressed', 'false');
    });

    describe('pressed state', () => {
      it('can have a pressed state', () => {
        const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
        fixture.componentRef.setInput('pressed', true);
        fixture.detectChanges();
        expect(fixture.nativeElement).toHaveAttribute('aria-pressed', 'true');
      });

      it('renders a design system BEM class name', () => {
        const fixture = TestBed.createComponent(UtrechtLinkButtonAttr);
        fixture.componentRef.setInput('pressed', true);
        fixture.detectChanges();
        expect(fixture.nativeElement).toHaveClass('utrecht-link-button--pressed');
      });
    });
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
        declarations: [UtrechtLinkButtonAttr],
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
