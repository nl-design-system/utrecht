import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Note } from './index';
import '@testing-library/jest-dom';

describe('Note', () => {
  it('renders a component', () => {
    const { container } = render(<Note />);
    const note = container.querySelector(':only-child');
    expect(note).toBeInTheDocument();
  });

  it('renders a note role element', async () => {
    const { container } = render(<Note />);

    const note = screen.getByRole('note');

    expect(note).toBeInTheDocument();
    expect(note).toBeVisible();
  });

  it('renders a design system BEM class name: utrecht-note', () => {
    const { container } = render(<Note />);
    const note = container.querySelector(':only-child');
    expect(note).toHaveClass('utrecht-note');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Note>
        <p>
          <strong>Breaking</strong> news
        </p>
      </Note>,
    );
    const note = container.querySelector(':only-child');
    const richText = note?.querySelector('strong');
    expect(note).toHaveTextContent('Breaking news');
    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Note hidden />);
    const note = container.querySelector(':only-child');
    expect(note).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Note className="custom-class" />);
    const note = container.querySelector(':only-child');
    expect(note).toHaveClass('custom-class');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Note ref={ref} />);

    const note = container.querySelector(':only-child');

    expect(ref.current).toBe(note);
  });

  it('renders a section tag by default', () => {
    const { container } = render(<Note />);
    const note = container.querySelector(':only-child');
    expect(note?.tagName).toBe('SECTION');
  });

  describe('info variant', () => {
    it('renders a design system BEM modifier class name: utrecht-note--info', () => {
      const { container } = render(<Note purpose="info" />);
      const note = container.querySelector(':only-child');
      expect(note).toHaveClass('utrecht-note--info');
    });
  });

  describe('warning variant', () => {
    it('renders a design system BEM modifier class name: utrecht-note--warning', () => {
      const { container } = render(<Note purpose="warning" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-note--warning');
    });
  });

  describe('error variant', () => {
    it('renders a design system BEM modifier class name: utrecht-note--error', () => {
      const { container } = render(<Note purpose="error" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-note--error');
    });
  });

  describe('ok variant', () => {
    it('renders a design system BEM modifier class name: utrecht-note--ok', () => {
      const { container } = render(<Note purpose="ok" />);
      const spotlight = container.querySelector(':only-child');
      expect(spotlight).toHaveClass('utrecht-note--ok');
    });
  });

  describe('aside', () => {
    it('renders an aside element', () => {
      const { container } = render(<Note aside />);
      const aside = container.querySelector(':only-child');
      expect(aside).toBeInTheDocument();
      if (aside) {
        expect(aside.localName).toBe('aside');
      }
    });

    it('renders a complementary role element', async () => {
      const { container } = render(<Note />);

      const note = screen.getByRole('complementary');

      expect(note).toBeInTheDocument();
      expect(note).toBeVisible();
    });
  });
});
