/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableBody from './UtrechtTableBody.vue';
import '@testing-library/jest-dom';

describe('Table body', () => {
  it('renders a rowgroup role element', () => {
    const { getByRole } = render(TableBody);

    const body = getByRole('rowgroup');

    expect(body).toBeInTheDocument();
    expect(body).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableBody);

    const body = container.querySelector(':only-child');

    expect(body).toHaveClass('utrecht-table__body');
  });

  it('renders an HTML tbody element', () => {
    const { container } = render(TableBody);

    const body = container.querySelector('tbody:only-child');

    expect(body).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableBody, { props: { hidden: true } });

    const body = container.querySelector(':only-child');

    expect(body).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableBody, { props: { class: 'alternate-row-colors' } });

    const body = container.querySelector(':only-child');

    expect(body).toHaveClass('alternate-row-colors');
  });
});
