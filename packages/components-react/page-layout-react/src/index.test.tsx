import { render } from '@testing-library/react';
import { PageLayout } from './index';
import '@testing-library/jest-dom';

describe('Page Layout', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<PageLayout />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });

  it.skip('can render an HTML body element', () => {
    // Cannot render `<body>` inside `<body>`, so cannot test this with this library.
    const { container } = render(<PageLayout Component="body" />);

    const body = container.querySelector('body:only-child');

    expect(body).toBeInTheDocument();
  });
});
