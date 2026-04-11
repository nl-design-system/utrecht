import { beforeEach, describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { setupScenario1 } from './lib';

describe('document without design tokens', () => {
  beforeEach(() => {
    setupScenario1();
  });

  it('has a 16px font-size', async () => {
    expect(window.getComputedStyle(document.body).fontSize).toBe('16px');
  });
});

describe('document with design tokens', () => {
  beforeEach(() => {
    setupScenario1();
    document.documentElement.style.setProperty('--utrecht-root-font-size', '18px');
  });

  it('has a 16px font-size', async () => {
    expect(window.getComputedStyle(document.documentElement).fontSize).toBe('16px');
  });

  it('has a 16px font-size', async () => {
    expect(window.getComputedStyle(document.body).fontSize).toBe('18px');
  });
});
