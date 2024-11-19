import { render } from '@testing-library/react';
import { PageBody } from './index';
import '@testing-library/jest-dom';

describe('Page Body', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<PageBody />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });
});
