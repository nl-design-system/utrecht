import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { clearElements } from '../utils';
import { UtrechtCheckboxAttr } from './component';

afterEach(() => {
  clearElements();
});

describe('Checkbox', () => {
  it('renders a checkbox role element', async () => {
    await render('<input type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
    });

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeVisible();
  });

  it('renders an HTML input type=checkbox element', async () => {
    const { container } = await render('<input type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
    });
    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).toBeInTheDocument();
  });

  it('displays as CSS block element', async () => {
    const { fixture } = await render('<input type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
    });

    expect(fixture.nativeElement).toBeVisible();
    expect(fixture.nativeElement).toHaveStyle({ display: 'block' });
  });

  it('renders a design system BEM block class name', async () => {
    const { container } = await render('<input type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
    });
    const checkbox = container.querySelector(':only-child');
    expect(checkbox).toHaveClass('utrecht-checkbox');
  });

  describe('checked variant', () => {
    it('is not checked by default', async () => {
      await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', async () => {
      await render('<input [checked]="false" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });
      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toHaveAttribute('checked');
    });

    it('can have a checked state', async () => {
      await render('<input [checked]="checked" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          checked: true,
        },
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can have a checked state in CSS', async () => {
      const { container } = await render('<input [checked]="checked" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          checked: true,
        },
      });
      const checkbox = container.querySelector(':checked');
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', async () => {
      const { container } = await render('<input [invalid]="invalid" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          invalid: true,
        },
      });

      const checkbox = container.querySelector('.utrecht-checkbox');

      expect(checkbox).toHaveClass('utrecht-checkbox--invalid');
    });

    it('is not invalid by default', async () => {
      const { container } = await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', async () => {
      const { container } = await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', async () => {
      const { container } = await render('<input [invalid]="invalid" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          invalid: true,
        },
      });

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).toBeInvalid();
    });

    it('can have a invalid state in CSS', async () => {
      const { container } = await render('<input [required]="required" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
        },
      });

      const checkbox = container.querySelector(':invalid');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeInvalid();
    });
  });

  describe('noValidate variant', () => {
    it('`noValidate` is falsy by default', async () => {
      const { container } = await render('<input type="checkbox" [required]="required" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
        },
      });

      const checkbox = container.querySelector(':invalid');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeInvalid();
    });

    it('can have a required state when `noValidate` is true', async () => {
      await render('<input type="checkbox" [required]="required" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
        },
      });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });

    it('can have a valid state when `noValidate` is true', async () => {
      await render('<input type="checkbox" [noValidate]="noValidate" [required]="required" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
          noValidate: true,
        },
      });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeValid();
    });
  });

  describe('disabled variant', () => {
    it('is not disabled by default', async () => {
      await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', async () => {
      await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toHaveAttribute('aria-disabled');

      expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', async () => {
      await render('<input [disabled]="disabled" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          disabled: true,
        },
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', async () => {
      const { container } = await render('<input [disabled]="disabled" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          disabled: true,
        },
      });
      const checkbox = container.querySelector(':disabled');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('is not required by default', async () => {
      const { fixture } = await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });
      fixture.detectChanges();
      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', async () => {
      await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toHaveAttribute('aria-required');

      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', async () => {
      await render('<input [required]="required" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
        },
      });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeRequired();
    });

    it('can have a required state in CSS', async () => {
      const { container } = await render('<input [required]="required" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          required: true,
        },
      });

      const checkbox = container.querySelector(':required');

      expect(checkbox).toBeInTheDocument();
    });
  });

  it('can be hidden', async () => {
    const { container } = await render('<input [hidden]="hidden" type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
      componentProperties: {
        hidden: true,
      },
    });

    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).not.toBeVisible();
  });

  it('can have an additional class name', async () => {
    const { container } = await render('<input [class]="[class]" type="checkbox" utrecht-checkbox />', {
      declarations: [UtrechtCheckboxAttr],
      componentProperties: {
        class: 'custom-class',
      },
    });

    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).toHaveClass('custom-class');
    expect(checkbox).toHaveClass('utrecht-checkbox--html-input utrecht-checkbox--custom');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();
      const { container } = await render(
        '<input type="checkbox" (change)="handleChange($event)" [checked]="checked" utrecht-checkbox />',
        {
          declarations: [UtrechtCheckboxAttr],
          componentProperties: {
            handleChange,
          },
        },
      );

      const checkbox = container.querySelector('[type="checkbox"]');
      (checkbox as HTMLInputElement)?.click();

      expect(checkbox).toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();
      const { container } = await render(
        '<input (change)="handleChange($event)"  [disabled]="disabled" type="checkbox" utrecht-checkbox />',
        {
          declarations: [UtrechtCheckboxAttr],
          componentProperties: {
            disabled: true,
            handleChange,
          },
        },
      );

      const checkbox = container.querySelector('input[type="checkbox"]');
      (checkbox as HTMLInputElement)?.click();

      expect(handleChange).toHaveBeenCalledTimes(0);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handelInput = jest.fn();

      const { container } = await render('<input (input)="handelInput($event)" type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
        componentProperties: {
          handelInput,
        },
      });

      const checkbox = container.querySelector('input[type="checkbox"]');

      (checkbox as HTMLInputElement)?.click();

      expect(checkbox).toBeChecked();
      expect(handelInput).toHaveBeenCalledTimes(1);
    });

    it('does not trigger a input event when disabled', async () => {
      const handelInput = jest.fn();
      const { container } = await render(
        '<input (input)="handelInput($event)" [disabled]="disabled" type="checkbox" utrecht-checkbox />',
        {
          declarations: [UtrechtCheckboxAttr],
          componentProperties: {
            handelInput,
            disabled: true,
          },
        },
      );

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(handelInput).toHaveBeenCalledTimes(0);
      expect(checkbox).toBeDisabled();
    });
  });

  describe('appearance variant', () => {
    it('renders design system BEM modifier class utrecht-checkbox--custom by default', async () => {
      const { container } = await render('<input type="checkbox" utrecht-checkbox />', {
        declarations: [UtrechtCheckboxAttr],
      });

      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toHaveClass('utrecht-checkbox--custom');
    });
  });
});
