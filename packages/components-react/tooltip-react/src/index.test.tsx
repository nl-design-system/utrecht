import { render } from '@testing-library/react';
import React from 'react';
import { Tooltip, TooltipAnchor } from './index';
import '@testing-library/jest-dom';

describe('Tooltip anchor', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<TooltipAnchor />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<Tooltip />);

    const div = container.querySelector('div:only-child');

    expect(div).toBeInTheDocument();
  });
});
