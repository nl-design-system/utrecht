import { render } from '@testing-library/react';
import { Root } from './index';
import '@testing-library/jest-dom';

describe('Root', () => {
  it('renders an HTML html element', () => {
    const { container } = render(<Root />);

    const html = container.querySelector('html:only-child');

    expect(html).toBeInTheDocument();
  });
});
