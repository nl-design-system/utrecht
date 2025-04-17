/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { render } from '@testing-library/react';
import { LinkButton } from './index';
import '@testing-library/jest-dom';

describe('LinkButton', () => {
  it('renders labels that contain HTML rich text content', () => {
    const { container } = render(
      <LinkButton>
        Order <strong>now</strong>
      </LinkButton>,
    );

    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('renders labels as a prop that contain HTML rich text content', () => {
    const { container } = render(
      <LinkButton
        label={
          <>
            Order <strong>now</strong>
          </>
        }
      />,
    );

    const button = container.querySelector(':only-child');

    const richText = button?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('renders a span with a label design system BEM class name', () => {
    const { container } = render(<LinkButton label="Click me" />);

    const button = container.querySelector(':only-child');
    const label = button?.querySelector('.utrecht-link-button__label');

    expect(label).toBeInTheDocument();
  });
});
