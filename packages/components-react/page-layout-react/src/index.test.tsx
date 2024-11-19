import { render } from '@testing-library/react';
import { PageLayout } from './index';
import '@testing-library/jest-dom';

describe('Page Layout', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<PageLayout />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });
});
