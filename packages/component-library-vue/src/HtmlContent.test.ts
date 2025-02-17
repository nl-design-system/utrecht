/* eslint-env jest */
import { render } from '@testing-library/vue';
import HtmlContent from './HtmlContent.vue';
import '@testing-library/jest-dom';

describe('HTML Content', () => {
  it('renders rich text content', () => {
    const { getByRole } = render(HtmlContent, {
      slots: {
        default: '<h1><strong>Breaking</strong> news</h1>',
      },
    });

    const heading = getByRole('heading', {
      name: 'Breaking news',
    });

    expect(heading).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(HtmlContent, { props: { hidden: true } });

    const heading = container.querySelector(':only-child');

    expect(heading).not.toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(HtmlContent, {
      props: {
        level: 1,
      },
    });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('utrecht-html');
  });

  it('can have a custom class name', () => {
    const { container } = render(HtmlContent, { props: { class: 'compact' } });

    const heading = container.querySelector(':only-child');

    expect(heading).toHaveClass('compact');
    expect(heading).toHaveClass('utrecht-html');
  });
});
