/**
 * Inserts a CSS string into the document's head as a <style> element.
 *
 * @param {string} css - The CSS string to be inserted.
 * @remarks This function only works in a browser environment where `window` is defined.
 */
export const insertStyle = (css: string) => {
  if (typeof window !== 'undefined') {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
};
