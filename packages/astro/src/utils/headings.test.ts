import { describe, expect, it } from 'vitest';
import { collectHeadings } from './headings.ts';

describe('collectHeadings', () => {
  it('keeps existing ids', () => {
    const html = '<h2 id="voorbeeld">Voorbeeld</h2><p>Tekst</p>';
    expect(collectHeadings(html)).toEqual({ html, headings: [{ id: 'voorbeeld', text: 'Voorbeeld' }] });
  });

  it('gives a heading without an id the same id as Astro would', () => {
    const { html, headings } = collectHeadings('<h2 class="nl-heading">Mis je een functionaliteit?</h2>');
    expect(headings).toEqual([{ id: 'mis-je-een-functionaliteit', text: 'Mis je een functionaliteit?' }]);
    expect(html).toBe('<h2 id="mis-je-een-functionaliteit" class="nl-heading">Mis je een functionaliteit?</h2>');
  });

  it('does not reuse an id that is already on the page', () => {
    const { headings } = collectHeadings('<div id="feedback"></div><h2>Feedback</h2><h2>Feedback</h2>');
    expect(headings.map(({ id }) => id)).toEqual(['feedback-1', 'feedback-2']);
  });

  it('skips headings in an ignored part, such as an example', () => {
    const { headings } = collectHeadings(
      '<div data-on-this-page="ignore"><div><h2>In het voorbeeld</h2></div></div><h2 id="a">Anatomie</h2>',
    );
    expect(headings).toEqual([{ id: 'a', text: 'Anatomie' }]);
  });

  it('reads text with entities and inline elements', () => {
    const { headings } = collectHeadings('<h2 id="x">Tom &amp; <code>Jerry</code></h2>');
    expect(headings).toEqual([{ id: 'x', text: 'Tom & Jerry' }]);
  });

  it('changes nothing else in the HTML', () => {
    const html = '<astro-island props="{&quot;a&quot;:1}"></astro-island><svg viewBox="0 0 1 1"></svg><h2>Kop</h2>';
    expect(collectHeadings(html).html).toBe(html.replace('<h2>', '<h2 id="kop">'));
  });
});
