/** Dezelfde uitkomst als `sanitize` in `storybook/internal/csf`: de test vergelijkt ze */
export const sanitize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:",.<>{}[\]\\/]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
