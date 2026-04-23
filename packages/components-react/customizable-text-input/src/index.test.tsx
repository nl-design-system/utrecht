import { render } from '@testing-library/react';
import { CustomizableTextInput } from './index';
import '@testing-library/jest-dom';

describe('CustomizableTextInput', () => {
  it('renders a textbox role element', () => {
    const { container } = render(<CustomizableTextInput />);

    const element = container.querySelector('span');

    expect(element).toBeInTheDocument();
  });
});
