import { render } from '@testing-library/react';
import { NavBar } from './index';
import '@testing-library/jest-dom';

describe('Navigation Bar', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<NavBar />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });
});
