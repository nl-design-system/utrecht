export const workaroundsPrinceXML = () => {
  return (css) => {
    css.walk((node) => {
      if (node.type === 'rule') {
        // Rewrite `a:any-link` selector to `a[href]` because Prince XML does not support `:any-link`.
        // Rewriing to `a:link, a:visited` seemed too difficult.
        node.selector = node.selector.replaceAll(':any-link', '[href]');

        // Rewrite pseudo class selectors in a way Prince XML doesn't complain about it
        node.selector = node.selector
          .replaceAll(':focus-visible', '[prince-xml-ignore-pseudo-class-focus-visible]')
          .replaceAll(':placeholder-shown', '[prince-xml-ignore-pseudo-class-placeholder-shown]');

        // Rewrite pseudo element selectors in a way Prince XML doesn't complain about it
        node.selector = node.selector
          .replaceAll('::placeholder', '[prince-xml-ignore-pseudo-element-placeholder]')
          .replaceAll('::backdrop', '[prince-xml-ignore-pseudo-element-backdrop]');
      } else if (
        node.type === 'atrule' &&
        /prefers-contrast|prefers-reduced-motion|prefers-reduced-transparency|forced-colors/.test(node.params)
      ) {
        // Remove `@media` rules that target non-print media
        node.remove();
      } else if (
        node.type === 'decl' &&
        ['print-color-adjust', 'text-decoration-thickness', 'white-space-collapse'].includes(node.prop)
      ) {
        // Remove non-essential CSS declarations that Prince XML 15.4 does not support.
        node.remove();
      }
    });
  };
};
