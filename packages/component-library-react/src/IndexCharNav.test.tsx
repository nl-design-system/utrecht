import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { IndexCharNav } from './IndexCharNav';
import '@testing-library/jest-dom';

const CustomLink = ({ children, ...props }: any) => {
  return <a {...props}>{children}</a>;
};

describe('Index character navigation', () => {
  const mockHandleLetterClick = jest.fn((selectedLetter) => {
    return `/${selectedLetter}`;
  });

  afterEach(() => {
    mockHandleLetterClick.mockClear();
  });

  const latinAlphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  const latinCharacters = latinAlphabet.split(/\s+/g).map((char) => ({
    char,
    disabled: Math.random() < 0.5,
    href: `./${char}/`,
  }));

  it('renders button component letters with correct styles', () => {
    render(<IndexCharNav characters={latinCharacters} component="button" />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(26);

    buttons.forEach((button) => {
      expect(button).toHaveClass('utrecht-button--secondary-action');
    });
  });

  it('disables the button when disabled is true', () => {
    const characters = [{ char: 'A', disabled: true }];

    render(<IndexCharNav characters={characters} component="button" />);

    const button = screen.getByRole('button', { name: 'A' });

    expect(button).toBeDisabled();
  });

  it('does not disable the button when disabled is false', () => {
    const characters = [{ char: 'B', disabled: false }];

    render(<IndexCharNav characters={characters} component="button" />);

    const button = screen.getByRole('button', { name: 'B' });

    expect(button).not.toBeDisabled();
  });

  it('calls onLinkClick when a letter is clicked', async () => {
    const characters = latinCharacters.map(({ char }) => ({
      char,
      disabled: false,
    }));

    render(<IndexCharNav onLinkClick={mockHandleLetterClick} characters={characters} component="button" />);
    const button = screen.getByRole('button', { name: 'A' });
    fireEvent.click(button);

    expect(mockHandleLetterClick).toHaveBeenCalledWith('A');
  });

  it('supports button ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<IndexCharNav characters={latinCharacters} component="button" ref={ref} />);

    const buttons = screen.getAllByRole('button');
    expect(ref.current).toBe(buttons[25]);
  });

  it('supports link ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<IndexCharNav characters={latinCharacters} ref={ref} />);

    const buttons = screen.getAllByRole('link');
    expect(ref.current).toBe(buttons[25]);
  });

  it('sets aria-current attribute to true when currentChar matches for the link component', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} currentChar="A" />);

    const link = screen.getByRole('link', { name: 'A' });

    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it('sets aria-pressed attribute to true when currentChar matches for the button', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} component="button" currentChar="A" />);

    const button = screen.getByRole('button', { name: 'A' });

    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('sets aria-pressed attribute to false when currentChar does not match for the button', () => {
    const characters = [{ char: 'B', disabled: false, href: './b/' }];

    render(<IndexCharNav characters={characters} component="button" currentChar="C" />);

    const button = screen.getByRole('button', { name: 'B' });

    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('sets no aria-current attribute when currentChar does not match for the link', () => {
    const characters = [{ char: 'B', disabled: false, href: './b/' }];

    render(<IndexCharNav characters={characters} component="link" currentChar="C" />);

    const link = screen.getByRole('link', { name: 'B' });

    expect(link).not.toHaveAttribute('aria-current');
  });

  it('sets aria-current attribute based on currentChar for the custom link component', () => {
    const characters = [
      { char: 'A', disabled: false, href: './a/' },
      { char: 'B', disabled: false, href: './b/' },
    ];

    render(<IndexCharNav characters={characters} currentChar="A" Link={CustomLink} />);

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-current', 'page');
    expect(letterB).not.toHaveAttribute('aria-current');
  });

  it('Renders utrecht-button-link--primary-action CSS className when currentChar matches for link component', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} currentChar="A" />);

    const link = screen.getByRole('link', { name: 'A' });

    expect(link).toHaveClass('utrecht-button-link--primary-action');
  });

  it('Renders utrecht-button-link--secondary-action CSS className when currentChar matches for link component', () => {
    const characters = [{ char: 'B', disabled: false, href: './b/' }];

    render(<IndexCharNav characters={characters} currentChar="C" />);

    const link = screen.getByRole('link', { name: 'B' });
    expect(link).toHaveClass('utrecht-button-link--secondary-action');
  });

  it('Renders utrecht-index-char-nav__link--current CSS className when currentChar matches for link component', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} currentChar="A" />);

    const link = screen.getByRole('link', { name: 'A' });

    expect(link).toHaveClass('utrecht-index-char-nav__link--current');
  });

  it('Renders utrecht-button--primary-action CSS className when currentChar matches for button component', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} currentChar="A" component="button" />);

    const link = screen.getByRole('button', { name: 'A' });

    expect(link).toHaveClass('utrecht-button--primary-action');
  });

  it('Renders utrecht-button--secondary-action CSS className when currentChar matches for button component', () => {
    const characters = [{ char: 'B', disabled: false, href: './b/' }];

    render(<IndexCharNav characters={characters} currentChar="C" component="button" />);

    const link = screen.getByRole('button', { name: 'B' });
    expect(link).toHaveClass('utrecht-button--secondary-action');
  });

  it('Renders utrecht-index-char-nav__link--current CSS className when currentChar matches for button component', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav characters={characters} currentChar="A" component="button" />);

    const link = screen.getByRole('button', { name: 'A' });

    expect(link).toHaveClass('utrecht-index-char-nav__link--current');
  });

  it('renders custom link component when Link is provided', () => {
    render(<IndexCharNav characters={latinCharacters} Link={CustomLink} />);

    const customLink = screen.getByRole('link', { name: 'A' });
    expect(customLink).toHaveClass('utrecht-button-link--secondary-action');
  });

  it('renders custom link component with placeholder appearance when placeholder is true', () => {
    const characters = [{ char: 'B', disabled: true, href: './b/' }];
    render(<IndexCharNav characters={characters} currentChar="A" Link={CustomLink} />);

    const customLink = screen.getByRole('link', { name: 'B' });
    expect(customLink).toHaveClass('utrecht-button-link--placeholder');
  });

  it('renders link component with placeholder appearance when placeholder is true', () => {
    const characters = [{ char: 'B', disabled: true, href: './b/' }];
    render(<IndexCharNav characters={characters} />);

    const customLink = screen.getByRole('link', { name: 'B' });
    expect(customLink).toHaveClass('utrecht-button-link--placeholder');
  });

  it('applies `utrecht-index-char-nav__link--disabled` class when disabled is true for CustomLink component', () => {
    const characters = [{ char: 'A', disabled: true, href: './a/' }];
    render(<IndexCharNav characters={characters} Link={CustomLink} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveClass('utrecht-index-char-nav__link--disabled');
  });

  it('applies `utrecht-index-char-nav__link--disabled` class when disabled is true for the link component', () => {
    const characters = [{ char: 'A', disabled: true, href: './a/' }];

    render(<IndexCharNav characters={characters} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveClass('utrecht-index-char-nav__link--disabled');
  });

  it('sets aria-disabled attribute for the link component based on disabled', () => {
    const characters = [
      { char: 'A', disabled: false, href: './a/' },
      { char: 'B', disabled: true, href: './b/' },
    ];

    render(<IndexCharNav characters={characters} />);

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-disabled', 'false');
    expect(letterB).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets aria-disabled attribute for the custom link component based on disabled', () => {
    const characters = [
      { char: 'A', disabled: false, href: './a/' },
      { char: 'B', disabled: true, href: './b/' },
    ];

    render(<IndexCharNav characters={characters} Link={CustomLink} />);

    const letterA = screen.getByRole('link', { name: 'A' });
    const letterB = screen.getByRole('link', { name: 'B' });

    expect(letterA).toHaveAttribute('aria-disabled', 'false');
    expect(letterB).toHaveAttribute('aria-disabled', 'true');
  });

  it('generates link with the correct href', () => {
    const characters = [{ char: 'A', disabled: false, href: './a/' }];

    render(<IndexCharNav onLinkClick={mockHandleLetterClick} characters={characters} />);

    const letterA = screen.getByRole('link', { name: 'A' });

    expect(letterA).toHaveAttribute('href', './a/');

    fireEvent.click(letterA);

    expect(mockHandleLetterClick).toHaveBeenCalledWith('A');
  });

  it('prevents translation of the letters in links', () => {
    const characters = [{ char: 'A', href: './a/' }];

    render(<IndexCharNav characters={characters} component="link" />);

    const text = screen.queryByText('A');

    expect(text?.closest('[translate]')).toHaveAttribute('translate', 'no');
  });

  it('prevents translation of the letters in buttons', () => {
    const characters = [{ char: 'A', href: './a/' }];

    render(<IndexCharNav characters={characters} component="button" />);

    const text = screen.queryByText('A');

    expect(text?.closest('[translate]')).toHaveAttribute('translate', 'no');
  });
});
