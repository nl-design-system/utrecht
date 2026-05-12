import { render, screen } from '@testing-library/react';
import { Textbox } from '@utrecht/textbox-react';
import { createRef } from 'react';
import { CustomizableTextInput } from './index';
import '@testing-library/jest-dom';

describe('CustomizableTextInput', () => {
  it('renders the customizable text input', () => {
    const { container } = render(<CustomizableTextInput />);

    const element = container.querySelector(':only-child');

    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  it('renders a design system BEM block class name: utrecht-customizable-text-input', () => {
    const { container } = render(<CustomizableTextInput />);

    const element = container.querySelector(':only-child');

    expect(element).toHaveClass('utrecht-customizable-text-input');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>();

    const { container } = render(<CustomizableTextInput ref={ref} />);

    const element = container.querySelector(':only-child');

    expect(ref.current).toBe(element);
  });

  it('renders an input element as a child', () => {
    const { container } = render(
      <CustomizableTextInput>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const input = container.querySelector('.utrecht-textbox');

    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();
  });

  // Default start slot
  it('renders text in the start slot', () => {
    const { container } = render(
      <CustomizableTextInput start={'Text'}>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const element = container.querySelector('.utrecht-customizable-text-input__slot--start');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    expect(element).toHaveTextContent('Text');
  });

  it('renders text in the end slot', () => {
    const { container } = render(
      <CustomizableTextInput end={'Text'}>
        <Textbox />
      </CustomizableTextInput>,
    );

    const element = container.querySelector('.utrecht-customizable-text-input__slot--end');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    expect(element).toHaveTextContent('Text');
  });

  // Linked to inputId
  it('links text in the start slot to inputId', () => {
    render(
      <CustomizableTextInput start={'Text'} inputId="input-id">
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const label = screen.getByText('Text');
    expect(label).toHaveAttribute('aria-hidden', 'true');
    expect(label).toHaveAttribute('for', 'input-id');
    expect(label).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(label).toBeVisible();
  });

  // Linked to inputId
  it('links text in the end slot to inputId', () => {
    render(
      <CustomizableTextInput end={'Text'} inputId="input-id">
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const label = screen.getByText('Text');
    expect(label).toHaveAttribute('aria-hidden', 'true');
    expect(label).toHaveAttribute('for', 'input-id');
    expect(label).toHaveClass('utrecht-customizable-text-input__slot--end');
    expect(label).toBeVisible();
  });

  // Default label slot
  it('renders text in the labelStart slot', () => {
    const { container } = render(
      <CustomizableTextInput labelStart={'Text'}>
        <Textbox />
      </CustomizableTextInput>,
    );

    const element = container.querySelector('.utrecht-customizable-text-input__slot--start');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    expect(element).toHaveTextContent('Text');
  });

  it('renders text in the labelEnd slot', () => {
    const { container } = render(
      <CustomizableTextInput labelEnd={'Text'}>
        <Textbox />
      </CustomizableTextInput>,
    );

    const element = container.querySelector('.utrecht-customizable-text-input__slot--end');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    expect(element).toHaveTextContent('Text');
  });

  it('renders text in the labelStart and labelEnd slot', () => {
    render(
      <CustomizableTextInput labelStart={'Text start'} labelEnd={'Text end'}>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const slotStart = screen.getByText('Text start');
    const slotEnd = screen.getByText('Text end');

    expect(slotStart).toBeVisible();
    expect(slotStart).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(slotEnd).toBeVisible();
    expect(slotEnd).toHaveClass('utrecht-customizable-text-input__slot--end');
  });

  // Linked label slot
  it('links labelStart slot to input when using label slot', () => {
    render(
      <CustomizableTextInput labelStart={'Text'} inputId="input-id">
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const element = screen.getByText('Text');
    expect(element).not.toHaveAttribute('aria-hidden');
    expect(element).toHaveAttribute('for', 'input-id');
    expect(element).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(element).toHaveClass('utrecht-customizable-text-input__slot--label');
    expect(element).toBeVisible();
  });

  it('links labelEnd slot to input when using label slot', () => {
    render(
      <CustomizableTextInput labelEnd={'Text'} inputId="input-id">
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const element = screen.getByText('Text');
    expect(element).not.toHaveAttribute('aria-hidden');
    expect(element).toHaveAttribute('for', 'input-id');
    expect(element).toHaveClass('utrecht-customizable-text-input__slot--end');
    expect(element).toHaveClass('utrecht-customizable-text-input__slot--label');
    expect(element).toBeVisible();
  });

  it('links labelStart and labelEnd slot to input when using label slot', () => {
    render(
      <CustomizableTextInput labelStart={'Text start'} labelEnd={'Text end'} inputId="input-id">
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const labelStart = screen.getByText('Text start');
    const labelEnd = screen.getByText('Text end');

    expect(labelStart).not.toHaveAttribute('aria-hidden');
    expect(labelStart).toHaveAttribute('for', 'input-id');
    expect(labelStart).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(labelStart).toHaveClass('utrecht-customizable-text-input__slot--label');

    expect(labelEnd).not.toHaveAttribute('aria-hidden');
    expect(labelEnd).toHaveAttribute('for', 'input-id');
    expect(labelEnd).toHaveClass('utrecht-customizable-text-input__slot--end');
    expect(labelEnd).toHaveClass('utrecht-customizable-text-input__slot--label');
  });

  // Default action slot
  it('renders button in the actionStart slot', () => {
    render(
      <CustomizableTextInput actionStart={<button>Text</button>}>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const button = screen.getByRole('button', { name: 'Text' });
    const slot = button.closest('.utrecht-customizable-text-input__slot');

    expect(slot).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(slot).toHaveClass('utrecht-customizable-text-input__slot--action');
    expect(slot).toBeVisible();
    expect(button).toBeVisible();
  });

  it('renders button in the actionEnd slot', () => {
    render(
      <CustomizableTextInput actionEnd={<button>Text</button>}>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const button = screen.getByRole('button', { name: 'Text' });
    const slot = button.closest('.utrecht-customizable-text-input__slot');

    expect(slot).toHaveClass('utrecht-customizable-text-input__slot--end');
    expect(slot).toHaveClass('utrecht-customizable-text-input__slot--action');
    expect(slot).toBeVisible();
    expect(button).toBeVisible();
  });

  it('renders buttons in the actionStart and actionEnd slot', () => {
    render(
      <CustomizableTextInput actionStart={<button>Button start</button>} actionEnd={<button>Button end</button>}>
        <Textbox type="text" />
      </CustomizableTextInput>,
    );

    const buttonStart = screen.getByRole('button', { name: 'Button start' });
    const buttonEnd = screen.getByRole('button', { name: 'Button end' });

    const slotStart = buttonStart.closest('.utrecht-customizable-text-input__slot');
    const slotEnd = buttonEnd.closest('.utrecht-customizable-text-input__slot');

    expect(slotStart).toBeVisible();
    expect(slotStart).toHaveClass('utrecht-customizable-text-input__slot--start');
    expect(slotStart).toHaveClass('utrecht-customizable-text-input__slot--action');
    expect(slotEnd).toBeVisible();
    expect(slotEnd).toHaveClass('utrecht-customizable-text-input__slot--end');
    expect(slotEnd).toHaveClass('utrecht-customizable-text-input__slot--action');

    expect(buttonStart).toBeVisible();
    expect(buttonEnd).toBeVisible();
  });

  it('it does not link slots to input when using action slots', () => {
    render(
      <CustomizableTextInput
        inputId="input-id"
        actionStart={<button>Button start</button>}
        actionEnd={<button>Button end</button>}
      >
        <Textbox type="text" id="input-id" />
      </CustomizableTextInput>,
    );

    const buttonStart = screen.getByRole('button', { name: 'Button start' });
    const buttonEnd = screen.getByRole('button', { name: 'Button end' });

    const slotStart = buttonStart.closest('.utrecht-customizable-text-input__slot');
    const slotEnd = buttonEnd.closest('.utrecht-customizable-text-input__slot');

    expect(slotStart).not.toHaveAttribute('for', 'input-id');
    expect(slotEnd).not.toHaveAttribute('for', 'input-id');

    expect(buttonStart).toBeVisible();
    expect(buttonEnd).toBeVisible();
  });
});
