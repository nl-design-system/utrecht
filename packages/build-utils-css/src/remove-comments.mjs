export const isLicenseComment = (str) => /@license/.test(str);

export const removeComments = ({ keepLicense = false }) => {
  return (css) => {
    css.walk((node) => {
      if (node.type === 'comment') {
        if (keepLicense && isLicenseComment(node.text)) {
          return;
        }
        node.remove();
      }
    });
  };
};
