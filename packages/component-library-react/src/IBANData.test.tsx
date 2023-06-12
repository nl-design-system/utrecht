/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import { render } from '@testing-library/react';
import { createRef } from 'react';
import { formatIBAN, IBANData, normalizeIBAN } from './IBANData';
import '@testing-library/jest-dom';

describe('IBAN value', () => {
  it('renders a data HTML element', () => {
    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" />);

    const currency = container.querySelector('data:only-child');

    expect(currency).toBeInTheDocument();
  });

  it('renders a data HTML element with a value attribute', () => {
    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" />);

    const currency = container.querySelector('data:only-child');

    expect(currency?.getAttribute('value')).toBe('MU43BOMM0101123456789101000MUR');
  });

  it('renders a data HTML element with a value attribute that contains the normalized value', () => {
    const { container } = render(<IBANData value=" mu43 BOMM 0101 1234 5678 9101 000-MUR  " />);

    const currency = container.querySelector('data:only-child');

    expect(currency?.getAttribute('value')).toBe('MU43BOMM0101123456789101000MUR');
  });

  it('renders a BEM class name', () => {
    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" />);

    const currency = container.querySelector(':only-child');

    expect(currency).toHaveClass('utrecht-iban-data');
  });

  it('renders a `translate` attribute that blocks automatic translation tools', () => {
    const { container } = render(<IBANData value="GO 00 BACK 1234 6789 9012" />);

    const currency = container.querySelector(':only-child');

    expect(currency).toHaveAttribute('translate', 'no');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <IBANData value="MU43BOMM0101123456789101000MUR">
        MU<mark>43</mark>BOMM0101123456789101000MUR
      </IBANData>,
    );

    const currency = container.querySelector(':only-child');

    const richText = currency?.querySelector('mark');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" hidden />);

    const currency = container.querySelector(':only-child');

    expect(currency).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" className="verified" />);

    const currency = container.querySelector(':only-child');

    expect(currency).toHaveClass('verified');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDataElement>();

    const { container } = render(<IBANData value="MU43BOMM0101123456789101000MUR" ref={ref} />);

    const iban = container.querySelector(':only-child');

    expect(ref.current).toBe(iban);
  });
});

describe('IBAN normalization', () => {
  it('renders no white space', () => {
    const normalized = normalizeIBAN(' MU43 BOMM 0101 1234 5678 9101 000 MUR\r\n');

    expect(normalized).not.toMatch(/\s/);
  });

  it('renders only uppercase ASCII alphabetical characters and numbers 0-9', () => {
    const normalized = normalizeIBAN('mu43bomm0101123456789101000-mur');

    expect(normalized).toMatch(/^[A-Z0-9]+$/);
  });
});

describe('IBAN formatting for increased readability', () => {
  it('renders no more than four characters before using a space as separator', () => {
    const formatted = formatIBAN('MU43BOMM0101123456789101000MUR');

    expect(formatted).not.toMatch(/[^\s]{5,}/);
    expect(formatted).toContain(' ');
  });

  it('uses a space as separator after every four characters', () => {
    const formatted = formatIBAN('MU43BOMM0101123456789101000MUR');

    // TODO: Also use [0-9][A-Z] as boundary to insert whitespace, resulting in
    // "000 MUR" instead of "00M UR".
    expect(formatted).toBe('MU43 BOMM 0101 1234 5678 9101 000M UR');
  });
});
