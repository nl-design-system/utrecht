import { render } from '@testing-library/react';
import { createRef } from 'react';
import { SpotlightSection } from './SpotlightSection';
import '@testing-library/jest-dom';

describe('Spotlight Section', () => {
  it('renders a component', () => {
    const { container } = render(<SpotlightSection />);
    const spotlight = container.querySelector(':only-child');
    expect(spotlight).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-spotlight-section', () => {
    const { container } = render(<SpotlightSection />);
    const spotlight = container.querySelector(':only-child');
    expect(spotlight).toHaveClass('utrecht-spotlight-section');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <SpotlightSection>
        <p>
          <strong>Breaking</strong> news
        </p>
      </SpotlightSection>,
    );
    const spotlight = container.querySelector(':only-child');
    const richText = spotlight?.querySelector('strong');
    expect(spotlight).toHaveTextContent('Breaking news');
    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<SpotlightSection hidden />);
    const spotlight = container.querySelector(':only-child');
    expect(spotlight).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<SpotlightSection className="custom-class" />);
    const spotlight = container.querySelector(':only-child');
    expect(spotlight).toHaveClass('custom-class');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<SpotlightSection ref={ref} />);

    const spotlight = container.querySelector(':only-child');

    expect(ref.current).toBe(spotlight);
  });

  it('renders a section tag by default', () => {
    const { container } = render(<SpotlightSection />);
    const spotlight = container.querySelector(':only-child');
    expect(spotlight?.tagName).toBe('SECTION');
  });

  describe('info variant', () => {
    it('renders a design system BEM modifier class name: utrecht-spotlight-section--info', () => {
      const { container } = render(<SpotlightSection type="info" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-spotlight-section--info');
    });
  });

  describe('warning variant', () => {
    it('renders a design system BEM modifier class name: utrecht-spotlight-section--warning', () => {
      const { container } = render(<SpotlightSection type="warning" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-spotlight-section--warning');
    });
  });

  describe('error variant', () => {
    it('renders a design system BEM modifier class name: utrecht-spotlight-section--error', () => {
      const { container } = render(<SpotlightSection type="error" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-spotlight-section--error');
    });
  });

  describe('ok variant', () => {
    it('renders a design system BEM modifier class name: utrecht-spotlight-section--ok', () => {
      const { container } = render(<SpotlightSection type="ok" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-spotlight-section--ok');
    });
  });

  describe('aside', () => {
    it('renders an aside element', () => {
      const { container } = render(<SpotlightSection aside />);
      const aside = container.querySelector(':only-child');
      expect(aside).toBeInTheDocument();
      if (aside) {
        expect(aside.localName).toBe('aside');
      }
    });
  });
});
