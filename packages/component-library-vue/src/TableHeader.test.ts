/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableHeader from './TableHeader.vue';
import '@testing-library/jest-dom';

describe('Table header', () => {
  it('renders a rowgroup role element', () => {
    const { getByRole } = render(TableHeader);

    const header = getByRole('rowgroup');

    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableHeader);

    const header = container.querySelector(':only-child');

    expect(header).toHaveClass('utrecht-table__header');
  });

  it('renders an HTML thead element', () => {
    const { container } = render(TableHeader);

    const header = container.querySelector('thead:only-child');

    expect(header).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableHeader, { props: { hidden: true } });

    const header = container.querySelector(':only-child');

    expect(header).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableHeader, { props: { class: 'alternate-column-colors' } });

    const header = container.querySelector(':only-child');

    expect(header).toHaveClass('alternate-column-colors');
  });
});
