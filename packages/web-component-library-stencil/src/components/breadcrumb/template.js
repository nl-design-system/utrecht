export const Breadcrumb = ({ items, variant }) => {
  const jsonAttribute = (arg) => JSON.stringify(arg).replace(/"/g, '&quot;');
  return `<utrecht-breadcrumb-nav json="${jsonAttribute(items)}" variant="${variant}"></utrecht-breadcrumb-nav>`;
};
