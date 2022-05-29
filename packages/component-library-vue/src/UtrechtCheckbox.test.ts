/* eslint-env jest */
import { fireEvent, render } from '@testing-library/vue';
import { defineComponent, h } from 'vue';
import Checkbox from './UtrechtCheckbox.vue';
import '@testing-library/jest-dom';

describe('Checkbox', () => {
  it('renders a checkbox role element', () => {
    const { getByRole } = render(Checkbox);

    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeVisible();
  });

  it('renders an HTML input element', () => {
    const { container } = render(Checkbox);

    const checkbox = container.querySelector('input:only-child');

    expect(checkbox).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Checkbox);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toHaveClass('utrecht-checkbox');
  });

  describe('disabled state', () => {
    it('is not disabled by default', () => {
      const { getByRole } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeDisabled();
      expect(checkbox).not.toHaveClass('utrecht-checkbox--disabled');
    });

    it('does not specify `aria-disabled` when not disabled', () => {
      const { container } = render(Checkbox, { props: { disabled: false } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-disabled');
    });

    it('can have a disabled state', () => {
      const { container } = render(Checkbox, { props: { disabled: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeDisabled();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Checkbox, { props: { disabled: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--disabled');
    });

    it('can have a disabled state in CSS', () => {
      // Only setting `aria-disabled` would not achieve this result
      const { container } = render(Checkbox, { props: { disabled: true } });

      const checkbox = container.querySelector(':disabled');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('required state', () => {
    it('is not required by default', () => {
      const { getByRole } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
      expect(checkbox).not.toHaveClass('utrecht-checkbox--required');
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(Checkbox, { props: { required: false } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-required');
    });

    it('can have a required state', () => {
      const { container } = render(Checkbox, { props: { required: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeRequired();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Checkbox, { props: { required: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--required');
    });

    it('can have a required state in CSS', () => {
      // Only setting `aria-required` would not achieve this result
      const { container } = render(Checkbox, { props: { required: true } });

      const checkbox = container.querySelector(':required');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('invalid state', () => {
    it('is not invalid by default', () => {
      const { getByRole } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeInvalid();
      expect(checkbox).not.toHaveClass('utrecht-checkbox--invalid');
    });

    it('omits non-essential invalid attributes when not required', () => {
      const { container } = render(Checkbox, { props: { invalid: false } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have a invalid state', () => {
      const { container } = render(Checkbox, { props: { invalid: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeInvalid();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Checkbox, { props: { invalid: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--invalid');
    });

    // the `:invalid` state in CSS probably cannot be achieved programatically
  });

  describe('indeterminate state', () => {
    it('is not indeterminate by default', () => {
      const { getByRole } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      expect((checkbox as HTMLInputElement).indeterminate).not.toBe(true);
      expect(checkbox).not.toHaveAttribute('aria-checked', 'mixed');
      expect(checkbox).not.toHaveClass('utrecht-checkbox--indeterminate');
    });

    it('omits non-essential indeterminate attributes when not required', () => {
      const { container } = render(Checkbox, { props: { indeterminate: false } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-indeterminate');
    });

    it('can have a indeterminate state', () => {
      const { container } = render(Checkbox, { props: { indeterminate: true } });

      const checkbox = container.querySelector(':only-child');

      expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Checkbox, { props: { indeterminate: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--indeterminate');
    });

    it('can have a indeterminate state in CSS', () => {
      const { container } = render(Checkbox, { props: { indeterminate: true } });

      const checkbox = container.querySelector(':indeterminate');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('checked state', () => {
    it('is not checked by default', () => {
      const { getByRole } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
      expect(checkbox).not.toHaveClass('utrecht-checkbox--checked');
    });

    it('omits non-essential checked attributes when not checked', () => {
      const { container } = render(Checkbox, { props: { checked: false } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-checked');
      expect(checkbox).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const { container } = render(Checkbox, { props: { checked: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toBeChecked();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Checkbox, { props: { checked: true } });

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-checkbox--checked');
    });

    it('can have a checked state in CSS', () => {
      // Only setting `aria-checked` would not achieve this result
      const { container } = render(Checkbox, { props: { checked: true } });

      const checkbox = container.querySelector(':checked');

      expect(checkbox).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(Checkbox, { props: { hidden: true } });

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Checkbox, { props: { class: 'ballot-box' } });

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const { getByRole, emitted } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      await fireEvent.click(checkbox);

      expect(emitted().change || []).toHaveLength(1);
    });

    it('does not trigger a change event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      checkbox?.click();

      expect(checkbox).toBeDisabled();

      expect(emitted().change || []).toHaveLength(0);
    });

    it.skip('does not trigger a change event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      await fireEvent.click(checkbox);

      expect(checkbox).toBeDisabled();

      expect(emitted().change || []).toHaveLength(0);
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const { getByRole, emitted } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      await fireEvent.click(checkbox);

      expect(emitted().input || []).toHaveLength(1);
    });

    it('does not trigger a input event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      checkbox?.click();

      expect(checkbox).toBeDisabled();

      expect(emitted().input || []).toHaveLength(0);
    });

    // Somehow this test fails with `fireEvent.click(checkbox)`,
    // but it passes using `checkbox?.click()`
    it.skip('does not trigger a input event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      await fireEvent.click(checkbox);

      expect(checkbox).toBeDisabled();

      expect(emitted().input || []).toHaveLength(0);
    });
  });

  describe('Vue form input bindings', () => {
    it('is not checked when modelValue does not match value', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'no', modelValue: 'yes' } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
    });

    it('is checked when modelValue number matches value string', () => {
      const { getByRole } = render(Checkbox, { props: { value: '42', modelValue: 42 } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('is checked when modelValue matches value', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'yes', modelValue: 'yes' } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('is not checked when value is not included in modelValue Array', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'no', modelValue: ['yes'] } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
    });

    it('is checked when value is included in modelValue Array', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'yes', modelValue: ['true', 'yes'] } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('is not checked when value is not included in modelValue Set', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'no', modelValue: new Set(['yes']) } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
    });

    it('is checked when value is included in modelValue Set', () => {
      const { getByRole } = render(Checkbox, { props: { value: 'yes', modelValue: new Set(['true', 'yes']) } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can trigger a update:modelValue event', async () => {
      const { getByRole, emitted } = render(Checkbox);

      const checkbox = getByRole('checkbox');

      await fireEvent.click(checkbox);

      expect(emitted()['update:modelValue'] || []).toHaveLength(1);
    });

    it('does not trigger a update:modelValue event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      checkbox?.click();

      expect(checkbox).toBeDisabled();

      expect(emitted()['update:modelValue'] || []).toHaveLength(0);
    });

    // Somehow this test fails with `fireEvent.click(checkbox)`,
    // but it passes using `checkbox?.click()`
    it.skip('does not trigger a update:modelValue event when disabled', async () => {
      const { getByRole, emitted } = render(Checkbox, { props: { disabled: true } });

      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();

      await fireEvent.click(checkbox);

      expect(checkbox).toBeDisabled();

      expect(emitted()['update:modelValue'] || []).toHaveLength(0);
    });

    describe('true-value', () => {
      it('is checked when modelValue number matches trueValue string', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: true, modelValue: false, trueValue: false } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when trueValue is included in modelValue Array', () => {
        const { getByRole } = render(Checkbox, { props: { trueValue: 'foo', modelValue: ['foo', 'bar'] } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when value is included in modelValue Set', () => {
        const { getByRole } = render(Checkbox, { props: { trueValue: 'yes', modelValue: new Set(['true', 'yes']) } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });
    });

    describe('false-value', () => {
      it('is not checked when modelValue number matches falseValue string', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: true, modelValue: true, trueValue: false } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
      });

      it('is not checked when falseValue is included in modelValue Array', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: 'foo', modelValue: ['foo', 'bar'] } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
      });

      it('is not checked when falseValue is included in modelValue Set', () => {
        const { getByRole } = render(Checkbox, { props: { trueValue: 'foo', modelValue: new Set(['foo', 'bar']) } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });
    });

    describe('indeterminate', () => {
      it('is not interminate when only trueValue matches modelValue', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: 1, modelValue: 2, trueValue: 2 } });

        const checkbox = getByRole('checkbox');

        expect((checkbox as HTMLInputElement).indeterminate).not.toBe(true);
        expect(checkbox).not.toHaveAttribute('aria-checked', 'mixed');
      });

      it('is not interminate when only falseValue matches modelValue', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: 1, modelValue: 1, trueValue: 2 } });

        const checkbox = getByRole('checkbox');

        expect((checkbox as HTMLInputElement).indeterminate).not.toBe(true);
        expect(checkbox).not.toHaveAttribute('aria-checked', 'mixed');
      });

      it('is interminate when both trueValue and falseValue match modelValue', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: true, modelValue: true, trueValue: true } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
        expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
      });

      it('is interminate when neither trueValue and falseValue match modelValue', () => {
        const { getByRole } = render(Checkbox, { props: { falseValue: 1, modelValue: 0, trueValue: 2 } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
        expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
      });
    });

    describe('form binding with array', () => {
      it('is checked when value is included in modelValue array', () => {
        const { getByRole } = render(Checkbox, { props: { value: 2, modelValue: [1, 2, 3] } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when value array equals the modelValue array', () => {
        const { getByRole } = render(Checkbox, { props: { value: [1, 2, 3], modelValue: [1, 2, 3] } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when value array intersects the modelValue array (order not relevant)', () => {
        const { getByRole } = render(Checkbox, { props: { value: [3, 2, 1], modelValue: [1, 2, 3] } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when trueValue array equals the modelValue array', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: [], trueValue: [1, 2, 3], modelValue: [1, 2, 3] },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is indeterminate when both the trueValue array and the falseValue array equal the modelValue array', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: [1, 2, 3], trueValue: [1, 2, 3], modelValue: [1, 2, 3] },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
      });

      it('is indeterminate when neither trueValue array nor falseValue array equals the modelValue array', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: [], trueValue: [1, 2, 3], modelValue: [1, 2] },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
      });

      describe('toggle value', () => {
        it('can transition from not checked to checked', () => {
          const { emitted, getByRole } = render(Checkbox, {
            props: { falseValue: [4, 5, 6], trueValue: [1, 2, 3], modelValue: [4, 5, 6] },
          });

          const checkbox = getByRole('checkbox');

          expect(checkbox).not.toBeChecked();

          checkbox?.click();

          expect(checkbox).toBeChecked();
          expect(emitted()['update:modelValue'] || []).toHaveLength(1);
          expect((emitted()['update:modelValue'] || [])[0]).toEqual([[1, 2, 3]]);
        });

        it('can transition from checked to not checked', () => {
          const { emitted, getByRole } = render(Checkbox, {
            props: { falseValue: [4, 5, 6], trueValue: [1, 2, 3], modelValue: [1, 2, 3] },
          });

          const checkbox = getByRole('checkbox');

          expect(checkbox).toBeChecked();

          checkbox?.click();

          expect(checkbox).not.toBeChecked();
          expect(emitted()['update:modelValue'] || []).toHaveLength(1);
          expect((emitted()['update:modelValue'] || [])[0]).toEqual([[4, 5, 6]]);
        });

        it('can transition from not checked and indeterminate to checked', () => {
          const { emitted, getByRole } = render(Checkbox, {
            props: { falseValue: [], trueValue: [1, 2, 3], modelValue: [1, 2] },
          });

          const checkbox = getByRole('checkbox');

          expect(checkbox).not.toBeChecked();
          expect((checkbox as HTMLInputElement).indeterminate).toBe(true);

          checkbox?.click();

          expect(checkbox).toBeChecked();
          expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
          expect((emitted()['update:modelValue'] || [])[0]).toEqual([[1, 2, 3]]);
        });

        it('is unchecked after clicking a checked checkbox', () => {
          const { emitted, getByRole } = render(Checkbox, {
            props: { falseValue: [], trueValue: [1, 2, 3], modelValue: [1, 2, 3] },
          });

          const checkbox = getByRole('checkbox');

          expect(checkbox).toBeChecked();

          checkbox?.click();

          expect(checkbox).not.toBeChecked();
          expect((emitted()['update:modelValue'] || [])[0]).toEqual([[]]);
        });

        it('is emits the falseValue after clicking a checked checkbox', () => {
          const { emitted, getByRole } = render(Checkbox, {
            props: { falseValue: [4, 5, 6], trueValue: [1, 2, 3], modelValue: [1, 2, 3] },
          });

          const checkbox = getByRole('checkbox');

          expect(checkbox).toBeChecked();

          checkbox?.click();

          expect(checkbox).not.toBeChecked();
          expect((emitted()['update:modelValue'] || [])[0]).toEqual([[4, 5, 6]]);
        });
      });
    });

    describe('form binding with Set', () => {
      it('is checked when value is included in modelValue Set', () => {
        const { getByRole } = render(Checkbox, { props: { value: 2, modelValue: new Set([1, 2, 3]) } });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when value Set equals the modelValue Set', () => {
        const { getByRole } = render(Checkbox, {
          props: { value: new Set([1, 2, 3]), modelValue: new Set([1, 2, 3]) },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is checked when trueValue Set equals the modelValue Set', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: [], trueValue: new Set([1, 2, 3]), modelValue: new Set([1, 2, 3]) },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).toBeChecked();
      });

      it('is indeterminate when both the trueValue Set and the falseValue Set equal the modelValue Set', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: new Set([1, 2, 3]), trueValue: new Set([1, 2, 3]), modelValue: new Set([1, 2, 3]) },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
      });

      it('is indeterminate when neither the trueValue Set nor the falseValue Set equal the modelValue Set', () => {
        const { getByRole } = render(Checkbox, {
          props: { falseValue: new Set([4, 5, 6]), trueValue: new Set([7, 8, 9]), modelValue: new Set([1, 2, 3]) },
        });

        const checkbox = getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
      });
    });
  });
});
