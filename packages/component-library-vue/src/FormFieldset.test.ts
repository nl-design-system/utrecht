/* eslint-env jest */
import { render } from '@testing-library/vue';
import FormFieldset from './FormFieldset.vue';
import '@testing-library/jest-dom';

describe('Fieldset', () => {
  it('renders a group role element', () => {
    const { getByRole } = render(FormFieldset, {
      props: {
        role: 'group',
      },
    });

    const fieldset = getByRole('group');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders a group role element with a legend', () => {
    const legendText = 'Pizza topping';
    const { getByRole } = render(FormFieldset, {
      props: {
        label: legendText,
      },
      slots: {
        default: `<legend>${legendText}</legend>`,
      },
    });

    const fieldset = getByRole('group', {
      name: legendText,
    });

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it.skip('renders a group role element with a legend component', () => {
    const legendText = 'Pizza topping';
    const { getByRole } = render(FormFieldset, {
      props: {
        label: legendText,
      },
      slots: {
        // TODO: Figure out how to render a `UtrechtFormFieldsetLegend` component
        default: `<UtrechtFormFieldsetLegend>${legendText}</UtrechtFormFieldsetLegend>`,
      },
    });

    const fieldset = getByRole('group', {
      name: legendText,
    });

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders a group role element with a label', () => {
    const legendText = 'Pizza topping';
    const { getByRole } = render(FormFieldset, {
      props: {
        label: legendText,
      },
    });

    const fieldset = getByRole('group', {
      name: legendText,
    });

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders a group role element with a connected label', () => {
    const legendText = 'Pizza topping';
    const { getByRole } = render(FormFieldset, {
      props: {
        labelledby: 'heading-1',
      },
      slots: {
        default: `<h1 id="heading-1">${legendText}</h1>`,
      },
    });

    const fieldset = getByRole('group', {
      name: legendText,
    });

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders a group role element with a connected description', () => {
    const descriptionText = 'There is a limit of one custom topping per pizza.';
    const { getByRole } = render(FormFieldset, {
      props: {
        describedby: 'description',
      },
      slots: {
        default: `<p id="description">${descriptionText}</p>`,
      },
    });

    const fieldset = getByRole('group', {
      description: descriptionText,
    });

    // TODO: Check association
    expect(fieldset).toBeInTheDocument();
  });

  it('can be configured with a radiogroup role element', () => {
    const { getByRole } = render(FormFieldset, {
      props: {
        role: 'radiogroup',
      },
    });

    const fieldset = getByRole('radiogroup');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders an HTML fieldset element', () => {
    const { container } = render(FormFieldset);

    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(FormFieldset);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('utrecht-form-fieldset');
  });

  it('renders rich text content', () => {
    const { container } = render(FormFieldset, {
      slots: {
        default: '<h1>Pizza topping</h1>',
      },
    });

    const fieldset = container.querySelector(':only-child');

    const richText = fieldset?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be disabled', () => {
    const { getByRole } = render(FormFieldset, {
      props: {
        disabled: true,
      },
    });

    const fieldset = getByRole('group');

    expect(fieldset).toBeDisabled();
  });

  it('can be invalid', () => {
    const { getByRole } = render(FormFieldset, {
      props: {
        invalid: true,
      },
    });

    const fieldset = getByRole('group');

    expect(fieldset).toBeInvalid();
  });

  it.todo('can be associated with a form using the `form` attribute');

  it.todo('can be associated `form.elements` using the `name` attribute');

  it('can be hidden', () => {
    const { container } = render(FormFieldset, { props: { hidden: true } });

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(FormFieldset, { props: { class: 'required' } });

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('required');
  });
});
