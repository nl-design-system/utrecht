/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const PageContent = ({ asideHTML = null, innerHTML = '', navHTML = null }) => `<div class="utrecht-page-content">
${navHTML ? `  <nav class="utrecht-page-content__nav">${navHTML}</nav>` : ''}
  <main class="utrecht-page-content__main">${innerHTML}</main>
  ${asideHTML ? `<aside class="utrecht-page-content__aside">${asideHTML}</aside>` : ''}
</div>`;
