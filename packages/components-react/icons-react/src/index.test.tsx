import { render } from '@testing-library/react';
import { createRef } from 'react';
import * as icons from './index';
import '@testing-library/jest-dom';

// Based on the tests for functional icons of the NL Design System documentation:
// https://github.com/nl-design-system/documentatie/blob/main/packages/documentation-components/src/functional-icon/index.jsdom-test.tsx
// Checklist for SVG icons: https://gist.github.com/Robbert/e0acecc7e126d1db27cb1cb6166b19ea
describe('Icons', () => {
  it('exports at least one icon', () => {
    expect(Object.keys(icons).length).toBeGreaterThan(0);
  });

  describe.each(Object.entries(icons))('%s', (name, IconComponent) => {
    const renderSvg = () => render(<IconComponent />).container.querySelector('svg');

    it('has `width="1em"` as default', () => {
      expect(renderSvg()).toHaveAttribute('width', '1em');
    });

    it('has `height="1em"` as default', () => {
      expect(renderSvg()).toHaveAttribute('height', '1em');
    });

    it('has a `viewBox` attribute', () => {
      expect(renderSvg()).toHaveAttribute('viewBox');
    });

    it('uses no SVG `<title>` element', () => {
      expect(renderSvg()?.querySelector('title')).not.toBeInTheDocument();
    });

    it('uses `fill="currentColor"` or `stroke="currentColor"`', () => {
      const coloredElements = renderSvg()?.querySelectorAll('[fill], [stroke]') ?? [];
      coloredElements.forEach((element) => {
        if (element.hasAttribute('fill')) expect(element.getAttribute('fill')).toMatch(/^(currentColor|none)$/i);
        if (element.hasAttribute('stroke')) expect(element.getAttribute('stroke')).toMatch(/^(currentColor|none)$/i);
      });
    });

    it('does not use inline `style` attributes', () => {
      expect(renderSvg()?.querySelector('[style]')).not.toBeInTheDocument();
    });

    it('does not use the SVG attribute `vector-effect`', () => {
      expect(renderSvg()?.querySelector('[vector-effect]')).not.toBeInTheDocument();
    });

    it('is hidden from assistive technology and not focusable by default', () => {
      const svg = renderSvg();
      expect(svg).toHaveAttribute('aria-hidden', 'true');
      expect(svg).toHaveAttribute('focusable', 'false');
    });

    it('has ids that start with the icon id, so icons on the same page do not share an id', () => {
      // `IconAfvalKalender` has ids like `utrecht-icon-afval-kalender-a`: compare without dashes and capitals
      const normalize = (value: string) => value.replaceAll('-', '').toLowerCase();
      const iconId = normalize(`utrecht-icon-${name.replace(/^Icon/, '')}`);
      renderSvg()
        ?.querySelectorAll('[id]')
        .forEach((element) => {
          expect(normalize(element.id).startsWith(iconId)).toBe(true);
        });
    });

    it('accepts props and a ref', () => {
      const ref = createRef<SVGSVGElement>();
      const { container } = render(<IconComponent ref={ref} className="custom-icon" aria-hidden={undefined} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-icon');
      expect(svg).not.toHaveAttribute('aria-hidden');
      expect(ref.current).toBe(svg);
    });
  });
});
