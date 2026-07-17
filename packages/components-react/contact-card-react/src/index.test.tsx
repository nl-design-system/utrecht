/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2026 Frameless B.V.
 * Copyright (c) 2021-2026 Gemeente Utrecht
 */

import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ContactCard } from './index';
import '@testing-library/jest-dom';

describe('ContactCard', () => {
  it('renders a visible element', () => {
    const { container } = render(<ContactCard heading="Hulp en contact" />);

    const card = container.querySelector(':only-child');

    expect(card).toBeInTheDocument();
    expect(card).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<ContactCard heading="Hulp en contact" />);

    const card = container.querySelector(':only-child');

    expect(card).toHaveClass('utrecht-contact-card');
  });

  it('renders the heading', () => {
    render(<ContactCard heading="Hulp en contact" />);

    expect(screen.getByRole('heading', { name: 'Hulp en contact' })).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    const { container } = render(<ContactCard heading="Hulp en contact" subtitle="Wijkbureau Overvecht" />);

    expect(container).toHaveTextContent('Wijkbureau Overvecht');
  });

  it('renders sections', () => {
    const { container } = render(
      <ContactCard heading="Hulp en contact" sections={[<p key="1">Sectie 1</p>, <p key="2">Sectie 2</p>]} />,
    );

    expect(container).toHaveTextContent('Sectie 1');
    expect(container).toHaveTextContent('Sectie 2');
  });

  it('renders children', () => {
    const { container } = render(<ContactCard heading="Hulp en contact">Extra inhoud</ContactCard>);

    expect(container).toHaveTextContent('Extra inhoud');
  });

  it('can have an additional class name', () => {
    const { container } = render(<ContactCard heading="Hulp en contact" className="custom" />);

    const card = container.querySelector(':only-child');

    expect(card).toHaveClass('custom');
    expect(card).toHaveClass('utrecht-contact-card');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<ContactCard heading="Hulp en contact" ref={ref} />);

    const card = container.querySelector(':only-child');

    expect(ref.current).toBe(card);
  });

  it('renders social links', () => {
    const { container } = render(
      <ContactCard
        heading="Hulp en contact"
        sections={[<p key="1">Sectie 1</p>]}
        socialLinks={[{ icon: <span>icon</span>, href: 'https://example.com', label: 'Example' }]}
      />,
    );

    expect(container.querySelector('.utrecht-contact-card__socials-links')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://example.com"]')).toBeInTheDocument();
  });

  it('renders social links heading', () => {
    const { container } = render(
      <ContactCard
        heading="Hulp en contact"
        sections={[<p key="1">Sectie 1</p>]}
        socialLinks={[{ icon: <span>icon</span>, href: 'https://example.com' }]}
        socialLinksHeading="Social media"
      />,
    );

    expect(container.querySelector('.utrecht-contact-card__socials-heading')).toBeInTheDocument();
    expect(container).toHaveTextContent('Social media');
  });

  it('applies rich text class to sections when richText is true', () => {
    const { container } = render(
      <ContactCard heading="Hulp en contact" sections={[<p key="1">Sectie 1</p>]} richText />,
    );

    expect(container.querySelector('.utrecht-contact-card__grid-cell')).toHaveClass('utrecht-rich-text');
  });

  it('does not apply rich text class to sections by default', () => {
    const { container } = render(<ContactCard heading="Hulp en contact" sections={[<p key="1">Sectie 1</p>]} />);

    expect(container.querySelector('.utrecht-contact-card__grid-cell')).not.toHaveClass('utrecht-rich-text');
  });
});
