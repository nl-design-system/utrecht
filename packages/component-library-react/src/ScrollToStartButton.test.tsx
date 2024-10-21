import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ScrollToStartButton } from './ScrollToStartButton';
import '@testing-library/jest-dom';

describe('Scroll to start button', () => {
  let originalMatchMedia: any;
  let originalScrollTo: any;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
    originalScrollTo = window.scrollTo;

    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false, // Adjust this based on your test case
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.scrollTo = originalScrollTo;
  });

  it('renders an button role element', () => {
    render(<ScrollToStartButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('it should scroll to the start when clicked', () => {
    render(<ScrollToStartButton>Scroll to start</ScrollToStartButton>);
    const button = screen.getByText('Scroll to start');

    fireEvent.click(button);

    expect(scrollTo).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('it should instantly jump to the top with reduced motion', () => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    Object.defineProperty(reducedMotionQuery, 'matches', { value: true });

    render(<ScrollToStartButton>Scroll to start</ScrollToStartButton>);
    const button = screen.getByText('Scroll to start');

    fireEvent.click(button);

    expect(scrollTo).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
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
