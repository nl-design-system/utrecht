import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { CheckboxGroup } from './index';
import '@testing-library/jest-dom';

describe('Checkbox Group wrapper', () => {
  it('renders a group role', () => {
    render(<CheckboxGroup />);

    const group = screen.getByRole('group');

    expect(group).toBeInTheDocument();
    expect(group).toBeVisible();
  });

  it('renders an HTML fieldset element', () => {
    const { container } = render(<CheckboxGroup />);

    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toBeInTheDocument();
  });

  it('renders an HTML div element that contains a fieldset element', () => {
    const { container } = render(<CheckboxGroup />);

    const div = container.querySelector<HTMLDivElement>('div:only-child');
    const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');

    expect(div).toBeInTheDocument();
    expect(fieldset).toBeInTheDocument();

    if (div && fieldset) {
      expect(div).toContainElement(fieldset);
    }
  });

  it('renders a design system BEM class name: utrecht-checkbox-group', () => {
    const { container } = render(<CheckboxGroup />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('utrecht-checkbox-group');
  });

  it('can have a additional class name', () => {
    const { container } = render(<CheckboxGroup className="compact" />);

    const fieldSet = container.querySelector(':only-child');

    expect(fieldSet).toHaveClass('compact');

    expect(fieldSet).toHaveClass('utrecht-checkbox-group');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<CheckboxGroup />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <CheckboxGroup>
        <p>Description</p>
      </CheckboxGroup>,
    );

    const fieldset = container.querySelector(':only-child');

    const richText = fieldset?.querySelector('p');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<CheckboxGroup hidden />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).not.toBeVisible();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<CheckboxGroup ref={ref} />);

    const fieldset = container.querySelector(':only-child');

    expect(ref.current).toBe(fieldset);
  });

  describe('invalid state', () => {
    it('has no aria-invalid="true" attribute', () => {
      render(<CheckboxGroup invalid />);

      const group = screen.getByRole('group');

      expect(group).not.toHaveAttribute('aria-invalid');
    });
  });

  describe('required state', () => {
    it('has no aria-required="true" attribute', () => {
      render(<CheckboxGroup required />);

      const group = screen.getByRole('group');

      expect(group).not.toHaveAttribute('aria-required');
    });
  });

  describe('label', () => {
    it('renders a group role with an accessible name', () => {
      render(<CheckboxGroup label="Pizza toppings" />);

      const group = screen.getByRole('group', { name: 'Pizza toppings' });
    });

    it('renders an HTML div element that contains a fieldset element', () => {
      const { container } = render(<CheckboxGroup label="Pizza toppings" />);

      const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');
      const legend = container.querySelector<HTMLLegendElement>('legend:only-child');

      expect(fieldset).toBeInTheDocument();
      expect(legend).toBeInTheDocument();

      if (fieldset && legend) {
        expect(fieldset).toContainElement(legend);
      }
    });

    it('renders a legend HTML-element with the label', () => {
      render(<CheckboxGroup label="Pizza toppings" />);

      const group = screen.getByRole('group', { name: 'Pizza toppings' });
    });
  });

  describe('description', () => {
    it('renders a group role with an accessible description', () => {
      render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

      const group = screen.getByRole('group', {
        name: 'Pizza toppings',
        description: 'The first three toppings are free.',
      });
    });

    it('renders an HTML div element inside the fieldset element', () => {
      const { container } = render(
        <CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />,
      );

      const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');
      const description = screen.getByText('Pizza toppings');

      expect(fieldset).toBeInTheDocument();
      expect(description).toBeInTheDocument();

      if (fieldset && description) {
        expect(fieldset).toContainElement(description);
      }
    });

    it('renders a div HTML-element with the description', () => {
      render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

      const description = screen.getByText('The first three toppings are free.');

      expect(description.localName).toBe('div');
    });

    it('renders a design system BEM class name: utrecht-checkbox-group__description', () => {
      render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

      const description = screen.getByText('The first three toppings are free.');

      expect(description).toHaveClass('utrecht-checkbox-group__description');
    });

    it('follows the the label in document order', () => {
      render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

      const label = screen.getByText('Pizza toppings');
      const description = screen.getByText('The first three toppings are free.');

      if (label && description) {
        expect(description.compareDocumentPosition(label)).toBe(2);
      }
    });
  });
});

describe('error message', () => {
  it('renders a group role with an accessible description', () => {
    render(<CheckboxGroup label="Pizza toppings" invalid errorMessage="Remove one topping, three is the maximum." />);

    const group = screen.getByRole('group', {
      name: 'Pizza toppings',
      description: 'Remove one topping, three is the maximum.',
    });
  });

  it('renders an HTML div element inside the fieldset element', () => {
    const { container } = render(
      <CheckboxGroup label="Pizza toppings" errorMessage="Remove one topping, three is the maximum." />,
    );

    const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');
    const legend = container.querySelector<HTMLLegendElement>('legend:only-child');

    expect(fieldset).toBeInTheDocument();
    expect(legend).toBeInTheDocument();

    if (fieldset && legend) {
      expect(fieldset).toContainElement(legend);
    }
  });

  it('renders a div HTML-element with the description', () => {
    render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

    const description = screen.getByText('The first three toppings are free.');

    expect(description.localName).toBe('div');
  });

  it('renders a design system BEM class name: utrecht-checkbox-group__description', () => {
    render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

    const description = screen.getByText('The first three toppings are free.');

    expect(description).toHaveClass('utrecht-checkbox-group__description');
  });

  it('follows the the label in document order', () => {
    render(<CheckboxGroup label="Pizza toppings" description="The first three toppings are free." />);

    const label = screen.getByText('Pizza toppings');
    const description = screen.getByText('The first three toppings are free.');

    if (label && description) {
      expect(description.compareDocumentPosition(label)).toBe(2);
    }
  });
});

