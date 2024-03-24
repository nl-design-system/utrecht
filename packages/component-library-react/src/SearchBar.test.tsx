import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { SearchBarFormField } from './SearchBar';

describe('Search bar', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<SearchBarFormField />);

    const searchbar = container.querySelector('div:only-child');

    expect(searchbar).toBeInTheDocument();
    expect(searchbar).toBeVisible();
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<SearchBarFormField />);

    const searchbar = container.querySelector(':only-child');

    expect(searchbar).toHaveClass('utrecht-search-bar');
  });
});
