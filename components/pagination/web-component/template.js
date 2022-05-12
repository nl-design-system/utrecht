const attr = (name, value) => `${name}="${String(value).replace(/"/g, '&quot;')}"`;

export const Pagination = ({ currentIndex = -1, links = [], next = null, prev = null }) =>
  `<utrecht-pagination ${attr('links', JSON.stringify(links))} ${attr('next', JSON.stringify(next))} ${attr(
    'prev',
    JSON.stringify(prev),
  )} ${attr('current-index', currentIndex)}></utrecht-pagination>`;
