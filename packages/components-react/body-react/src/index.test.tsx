import { render } from '@testing-library/react';
import { Body } from './index';
import '@testing-library/jest-dom';

describe('Body', () => {
  it('renders an HTML body element', () => {
    const { container } = render(<Body />, {
      container: document.documentElement,
    });

    const body = container.querySelector('body.utrecht-body');

    expect(body).toBeInTheDocument();
  });
});
