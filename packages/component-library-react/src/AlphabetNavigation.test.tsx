import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { AlphabetNavigation, AlphabetNavigationProps } from './AlphabetNavigation';
import '@testing-library/jest-dom';

const createAlphabetArray = (): string[] => {
  const alphabet = Array.from(
    { length: 26 },
    (_, index) => String.fromCharCode(65 + index),
    // A: 65, B: 66, ..., Z: 90
  );
  return alphabet;
};

const CustomLink = ({ children, ...props }: any) => {
  return <a {...props}>{children}</a>;
};

describe('AlphabetNavigation', () => {
  const mockHandleLetterClick = jest.fn((selectedLetter) => {
    return `/${selectedLetter}`;
  });

  afterEach(() => {
    mockHandleLetterClick.mockClear();
  });
  const alphabet = createAlphabetArray().map((letter) => ({ letter, availability: Math.random() < 0.5 }));

  const defaultProps: AlphabetNavigationProps = {
    handleLetterClick: mockHandleLetterClick,
    component: 'link',
    alphabet,
  };

  it('renders button component letters with correct styles', () => {
    const { debug } = render(<AlphabetNavigation {...defaultProps} component="button" />);

    const letters = screen.getAllByRole('button');

    expect(letters).toHaveLength(26);
    alphabet.forEach((item, index) => {
      const element = letters[index];
      const expectedClass = item.availability ? 'utrecht-button--secondary-action' : 'utrecht-button--disabled';
      debug(element);
      expect(element).toHaveClass(expectedClass);
    });
  });
  it('disables the button when availability is false', () => {
    const alphabet = [{ letter: 'A', availability: false }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="button" />);

    const button = screen.getByRole('button', { name: 'A' });

    expect(button).toBeDisabled();
  });
  it('does not disable the button when availability is true', () => {
    const alphabet = [{ letter: 'B', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="button" />);

    const button = screen.getByRole('button', { name: 'B' });

    expect(button).not.toBeDisabled();
  });
  it('calls handleLetterClick when a letter is clicked', async () => {
    const alphabet = createAlphabetArray().map((letter) => ({
      letter,
      availability: true,
    }));

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="button" />);
    const letters = screen.getAllByRole('button');
    fireEvent.click(letters[0]);

    expect(mockHandleLetterClick).toHaveBeenCalledWith('A');
  });
  it('supports button ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<AlphabetNavigation {...defaultProps} component="button" ref={ref} />);

    const letters = screen.getAllByRole('button');
    expect(ref.current).toBe(letters[25]);
  });
  it('supports link ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<AlphabetNavigation {...defaultProps} ref={ref} />);

    const letters = screen.getAllByRole('link');
    expect(ref.current).toBe(letters[25]);
  });
  it('sets aria-pressed attribute to true when currentLetter matches for the link component', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" />);

    const link = screen.getByRole('link', { name: 'A' });

    expect(link).toHaveAttribute('aria-pressed', 'true');
  });
  it('sets aria-pressed attribute to true when currentLetter matches for the button', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="button" currentLetter="A" />);

    const button = screen.getByRole('button', { name: 'A' });

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
  it('sets aria-pressed attribute to false when currentLetter does not match for the button', () => {
    const alphabet = [{ letter: 'B', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="button" currentLetter="C" />);

    const button = screen.getByRole('button', { name: 'B' });

    expect(button).toHaveAttribute('aria-pressed', 'false');
  });
  it('sets aria-pressed attribute to false when currentLetter does not match for the link', () => {
    const alphabet = [{ letter: 'B', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} component="link" currentLetter="C" />);

    const link = screen.getByRole('link', { name: 'B' });

    expect(link).toHaveAttribute('aria-pressed', 'false');
  });
  it('sets aria-pressed attribute based on currentLetter for the custom link component', () => {
    const alphabet = [
      { letter: 'A', availability: true },
      { letter: 'B', availability: true },
    ];

    render(
      <AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" customLinkComponent={CustomLink} />,
    );

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-pressed', 'true');
    expect(letterB).toHaveAttribute('aria-pressed', 'false');
  });
  it('updates aria-pressed attribute for the link component when letter is clicked', async () => {
    const alphabet = [
      { letter: 'A', availability: true },
      { letter: 'B', availability: false },
    ];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="B" />);
    const letterB = screen.getByRole('link', { name: 'B' });

    fireEvent.click(letterB);
    await waitFor(() => {
      expect(letterB).toHaveAttribute('aria-pressed', 'true');
    });
  });
  it('Renders utrecht-button-link--primary-action CSS className when currentLetter matches for link component', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" />);

    const link = screen.queryByText('A');

    expect(link).toHaveClass('utrecht-button-link--primary-action');
  });
  it('Renders utrecht-button-link--secondary-action CSS className when currentLetter matches for link component', () => {
    const alphabet = [{ letter: 'B', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="C" />);

    const link = screen.queryByText('B');
    expect(link).toHaveClass('utrecht-button-link--secondary-action');
  });
  it('Renders utrecht-alphabet-navigation--current-letter CSS className when currentLetter matches for link component', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" />);

    const link = screen.queryByText('A');

    expect(link).toHaveClass('utrecht-alphabet-navigation--current-letter');
  });
  it('Renders utrecht-button--primary-action CSS className when currentLetter matches for button component', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" component="button" />);

    const link = screen.queryByText('A');

    expect(link).toHaveClass('utrecht-button--primary-action');
  });
  it('Renders utrecht-button--secondary-action CSS className when currentLetter matches for button component', () => {
    const alphabet = [{ letter: 'B', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="C" component="button" />);

    const link = screen.queryByText('B');
    expect(link).toHaveClass('utrecht-button--secondary-action');
  });
  it('Renders utrecht-alphabet-navigation--current-letter CSS className when currentLetter matches for button component', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" component="button" />);

    const link = screen.queryByText('A');

    expect(link).toHaveClass('utrecht-alphabet-navigation--current-letter');
  });
  it('renders custom link component when customLinkComponent is provided', () => {
    render(<AlphabetNavigation {...defaultProps} customLinkComponent={CustomLink} />);

    const customLink = screen.getByRole('link', { name: 'A' });
    expect(customLink).toHaveClass('utrecht-button-link--secondary-action');
  });
  it('renders custom link component with placeholder appearance when placeholder is true', () => {
    const alphabet = [{ letter: 'B', availability: false }];
    render(
      <AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" customLinkComponent={CustomLink} />,
    );

    const customLink = screen.getByText('B');
    expect(customLink).toHaveClass('utrecht-button-link--placeholder');
  });
  it('renders link component with placeholder appearance when placeholder is true', () => {
    const alphabet = [{ letter: 'B', availability: false }];
    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} />);

    const customLink = screen.getByText('B');
    expect(customLink).toHaveClass('utrecht-button-link--placeholder');
  });
  it('applies `utrecht-alphabet-navigation__link--unavailable` class when availability is false for CustomLink component', () => {
    const alphabet = [{ letter: 'A', availability: false }];
    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} customLinkComponent={CustomLink} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveClass('utrecht-alphabet-navigation__link--unavailable');
  });
  it('applies `utrecht-alphabet-navigation__link--unavailable` class when availability is false for the link component', () => {
    const alphabet = [{ letter: 'A', availability: false }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveClass('utrecht-alphabet-navigation__link--unavailable');
  });
  it('sets aria-disabled attribute for the link component based on availability', () => {
    const alphabet = [
      { letter: 'A', availability: true },
      { letter: 'B', availability: false },
    ];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} />);

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-disabled', 'false');
    expect(letterB).toHaveAttribute('aria-disabled', 'true');
  });
  it('sets aria-disabled attribute for the custom link component based on availability', () => {
    const alphabet = [
      { letter: 'A', availability: true },
      { letter: 'B', availability: false },
    ];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} customLinkComponent={CustomLink} />);

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-disabled', 'false');
    expect(letterB).toHaveAttribute('aria-disabled', 'true');
  });
  it('generates correct href based on pathname and letter', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} currentLetter="A" pathname="/example" />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveAttribute('href', '/example/a');

    fireEvent.click(letterA);

    expect(mockHandleLetterClick).toHaveBeenCalledWith('A');
  });
  it('generates a letter-based href by default', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveAttribute('href', 'a');

    fireEvent.click(letterA);

    expect(mockHandleLetterClick).toHaveBeenCalledWith('A');
  });
  it('sets tabIndex attribute based on availability', () => {
    const alphabet = [{ letter: 'A', availability: true }];

    const { rerender } = render(<AlphabetNavigation {...defaultProps} alphabet={alphabet} />);
    const letterA = screen.getByRole('link', { name: 'A' });
    expect(letterA).toHaveAttribute('tabIndex', '0');
    // Re-render with availability set to false
    rerender(<AlphabetNavigation {...defaultProps} alphabet={[{ letter: 'A', availability: false }]} />);

    expect(letterA).toHaveAttribute('tabIndex', '-1');
  });
});
