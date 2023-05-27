/* eslint-env jest */
import { render } from '@testing-library/vue';
import Textarea from './Textarea.vue';
import '@testing-library/jest-dom';

describe('Textarea', () => {
  it('renders a textbox role element', () => {
    const { getByRole } = render(Textarea);

    const textbox = getByRole('textbox');

    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Textarea);

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('utrecht-textarea');
  });

  it('renders an HTML textarea element', () => {
    const { container } = render(Textarea);

    const table = container.querySelector('textarea:only-child');

    expect(table).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Textarea, { props: { hidden: true } });

    const table = container.querySelector(':only-child');

    expect(table).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Textarea, { props: { class: 'large' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('large');
  });

  it('renders bidirectional by default using `dir="auto"`', () => {
    const { container } = render(Textarea);

    const table = container.querySelector(':only-child');

    expect(table).toHaveAttribute('dir', 'auto');
  });

  it('renders left-to-right by using `dir="ltr"`', () => {
    const { container } = render(Textarea, { props: { dir: 'ltr' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveAttribute('dir', 'ltr');
  });
});
