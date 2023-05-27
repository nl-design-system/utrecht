/* eslint-env jest */
import { render } from '@testing-library/vue';
import Textbox from './Textbox.vue';
import '@testing-library/jest-dom';

describe('Textbox', () => {
  it('renders a textbox role element', () => {
    const { getByRole } = render(Textbox);

    const textbox = getByRole('textbox');

    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Textbox);

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('utrecht-textbox');
  });

  it('renders an HTML input element', () => {
    const { container } = render(Textbox);

    const table = container.querySelector('input:only-child');

    expect(table).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Textbox, { props: { hidden: true } });

    const table = container.querySelector(':only-child');

    expect(table).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Textbox, { props: { class: 'large' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('large');
  });

  it('renders bidirectional by default using `dir="auto"`', () => {
    const { container } = render(Textbox);

    const table = container.querySelector(':only-child');

    expect(table).toHaveAttribute('dir', 'auto');
  });

  it('renders left-to-right by using `dir="ltr"`', () => {
    const { container } = render(Textbox, { props: { dir: 'ltr' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveAttribute('dir', 'ltr');
  });
});
