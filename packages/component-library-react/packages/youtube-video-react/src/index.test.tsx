/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { YouTubeVideo } from './index';

describe('Embedded YouTube video', () => {
  it('should render a design system BEM class name: utrecht-youtube-video', () => {
    const { container } = render(<YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toHaveClass('utrecht-youtube-video');
  });

  it('must not render any iframe URL, only youtube.com', () => {
    const { container } = render(<YouTubeVideo src="https://example.com/" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeInTheDocument();
  });

  it('must not render an iframe for invalid URLs', () => {
    const { container } = render(<YouTubeVideo src="\uFFFD" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeInTheDocument();
  });

  it('should render the YouTubeVideo component as iframe', () => {
    const { container } = render(<YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
  });

  it('should disable keyboard controls by default (WCAG 2.1.4)', () => {
    const { container } = render(<YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" />);
    const iframe = container.querySelector('iframe');
    expect(iframe?.getAttribute('src')).toContain('disablekb=1');
  });

  it('should set render width and height', () => {
    const { container } = render(
      <YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" height="320" width="480" />,
    );
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('height', '320');
    expect(iframe).toHaveAttribute('width', '480');
  });

  // Unfortunately React doesn't support this
  // Bug report says "Closed" and "fixed", but it still does not work in React 18.3.1
  // https://github.com/facebook/react/issues/21098
  it.skip('should set render the aspect-ratio CSS to support responsive layouts', () => {
    const { container } = render(
      <YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" height="320" width="480" />,
    );
    const iframe = container.querySelector('iframe');
    expect(iframe).toHaveStyle('aspect-ratio: 480 / 320');
  });

  it('should add the YouTube parameters as URL param in the `src` attribute', () => {
    const title = 'Rick Astley | Never Gonna Give You Up (Official Music Video)';
    const params = {
      autoplay: '1',
      cc_lang_pref: 'nl',
      cc_load_policy: '1',
      color: 'red',
      controls: '0',
      disablekb: '1',
      enablejsapi: '1',
      end: '42',
      fs: '0',
      hl: 'fr',
      iv_load_policy: '3',
      list: 'GFq6wH5JR2A',
      listType: 'playlist',
      loop: '1',
      origin: 'https://example.com',
      playlist: 'GFq6wH5JR2A',
      playsinline: '1',
      rel: '0',
      start: '42',
      widget_referrer: 'https://example.com',
    };
    const { container } = render(
      <YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" title={title} {...params} />,
    );
    const iframe = container.querySelector('iframe');

    Object.keys(params).forEach((key) => {
      expect(iframe?.getAttribute('src')).toContain(key);
    });

    Object.keys(params).forEach((key) => {
      expect(iframe).not.toHaveAttribute(key);
    });
  });

  it('should not render a title attribute, to avoid a tooltip', () => {
    const title = 'Rick Astley | Never Gonna Give You Up (Official Music Video)';
    const { container } = render(<YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" title={title} />);
    const iframe = container.querySelector('iframe');
    expect(iframe).not.toHaveAttribute('title');
  });

  it('should render the title in aria-label', () => {
    const title = 'Rick Astley | Never Gonna Give You Up (Official Music Video)';
    const { container } = render(<YouTubeVideo src="https://www.youtube.com/watch?v=GFq6wH5JR2A" title={title} />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toHaveAttribute('aria-label', title);
  });
});
