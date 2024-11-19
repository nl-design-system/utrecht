import { render } from '@testing-library/react';
import { PageHeader } from './index';
import '@testing-library/jest-dom';

describe('Page Header', () => {
  it('renders an HTML footer element', () => {
    const { container } = render(<PageHeader />);

    const header = container.querySelector('header:only-child');

    expect(header).toBeInTheDocument();
  });
});
