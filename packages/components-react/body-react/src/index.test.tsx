import { render } from '@testing-library/react';
import { Body } from './index';
import '@testing-library/jest-dom';

describe('Body', () => {
  it('renders an HTML body element', () => {
    const { container } = render(<Body />);

    const body = container.querySelector('body:only-child');

    expect(body).toBeInTheDocument();
  });
});
