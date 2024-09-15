/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */
import { isYouTubeURL } from './util';

describe('Detect YouTube URL', () => {
  const youtube = [
    'HTTP://YOUTUBE.COM',
    'http://youtube.com',
    'http://www.youtube.com',
    'http://youtube.com:80',
    'https://youtube.com',
    'https://www.youtube.com',
    'https://youtube.com:443',
    'https://www.youtube.com:8080',
    'https://youtube-nocookie.com/',
  ];
  const notYoutube = [
    'https://example.com',
    'https://youtube',
    'youtube://GFq6wH5JR2A',
    '/www.youtube.com',
    'youtube.com',
  ];

  describe('official YouTube domains', () => {
    youtube.forEach((url) => {
      it(`should accept: ${url}`, () => {
        expect(isYouTubeURL(url)).toBe(true);
      });
    });
  });
  describe('other domains', () => {
    notYoutube.forEach((url) => {
      it(`should reject: ${url}`, () => {
        expect(isYouTubeURL(url)).toBe(false);
      });
    });
  });
});
