import { render } from '@testing-library/react';
import { createRef } from 'react';
import { CurrencyData, formatLabel, formatVisually } from './CurrencyData';
import '@testing-library/jest-dom';

describe('Currency data', () => {
  it('renders a data HTML element', () => {
    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={123.45} />);

    const currency = container.querySelector('data:only-child');

    expect(currency).toBeInTheDocument();
  });

  it('renders a data HTML element with a value attribute', () => {
    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={123} />);

    const currency = container.querySelector('data:only-child');

    expect(currency?.getAttribute('value')).toContain('EUR');
    expect(currency?.getAttribute('value')).toContain('123');
  });

  it('renders a BEM class name', () => {
    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={1} />);

    const currency = container.querySelector(':only-child');

    expect(currency).toHaveClass('utrecht-currency-data');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <CurrencyData locale="nl-NL" currency="EUR" amount={123.45}>
        <span className="currency">€</span>
        <span className="amount">123</span>
        <span className="decimal-separator">,</span>
        <span className="cents">45</span>
      </CurrencyData>,
    );

    const currency = container.querySelector(':only-child');

    const richText = currency?.querySelector('span');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={1} hidden />);

    const currency = container.querySelector(':only-child');

    expect(currency).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={1} className="reservation" />);

    const currency = container.querySelector(':only-child');

    expect(currency).toHaveClass('reservation');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDataElement>();

    const { container } = render(<CurrencyData locale="nl-NL" currency="EUR" amount={1} ref={ref} />);

    const currency = container.querySelector(':only-child');

    expect(ref.current).toBe(currency);
  });
});

describe('Currency formatting for screen readers', () => {
  it('renders no white space', () => {
    const label = formatLabel('en-US', 'USD', Number.MAX_SAFE_INTEGER);

    expect(label).not.toMatch(/\s+/);
  });

  it('renders a Unicode minus sign (U+2212) for negative numbers', () => {
    const label = formatLabel('en-US', 'USD', Number.MIN_SAFE_INTEGER);

    expect(label).not.toContain('-');
    expect(label).toContain('\u2212');
  });

  it('renders a Unicode minus sign (U+2212) for negative zero', () => {
    const label = formatLabel('en-US', 'USD', -0);

    expect(label).toContain('\u2212');
  });

  it('renders no minus sign for positive numbers', () => {
    const label = formatLabel('en-US', 'USD', Number.MAX_SAFE_INTEGER);

    expect(label).not.toContain('-');
    expect(label).not.toContain('\u2212');
  });

  it('renders no grouping separators', () => {
    const label = formatLabel('en-US', 'USD', Number.MAX_SAFE_INTEGER);

    expect(label).not.toContain(',');
  });

  it('renders decimal for fractional values', () => {
    const label = formatLabel('en-US', 'USD', 1.99);

    expect(label).toContain('99');
  });

  it('renders the localized number of decimals (0 decimals)', () => {
    const label = formatLabel('en-US', 'JPY', 1.5);

    expect(label).toContain('2');
  });

  it('renders the localized number of decimals (2 decimals)', () => {
    const label = formatLabel('en-US', 'USD', 1.5);

    expect(label).toContain('50');
  });

  it('renders the localized number of decimals (3 decimals)', () => {
    const label = formatLabel('en-US', 'OMR', 1.5);

    expect(label).toContain('500');
  });

  it('renders no decimals for integer values', () => {
    const label = formatLabel('en-US', 'USD', 1);

    expect(label).not.toContain('0');
  });

  it('renders example values', () => {
    const examples = [
      {
        locale: 'en-US',
        currency: 'USD',
        amount: Number.MAX_SAFE_INTEGER,
        expected: '$9007199254740991',
      },
      {
        locale: 'nl-NL',
        currency: 'EUR',
        amount: Number.MAX_SAFE_INTEGER,
        expected: '€9007199254740991',
      },
      {
        locale: 'de-DE',
        currency: 'EUR',
        amount: Number.MAX_SAFE_INTEGER,
        expected: '9007199254740991€',
      },
    ];

    examples.forEach(({ locale, currency, amount, expected }) => {
      const label = formatLabel(locale, currency, amount);

      expect(label).toBe(expected);
    });
  });
});

describe('Currency formatting for visual users', () => {
  it('can render white space between currency and amount', () => {
    const label = formatVisually('nl-NL', 'EUR', 123);

    expect(label).toMatch(/\s+\d/);
  });

  it('renders a non-breaking space as whitespace between currency and amount', () => {
    const label = formatVisually('nl-NL', 'EUR', 123);

    expect(label).toMatch(/\u00A0\d/);
  });

  it('renders a Unicode minus sign (U+2212) for negative numbers', () => {
    const label = formatVisually('en-US', 'USD', Number.MIN_SAFE_INTEGER);

    expect(label).not.toContain('-');
    expect(label).toContain('\u2212');
  });

  it('renders a Unicode minus sign (U+2212) for negative zero', () => {
    const label = formatVisually('en-US', 'USD', -0);

    expect(label).toContain('\u2212');
  });

  it('renders no minus sign for positive numbers', () => {
    const label = formatVisually('en-US', 'USD', Number.MAX_SAFE_INTEGER);

    expect(label).not.toContain('-');
    expect(label).not.toContain('\u2212');
  });

  it('renders grouping separators', () => {
    const label = formatVisually('en-US', 'USD', Number.MAX_SAFE_INTEGER);

    expect(label).toContain(',');
  });

  it('renders the localized number of decimals (0 decimals)', () => {
    const label = formatVisually('en-US', 'JPY', 1.5);

    expect(label).toContain('2');
  });

  it('renders the localized number of decimals (2 decimals)', () => {
    const label = formatVisually('en-US', 'USD', 1.5);

    expect(label).toContain('50');
  });

  it('renders the localized number of decimals (3 decimals)', () => {
    const label = formatVisually('en-US', 'OMR', 1.5);

    expect(label).toContain('500');
  });

  it('renders decimals for integer values', () => {
    const label = formatVisually('en-US', 'USD', 1);

    expect(label).toContain('00');
  });

  it('renders example values', () => {
    const examples = [
      {
        locale: 'en-US',
        currency: 'USD',
        amount: Number.MIN_SAFE_INTEGER,
        expected: '\u2212$9,007,199,254,740,991.00',
      },
      {
        locale: 'nl-NL',
        currency: 'EUR',
        amount: Number.MIN_SAFE_INTEGER,
        expected: '\u2212\u00A0€\u00A09.007.199.254.740.991,00',
      },
      {
        locale: 'de-DE',
        currency: 'EUR',
        amount: Number.MIN_SAFE_INTEGER,
        expected: '\u22129.007.199.254.740.991,00\u00A0€',
      },
    ];

    examples.forEach(({ locale, currency, amount, expected }) => {
      const label = formatVisually(locale, currency, amount);

      expect(label).toBe(expected);
    });
  });
});