/*
describe('Checkbox Group Option', () => {
  it('renders a checkbox role element', () => {
    render(<CheckboxGroup />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('renders an HTML input type=checkbox element', () => {
    const { container } = render(<Checkbox />);

    const checkbox = container.querySelector('input[type="checkbox"]:only-child');

    expect(checkbox).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<Checkbox />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toBeVisible();
    expect(checkbox).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Checkbox />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-checkbox');
  });

  it('can have a additional class name', () => {
    const { container } = render(<Checkbox className="large" />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toHaveClass('large');

    expect(checkbox).toHaveClass('utrecht-checkbox');
  });
  describe('checked variant', () => {
    it('is not checked by default', () => {
      render(<Checkbox />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', () => {
      const handleChange = () => {};
      const { container } = render(<Checkbox checked={false} onChange={handleChange} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-checked');

      expect(checkbox).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const handleChange = () => {};
      render(<Checkbox checked onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can have a defaultChecked state (in React)', () => {
      render(<Checkbox defaultChecked />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<Checkbox checked onChange={handleChange} />);

      const checkbox = container.querySelector(':checked');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Checkbox invalid />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--invalid');
    });

    it('is not invalid by default', () => {
      const { container } = render(<Checkbox />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<Checkbox invalid={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      const { container } = render(<Checkbox invalid />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeInvalid();
    });

    it('can have a invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<Checkbox inputRequired checked={false} onChange={handleChange} />);

      const checkbox = container.querySelector(':invalid');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Checkbox disabled />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--disabled');
    });

    it('is not disabled by default', () => {
      const { container } = render(<Checkbox />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<Checkbox disabled={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-disabled');

      expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      const { container } = render(<Checkbox disabled />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<Checkbox disabled />);

      const checkbox = container.querySelector(':disabled');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Checkbox required />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--required');
    });

    it('is not required by default', () => {
      const { container } = render(<Checkbox />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<Checkbox required={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-required');

      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      const { container } = render(<Checkbox required />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeRequired();
    });
  });

  describe('inputRequired variant', () => {
    it('renders a design system BEM modifier class name: utrecht-checkbox--required', () => {
      const { container } = render(<Checkbox inputRequired />);

      const checkbox = container.querySelector('.utrecht-checkbox');

      expect(checkbox).toHaveClass('utrecht-checkbox--required');
    });

    it('is not required by default', () => {
      const { container } = render(<Checkbox />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<Checkbox inputRequired={false} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toHaveAttribute('aria-required');
      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<Checkbox inputRequired />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeRequired();
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<Checkbox inputRequired />);

      const checkbox = container.querySelector(':required');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('indeterminate variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Checkbox indeterminate />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--indeterminate');
    });

    it('is not indeterminate by default', () => {
      const { container } = render(<Checkbox />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-checked', 'mixed');
    });

    it('can have a indeterminate state in the attribute `aria-checked` (for server side rendering)', () => {
      const { container } = render(<Checkbox indeterminate />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });

    it('can have a indeterminate state in the DOM property `indeterminate` (for client side rendering)', () => {
      const { container } = render(<Checkbox indeterminate />);

      type FixedHTMLInput = HTMLInputElement & { indeterminate: boolean };

      const checkbox = container.querySelector(':only-child') as FixedHTMLInput;

      expect(checkbox.indeterminate).toBe(true);
    });

    it('can have a indeterminate state in CSS', () => {
      const { container } = render(<Checkbox indeterminate />);

      const checkbox = container.querySelector(':indeterminate');

      expect(checkbox).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<Checkbox hidden />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).not.toBeVisible();
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      const { container } = render(<Checkbox onChange={handleChange} />);

      const checkbox = container.querySelector<HTMLElement>(':only-child');

      checkbox?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      const { container } = render(<Checkbox disabled onChange={handleChange} />);

      const checkbox = container.querySelector<HTMLElement>(':only-child');

      checkbox?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      const { container } = render(<Checkbox onInput={handleInput} />);

      const checkbox = container.querySelector<HTMLElement>(':only-child');

      checkbox?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      const { container } = render(<Checkbox disabled onInput={handleInput} />);

      const checkbox = container.querySelector<HTMLElement>(':only-child');

      checkbox?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<Checkbox ref={ref} />);

    const checkbox = container.querySelector(':only-child');

    expect(ref.current).toBe(checkbox);
  });
});
*/
