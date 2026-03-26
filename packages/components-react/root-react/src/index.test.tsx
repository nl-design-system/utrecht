import { render } from '@testing-library/react';
import { Root } from './index';
import '@testing-library/jest-dom';

describe('Root', () => {
  it.skip('renders an HTML html element', () => {
    // This test is skipped because since React 19, it is forbidden to render
    // <html> as a child of anything.
    const { container } = render(<Root />);

    const html = container.querySelector('html:only-child');

    expect(html).toBeInTheDocument();
  });

  it('should allow a custom tag name', () => {
    const { container } = render(<Root Component="table" />);

    const table = container.querySelector('table:only-child');

    expect(table).toBeInTheDocument();
  });
});
