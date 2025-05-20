import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Card, HTMLHeadingLevel } from './index';
import '@testing-library/jest-dom';

const initialCardProps = {
  heading: 'Card title',
  headingLevel: 2 as HTMLHeadingLevel,
  body: 'Card body',
};

describe('Card', () => {
  it('renders an Card component', () => {
    const { container } = render(<Card {...initialCardProps} />);

    const card = container.querySelector(':only-child');

    expect(card).toBeInTheDocument();
  });
  it('renders a design system BEM class name', () => {
    const { container } = render(<Card {...initialCardProps} />);
    const card = container.querySelector(':only-child');
    expect(card).toHaveClass('utrecht-card');
  });
  it('renders a div element', () => {
    const { container } = render(<Card {...initialCardProps} />);
    const card = container.querySelector(':only-child');
    expect(card?.tagName).toBe('DIV');
  });
  it('should accept a custom CSS class', () => {
    const { container } = render(<Card {...initialCardProps} className="custom-css-class" />);
    const card = container.querySelector(':only-child');
    expect(card).toHaveClass('utrecht-card');
    expect(card).toHaveClass('custom-css-class');
  });

  it('should trigger the link when the card is activated with Enter key', () => {
    const { container } = render(<Card {...initialCardProps} href="https://example.com" />);
    const card = container.querySelector(':only-child');

    expect(card).toBeInTheDocument();
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter', charCode: 13 });
  });

  it('should trigger the link when the card is activated with Space key', () => {
    const { container } = render(<Card {...initialCardProps} href="https://example.com" />);
    const card = container.querySelector(':only-child');
    const link = card?.querySelector('a');
    const clickSpy = jest.spyOn(link, 'click');
    if (card) {
      fireEvent.keyDown(card, { key: ' ', code: 'Space', charCode: 32 });
    }
    expect(clickSpy).toHaveBeenCalled();
  });
  it('should trigger the link when the card is clicked', () => {
    const { container } = render(<Card {...initialCardProps} href="https://example.com" />);
    const card = container.querySelector(':only-child');
    const link = card?.querySelector('a');

    const clickSpy = jest.spyOn(link, 'click');
    fireEvent.click(card);
    expect(clickSpy).toHaveBeenCalled();
  });
  it('renders Card body', () => {
    const { container } = render(<Card {...initialCardProps} />);
    const card = container.querySelector(':only-child');
    const body = card?.querySelector('div.utrecht-card__body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('Card body');
  });
  it('renders Card body with html elements', () => {
    const { container } = render(<Card {...initialCardProps} body={<p>Card body</p>} />);
    const card = container.querySelector(':only-child');
    const body = card?.querySelector('div.utrecht-card__body');
    const paragraph = card?.querySelector('p');
    expect(body).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Card ref={ref} {...initialCardProps} />);
    const card = container.querySelector(':only-child');
    expect(ref.current).toBe(card);
  });
  it('should render an image element with correct src and alt attributes when image prop is provided', () => {
    const { container } = render(
      <Card {...initialCardProps} image={<img src="https://placehold.co/400x400" alt="Card image" />} />,
    );
    const card = container.querySelector(':only-child');
    const image = container.querySelector('img');
    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image?.getAttribute('src')).toBe('https://placehold.co/400x400');
    expect(image?.getAttribute('alt')).toBe('Card image');
  });
  it('renders a heading level 2 by default', () => {
    const { container } = render(<Card {...initialCardProps} />);
    const card = container.querySelector(':only-child');
    const heading2 = card?.querySelector('h2');
    expect(heading2).toBeInTheDocument();
  });
  it('renders a heading with specified level when the headingLevel used', () => {
    const { container } = render(<Card {...initialCardProps} headingLevel={3} />);
    const card = container.querySelector(':only-child');
    const heading3 = card?.querySelector('h3');
    expect(heading3).toBeInTheDocument();
  });
  it('renders a heading with an inline element', () => {
    const { container } = render(<Card {...initialCardProps} heading={<span>Card title</span>} />);
    const card = container.querySelector(':only-child');
    const heading = card?.querySelector('span');
    expect(heading).toBeInTheDocument();
  });

  it('renders heading with correct class and level', () => {
    render(<Card {...initialCardProps} headingLevel={4} />);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toHaveClass('utrecht-heading-4');
    expect(heading).toHaveClass('utrecht-card__header');
  });
  it('renders a link element when the href provided', () => {
    const { container } = render(<Card {...initialCardProps} href="https://example.com" />);
    const card = container.querySelector(':only-child');
    const link = card?.querySelector('a');

    expect(link).toBeInTheDocument();
  });
  it('renders a custom link element when the link.Component provided', () => {
    const { container } = render(<Card {...initialCardProps} href="https://example.com" Link="a" />);
    const card = container.querySelector(':only-child');
    const link = card?.querySelector('a');

    expect(link).toBeInTheDocument();
  });
});
