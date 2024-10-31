import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import '@testing-library/jest-dom';
import { FormFieldCombobox } from './index';

describe('Form field', () => {
  it('renders an FormFieldCombobox component', () => {
    const { container } = render(<FormFieldCombobox />);
    const field = container.querySelector('div');
    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormFieldCombobox />);
    const field = container.querySelector('div');
    expect(field).toHaveClass('utrecht-form-field');
    expect(field).toHaveClass('utrecht-form-field--text');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldCombobox />);
    const field = container.querySelector('div');
    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });
  it('renders rich text content', () => {
    render(
      <FormFieldCombobox>
        <input type="text" />
      </FormFieldCombobox>,
    );
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });
  it('can be hidden', () => {
    const { container } = render(<FormFieldCombobox hidden />);
    const field = container.querySelector('div');
    expect(field).not.toBeVisible();
  });
  it('can have a additional class name', () => {
    const { container } = render(<FormFieldCombobox className="large" />);
    const field = container.querySelector(':only-child');
    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });
  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<FormFieldCombobox ref={ref} />);
    const div = container.querySelector('div');
    expect(ref.current).toBe(div);
  });
  describe('label', () => {
    it('renders a label', () => {
      const { container } = render(<FormFieldCombobox label="Name" />);
      const label = container.querySelector('label');
      expect(label).toBeInTheDocument();
    });
    it('renders a label with a custom class name', () => {
      const { container } = render(<FormFieldCombobox label="Name" labelProps={{ className: 'large' }} />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('large');
      expect(label).toHaveClass('utrecht-form-label');
    });
    it('renders a label with a custom id', () => {
      const { container } = render(<FormFieldCombobox label="Name" labelProps={{ id: 'custom-id' }} />);
      const label = container.querySelector('label');
      expect(label).toHaveAttribute('id', 'custom-id');
    });
  });
});
