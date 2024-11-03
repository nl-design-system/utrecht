import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { RadioGroup } from './index';
import '@testing-library/jest-dom';

describe('Radio Group', () => {
  it('renders a radiogroup role', () => {
    render(<RadioGroup />);

    const group = screen.getByRole('radiogroup');

    expect(group).toBeInTheDocument();
    expect(group).toBeVisible();
  });

  it('renders an HTML fieldset element', () => {
    const { container } = render(<RadioGroup />);

    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toBeInTheDocument();
  });

  it('renders an HTML div element that contains a fieldset element', () => {
    const { container } = render(<RadioGroup />);

    const div = container.querySelector<HTMLDivElement>('div:only-child');
    const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');

    expect(div).toBeInTheDocument();
    expect(fieldset).toBeInTheDocument();

    if (div && fieldset) {
      expect(div).toContainElement(fieldset);
    }
  });

  it('renders a design system BEM class name: utrecht-radio-group', () => {
    const { container } = render(<RadioGroup />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('utrecht-radio-group');
  });

  it('can have a additional class name', () => {
    const { container } = render(<RadioGroup className="compact" />);

    const fieldSet = container.querySelector(':only-child');

    expect(fieldSet).toHaveClass('compact');

    expect(fieldSet).toHaveClass('utrecht-radio-group');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<RadioGroup />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <RadioGroup>
        <p>Description</p>
      </RadioGroup>,
    );

    const fieldset = container.querySelector(':only-child');

    const richText = fieldset?.querySelector('p');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<RadioGroup hidden />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).not.toBeVisible();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<RadioGroup ref={ref} />);

    const fieldset = container.querySelector(':only-child');

    expect(ref.current).toBe(fieldset);
  });

  describe('invalid state', () => {
    it('has an aria-invalid="true" attribute', () => {
      render(<RadioGroup invalid />);

      const group = screen.getByRole('radiogroup');

      expect(group).toHaveAttribute('aria-invalid');
    });
  });

  describe('required state', () => {
    it('has an aria-required="true" attribute', () => {
      render(<RadioGroup required />);

      const group = screen.getByRole('radiogroup');

      expect(group).toHaveAttribute('aria-required');
    });
  });

  describe('label', () => {
    it('renders a radiogroup role with an accessible name', () => {
      render(<RadioGroup label="Pizza toppings" />);

      const group = screen.getByRole('radiogroup', { name: 'Pizza toppings' });
    });

    it('renders an HTML div element that contains a fieldset element', () => {
      const { container } = render(<RadioGroup label="Pizza toppings" />);

      const fieldset = container.querySelector<HTMLFieldSetElement>('fieldset:only-child');
      const legend = container.querySelector<HTMLLegendElement>('legend:only-child');

      expect(fieldset).toBeInTheDocument();
      expect(legend).toBeInTheDocument();

      if (fieldset && legend) {
        expect(fieldset).toContainElement(legend);
      }
    });

    it('renders a legend HTML-element with the label', () => {
      render(<RadioGroup label="Pizza toppings" />);

      const group = screen.getByRole('radiogroup', { name: 'Pizza toppings' });
    });
  });

  describe('description', () => {
    it('renders a radiogroup role with an accessible description', () => {
      render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

      const group = screen.getByRole('radiogroup', {
        name: 'Pizza toppings',
        description: 'The first three toppings are free.',
      });
    });

    it('renders an HTML div element inside the fieldset element', () => {
      const { container } = render(
        <RadioGroup label="Pizza toppings" description="The first three toppings are free." />,
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
      render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

      const description = screen.getByText('The first three toppings are free.');

      expect(description.localName).toBe('div');
    });

    it('renders a design system BEM class name: utrecht-radio-group__description', () => {
      render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

      const description = screen.getByText('The first three toppings are free.');

      expect(description).toHaveClass('utrecht-radio-group__description');
    });

    it('follows the the label in document order', () => {
      render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

      const label = screen.getByText('Pizza toppings');
      const description = screen.getByText('The first three toppings are free.');

      if (label && description) {
        expect(description.compareDocumentPosition(label)).toBe(2);
      }
    });
  });
});

describe('error message', () => {
  it('renders a radiogroup role with an accessible description', () => {
    render(<RadioGroup label="Pizza toppings" invalid errorMessage="Remove one topping, three is the maximum." />);

    const group = screen.getByRole('radiogroup', {
      name: 'Pizza toppings',
      description: 'Remove one topping, three is the maximum.',
    });
  });

  it('renders an HTML div element inside the fieldset element', () => {
    const { container } = render(
      <RadioGroup label="Pizza toppings" errorMessage="Remove one topping, three is the maximum." />,
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
    render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

    const description = screen.getByText('The first three toppings are free.');

    expect(description.localName).toBe('div');
  });

  it('renders a design system BEM class name: utrecht-radio-group__description', () => {
    render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

    const description = screen.getByText('The first three toppings are free.');

    expect(description).toHaveClass('utrecht-radio-group__description');
  });

  it('follows the the label in document order', () => {
    render(<RadioGroup label="Pizza toppings" description="The first three toppings are free." />);

    const label = screen.getByText('Pizza toppings');
    const description = screen.getByText('The first three toppings are free.');

    if (label && description) {
      expect(description.compareDocumentPosition(label)).toBe(2);
    }
  });
});
