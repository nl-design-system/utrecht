export const Link = ({ external = false, href = null, textContent = '' }) =>
  `<section class="utrecht-html">
  <a href="${href === null ? '#' : href}"${external ? ' rel="external noopener noreferrer"' : ''}>${textContent}</a>
</section>`;

export const AlternateLangLink = ({ textContent, title, current, lang, hreflang }) =>
  `<section class="utrecht-html">
  <a href="https://example.com/${lang}/" ${
    current ? 'aria-current="page"' : ''
  } title="${title}" hreflang="${hreflang}" lang="${lang}"${!current ? 'rel="alternate"' : ''}>${textContent}</a>
</section>`;
