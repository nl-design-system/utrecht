import { render } from '@testing-library/react';
import { OpenFormsContainer } from './index';
import '@testing-library/jest-dom';

describe('OpenFormsContainer', () => {
  it('renders an HTML OpenFormsContainer element', () => {
    const { container } = render(<OpenFormsContainer />);
    const openFormsContainer = container.querySelector('div:only-child');
    expect(openFormsContainer).toBeInTheDocument();
  });
  it('renders an HTML OpenFormsContainer element with children', () => {
    const { container } = render(
      <OpenFormsContainer>
        <input type="text" />
      </OpenFormsContainer>,
    );
    const openFormsContainer = container.querySelector('div:only-child');
    expect(openFormsContainer).toBeInTheDocument();
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
  });
  it('renders a design system BEM class name', () => {
    const { container } = render(<OpenFormsContainer />);

    const button = container.querySelector(':only-child');

    expect(button).toHaveClass('utrecht-open-forms-container');
  });
  it('renders an HTML OpenFormsContainer element with className', () => {
    const { container } = render(<OpenFormsContainer className="test-class" />);
    const openFormsContainer = container.querySelector('div:only-child');
    expect(openFormsContainer).toHaveClass('test-class');
  });
  it('renders an HTML OpenFormsContainer element with other props', () => {
    const { container } = render(<OpenFormsContainer id="test-id" />);
    const openFormsContainer = container.querySelector('div:only-child');
    expect(openFormsContainer).toHaveAttribute('id');
  });
});
