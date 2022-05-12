/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 */

export const Menulijst = ({ href = 'https://example.com/' }) =>
  `<ul class="utrecht-menulijst">
        <li class="utrecht-menulijst__item utrecht-menulijst__item--active">
          <a class="utrecht-menulijst__link" href="${href}">Menu item label #1</a>
        </li>
        <li class="utrecht-menulijst__item">
          <a class="utrecht-menulijst__link" href="${href}">Menu item label #2</a>
        </li>
         <li class="utrecht-menulijst__item">
          <a class="utrecht-menulijst__link" href="${href}">Menu item label #3</a>
        </li>
    </ul>
`;
