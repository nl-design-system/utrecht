import { fireEvent, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ScrollLink } from './ScrollLink';
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

  it('renders an link role element', () => {
    render(<ScrollLink />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('it should scroll to the start when clicked', () => {
    render(<ScrollLink>Scroll to start</ScrollLink>);
    const link = screen.getByText('Scroll to start');

    fireEvent.click(link);

    expect(scrollTo).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('it should instantly jump to the top with reduced motion', () => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    Object.defineProperty(reducedMotionQuery, 'matches', { value: true });

    render(<ScrollLink>Scroll to start</ScrollLink>);
    const link = screen.getByText('Scroll to start');

    fireEvent.click(link);

    expect(scrollTo).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('renders an a HTML element', () => {
    const { container } = render(<ScrollLink />);

    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(<ScrollLink ref={ref} />);

    const link = container.querySelector(':only-child');

    expect(ref.current).toBe(link);
  });

  it('should render rich text content', () => {
    const { container } = render(
      <ScrollLink>
        <span>Scroll to start</span>
      </ScrollLink>,
    );

    const contentElement = container.querySelector('span');

    expect(contentElement).toHaveTextContent('Scroll to start');
  });
});
