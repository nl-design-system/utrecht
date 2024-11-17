/**
 * Remove the `@charset "UTF-8";` declararation.
 * Prince XML does not support such declaration.
 */
export const removeCharset = () => {
  return (css) => {
    css.walkAtRules('charset', (atRule) => {
      atRule.remove();
    });
  };
};
