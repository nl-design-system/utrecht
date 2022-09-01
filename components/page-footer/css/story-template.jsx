/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = { innerHTML: '' };

export const exampleArgs = {
  innerHTML: `<address class="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
    <h2 class="utrecht-heading-2 utrecht-heading-2--reset-h2">Gemeente Utrecht</h2>
    <section>
      <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Telefoon</h3>
      <p class="utrecht-paragraph utrecht-paragraph--distanced">
        <a href="tel:+31302860000" class="utrecht-link utrecht-link--telephone">14 030</a>
      </p>
    </section>
    <section>
      <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Adres</h3>
      <p class="utrecht-paragraph utrecht-paragraph--distanced">
        <strong>Stadskantoor</strong><br>
        Stadsplateau 1<br>
        3521AZ
      </p>
    </section>
  </address>
  <div class="utrecht-page-footer__navigation">
    <ul class="utrecht-link-list utrecht-link-list--chevron">
      <li class="utrecht-link-list__item">
        <a href="/contact/" class="utrecht-link">Meer contactinformatie</a>
      </li>
      <li class="utrecht-link-list__item">
        <a href="/over-deze-website" class="utrecht-link">Over deze website</a>
      </li>
    </ul>
  </div>`,
};

export const PageFooter = ({ innerHTML = defaultArgs.innerHTML }) => (
  <footer className="utrecht-page-footer">{parse(innerHTML)}</footer>
);

export default PageFooter;
