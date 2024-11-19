import { render } from '@testing-library/react';
import { PageFooter } from './index';
import '@testing-library/jest-dom';

describe('Page Footer', () => {
  it('renders an HTML footer element', () => {
    const { container } = render(<PageFooter />);

    const footer = container.querySelector('footer:only-child');

    expect(footer).toBeInTheDocument();
  });
});
