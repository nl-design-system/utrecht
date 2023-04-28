import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { UtrechtRadioButtonAttr } from './component';
import { clearElements } from '../utils';

afterEach(() => {
  clearElements();
});

describe('RadioButton', () => {
  it('renders a radioButton role element', async () => {
    await render('<input type="radio" utrecht-radio-button />', {
      declarations: [UtrechtRadioButtonAttr],
    });

    const radioButton = screen.getByRole('radio');

    expect(radioButton).toBeInTheDocument();
  });

  it('renders an HTML input type=radio element', async () => {
    const { container } = await render('<input type="radio" utrecht-radio-button />', {
      declarations: [UtrechtRadioButtonAttr],
    });

    const radioButton = container.querySelector('input[type="radio"]:only-child');

    expect(radioButton).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', async () => {
    const { container } = await render('<input type="radio" utrecht-radio-button />', {
      declarations: [UtrechtRadioButtonAttr],
    });

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toBeVisible();
    expect(radioButton).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', async () => {
    const { container } = await render('<input type="radio" utrecht-radio-button />', {
      declarations: [UtrechtRadioButtonAttr],
    });

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toHaveClass('utrecht-radio-button');
  });

  describe('checked variant', () => {
    it('is not checked by default', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button [checked]="checked"/>');

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-checked');

      expect(radiobutton).not.toHaveAttribute('checked');
    });

    it('can have a checked state', async () => {
      const { container } = await render('<input type="radio" [checked]="checked" utrecht-radio-button  />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          checked: true,
        },
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeChecked();
    });

    it('can have a checked state in CSS', async () => {
      const { container } = await render('<input [checked]="checked" type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          checked: true,
        },
      });

      const radiobutton = container.querySelector('[type="radio"]:checked');
      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', async () => {
      const { container } = await render('<input [invalid]="invalid" type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          invalid: true,
        },
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toHaveClass('utrecht-radio-button--invalid');
    });

    it('is not invalid by default', async () => {
      const { container } = await render('<input [invalid]="invalid" type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', async () => {
      const { container } = await render('<input [invalid]="invalid" type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          invalid: false,
        },
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', async () => {
      const { container } = await render('<input [invalid]="invalid" type="radio" utrecht-radio-button />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          invalid: true,
        },
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeInvalid();
    });

    it('can have a invalid state in CSS', async () => {
      const { container } = await render(
        '<input [invalid]="invalid" required="true" type="radio" utrecht-radio-button />',
        {
          declarations: [UtrechtRadioButtonAttr],
          componentProperties: {
            invalid: false,
          },
        },
      );
      const radiobutton = container.querySelector(':invalid');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('can have a disabled state in CSS', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button [disabled]="disabled"/>', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          disabled: true,
        },
      });

      const radiobutton = container.querySelector(':disabled');

      expect(radiobutton).toBeInTheDocument();
    });

    it('is not disabled by default', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button [disabled]="disabled"/>', {
        declarations: [UtrechtRadioButtonAttr],
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button [disabled]="disabled"/>', {
        declarations: [UtrechtRadioButtonAttr],
      });

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-disabled');

      expect(radiobutton).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', async () => {
      const { container } = await render('<input type="radio" utrecht-radio-button [disabled]="disabled" />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          disabled: true,
        },
      });
      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeDisabled();
    });
  });

  it('can be hidden', async () => {
    const { container } = await render('<input type="radio" utrecht-radio-button [hidden]="hidden" />', {
      declarations: [UtrechtRadioButtonAttr],
      componentProperties: {
        hidden: true,
      },
    });

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { container } = await render('<input type="radio" utrecht-radio-button [class]="class" />', {
      declarations: [UtrechtRadioButtonAttr],
      componentProperties: {
        class: 'ballot-box',
      },
    });

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();
      const { container } = await render('<input type="radio" utrecht-radio-button (change)="sendValue($event)" />', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          sendValue: handleChange,
        },
      });

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      const { container } = await render(
        '<input type="radio" [disabled]="disabled" utrecht-radio-button (change)="sendValue($event)" />',
        {
          declarations: [UtrechtRadioButtonAttr],
          componentProperties: {
            disabled: true,
            sendValue: handleChange,
          },
        },
      );

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handleInput = jest.fn();
      const { container } = await render('<input type="radio" utrecht-radio-button (input)="sendValue($event)"/>', {
        declarations: [UtrechtRadioButtonAttr],
        componentProperties: {
          sendValue: handleInput,
        },
      });

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', async () => {
      const handleInput = jest.fn();
      const { container } = await render(
        '<input type="radio" [disabled]="disabled" utrecht-radio-button (input)="sendValue($event)"/>',
        {
          declarations: [UtrechtRadioButtonAttr],
          componentProperties: {
            sendValue: handleInput,
            disabled: true,
          },
        },
      );
      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });
});
