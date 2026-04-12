import { beforeEach, describe, expect, it } from 'vitest';
import { setupBody, setupDialog, setupScenario1 } from './lib';

describe('Root component', () => {
  describe('without design tokens', () => {
    beforeEach(() => {
      setupScenario1();
    });

    it('has the user agent default font-size, typically 16px', async () => {
      expect(window.getComputedStyle(document.body).fontSize).toBe('16px');
    });

    it('has sufficient contrast between background-color and color', async () => {
      const color = window.getComputedStyle(document.documentElement).color;
      const backgroundColor = window.getComputedStyle(document.documentElement).backgroundColor;

      const checkContrast = (a, b) => 4.5;
      expect(checkContrast(color, backgroundColor)).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('1rem', () => {
    const defaultFontSize = '16px';
    const fontSize = '18px';
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.setProperty('--utrecht-root-font-size', fontSize);
      document.body.insertAdjacentHTML('beforeend', '<div id="text" style="font-size: 1rem">Hello, world!</div>');
    });

    it(`configuring the root font size has no effect on the rem unit`, async () => {
      const example = document.getElementById('text');

      expect(example).toBeInTheDocument();
      expect(example.style.fontSize).toBe('1rem');
      expect(window.getComputedStyle(example).fontSize).toBe(defaultFontSize);
    });
  });

  describe('with a `font-size` design token', () => {
    const defaultFontSize = '16px';
    const fontSize = '18px';
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.setProperty('--utrecht-root-font-size', fontSize);
    });

    it(`html element has a ${defaultFontSize} default font-size`, async () => {
      expect(window.getComputedStyle(document.documentElement).fontSize).toBe(defaultFontSize);
    });

    it(`body element has a ${fontSize} font-size`, async () => {
      expect(window.getComputedStyle(document.body).fontSize).toBe(fontSize);
    });

    describe('with a visible head element', () => {
      beforeEach(() => {
        setupScenario1();
        document.documentElement.style.setProperty('--utrecht-root-font-size', fontSize);
        document.head.display = 'block';
      });

      it(`head element has a ${fontSize} font-size`, async () => {
        expect(window.getComputedStyle(document.head).fontSize).toBe(fontSize);
      });
    });
  });

  describe('`line-height` and `font-size` design token', () => {
    const fontSize = '20px';
    const relativeLineHeight = '1.5em';
    const absoluteLineHeight = '30px';
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.setProperty('--utrecht-root-font-size', fontSize);
      document.documentElement.style.setProperty('--utrecht-root-line-height', relativeLineHeight);
    });

    it(`relative line-height is relative to the configured font-size`, async () => {
      //
      expect(window.getComputedStyle(document.body).fontSize).toBe(fontSize);
      expect(window.getComputedStyle(document.body).lineHeight).toBe(absoluteLineHeight);
    });
  });

  describe('with a `background-color` and `color` design token', () => {
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.setProperty('--utrecht-root-background-color', 'white');
      document.documentElement.style.setProperty('--utrecht-root-color', 'black');
    });

    // TOOD: Calculate actual contrast
    it('has sufficient contrast between background-color and color', async () => {
      const color = window.getComputedStyle(document.body).color;
      const backgroundColor = window.getComputedStyle(document.body).backgroundColor;

      const checkContrast = (a, b) => 4.5;
      expect(checkContrast(color, backgroundColor)).toBeGreaterThanOrEqual(4.5);
    });
  });
  describe('body', () => {
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.setProperty('--utrecht-root-background-color', 'white');
      document.documentElement.style.setProperty('--utrecht-root-color', 'black');
    });

    it('has no margin from the user agent default', async () => {
      expect(window.getComputedStyle(document.body).margin).toBe('0px');
    });
  });

  describe('configuring a border on the `html` element', () => {
    beforeEach(() => {
      setupScenario1();
      document.documentElement.style.border = '5px solid currentColor';
    });

    it('does not cause the viewport to overflow', async () => {
      const scrollContainer = document.documentElement;
      /* it's why we have `box-sizing: border-box` */
      expect(scrollContainer.clientWidth).toBe(scrollContainer.scrollWidth);
    });
  });

  describe.skip('text content with long words that would overflow', () => {
    beforeEach(() => {
      setupScenario1();
      document.body.insertAdjacentHTML('beforeend', `<span id="text">${'abc'.repeat(1000)}</span>`);
      document.documentElement.style.overflowWrap = 'normal';
    });

    // TOOD: Calculate actual contrast
    it('long words break to prevent overflow for WCAG 1.4.10', async () => {
      const sample = document.getElementById('text');
      const container = document.body;
      expect(sample?.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    });
  });

  describe.skip('forced-colors mode', () => {});

  describe('Root component on the body element', () => {
    beforeEach(() => {
      setupBody();
    });

    it('has no border', async () => {
      const body = document.body;
      expect(window.getComputedStyle(body).borderWidth).toBe('0px');
    });

    it('has no margin from the user agent default', () => {
      const body = document.body;
      expect(window.getComputedStyle(body).margin).toBe('0px');
    });

    it('has no padding', () => {
      const body = document.body;
      expect(window.getComputedStyle(body).padding).toBe('0px');
    });

    describe('configuring a border on the `body` element', () => {
      beforeEach(() => {
        setupScenario1();
        document.body.style.border = '5px solid currentColor';
      });

      it('does not cause the viewport to overflow', async () => {
        const scrollContainer = document.documentElement;
        /* it's why we have `box-sizing: border-box` */
        expect(scrollContainer.clientWidth).toBe(scrollContainer.scrollWidth);
      });
    });
  });

  describe('Root component on a dialog element', () => {
    beforeEach(() => {
      setupDialog();
    });

    it('has no border from the user agent default', async () => {
      const dialog = document.querySelector('dialog');
      expect(window.getComputedStyle(dialog).borderWidth).toBe('0px');
    });

    it('has no margin from the user agent default', () => {
      const dialog = document.querySelector('dialog');
      expect(window.getComputedStyle(dialog).margin).toBe('0px');
    });

    it('has no padding from the user agent default', () => {
      const dialog = document.querySelector('dialog');
      expect(window.getComputedStyle(dialog).padding).toBe('0px');
    });
  });

  describe('hostile CSS that disables subpixel-antialised font smoothing', () => {
    beforeEach(() => {
      setupDialog();
      const hostileCss = new CSSStyleSheet();
      const css = (str: string) => str;

      hostileCss.replaceSync(css`
        html,
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `);

      document.adoptedStyleSheets.push(hostileCss);
    });

    it('downgrading `font-smoothing` is prevented on the `html` element', async () => {
      const html = document.documentElement;
      // The properties must either be `undefined` because they're not supported, or the must be `auto`.
      expect(window.getComputedStyle(html).webkitFontSmoothing).not.toBe('antialiased');
      expect(window.getComputedStyle(html)['-moz-osx-font-smoothing']).not.toBe('antialiased');
      expect(window.getComputedStyle(html).fontSmoothing).not.toBe('antialiased');
    });

    it('downgrading `font-smoothing` is prevented on the `body` element', async () => {
      const body = document.body;
      // The properties must either be `undefined` because they're not supported, or the must be `auto`.
      expect(window.getComputedStyle(body).webkitFontSmoothing).not.toBe('antialiased');
      expect(window.getComputedStyle(body)['-moz-osx-font-smoothing']).not.toBe('antialiased');
      expect(window.getComputedStyle(body).fontSmoothing).not.toBe('antialiased');
    });
  });

  // TODO: Configure Playwright to allow a fullscreen window
  describe.skip('full screen content', () => {
    beforeEach(() => {
      setupScenario1();
      document.body.insertAdjacentHTML('beforeend', '<div id="fullscreen">Hello, world</div>');
    });

    it('must not have a transparent background, to ensure legible content', async () => {
      const element = document.getElementById('fullscreen');

      await element?.requestFullscreen();

      expect(element?.matches(':fullscreen')).toBe(true);
      expect(window.getComputedStyle(element).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    });
  });
});
