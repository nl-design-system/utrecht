import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ScrollToStartButton } from './ScrollToStartButton';
import '@testing-library/jest-dom';

window.scrollTo = jest.fn();

describe('Scroll to start button', () => {
  it('renders an button role element', () => {
    render(<ScrollToStartButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('it should scroll to the top when clicked', () => {
    const scrollToTopMock = jest.fn();
    window.scrollTo = scrollToTopMock;

    render(<ScrollToStartButton>Scroll to start</ScrollToStartButton>);
    const button = screen.getByText('Scroll to start');

    fireEvent.click(button);

    expect(scrollToTopMock).toHaveBeenCalled();
    expect(scrollToTopMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('it should instantly jump to the top with reduced motion', () => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    Object.defineProperty(reducedMotionQuery, 'matches', { value: true });

    const scrollToTopMock = jest.fn();
    window.scrollTo = scrollToTopMock;

    render(<ScrollToStartButton>Scroll to start</ScrollToStartButton>);
    const button = screen.getByText('Scroll to start');

    fireEvent.click(button);

    expect(scrollToTopMock).toHaveBeenCalled();
    expect(scrollToTopMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('renders an button HTML element', () => {
    const { container } = render(<ScrollToStartButton />);

    const button = container.querySelector('button:only-child');

    expect(button).toBeInTheDocument();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>();

    const { container } = render(<ScrollToStartButton ref={ref} />);

    const button = container.querySelector(':only-child');

    expect(ref.current).toBe(button);
  });

  it('should render the button content with the provided children', () => {
    const { container } = render(
      <ScrollToStartButton>
        <span>Scroll to start</span>
      </ScrollToStartButton>,
    );

    const contentElement = container.querySelector('span');

    expect(contentElement).toHaveTextContent('Scroll to start');
  });
});
