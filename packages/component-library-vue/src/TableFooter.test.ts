/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableFooter from './TableFooter.vue';
import '@testing-library/jest-dom';

describe('Table footer', () => {
  it('renders a rowgroup role element', () => {
    const { getByRole } = render(TableFooter);

    const footer = getByRole('rowgroup');

    expect(footer).toBeInTheDocument();
    expect(footer).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableFooter);

    const footer = container.querySelector(':only-child');

    expect(footer).toHaveClass('utrecht-table__footer');
  });

  it('renders an HTML tfoot element', () => {
    const { container } = render(TableFooter);

    const footer = container.querySelector('tfoot:only-child');

    expect(footer).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableFooter, { props: { hidden: true } });

    const footer = container.querySelector(':only-child');

    expect(footer).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableFooter, { props: { class: 'alternate-column-colors' } });

    const footer = container.querySelector(':only-child');

    expect(footer).toHaveClass('alternate-column-colors');
  });
});
