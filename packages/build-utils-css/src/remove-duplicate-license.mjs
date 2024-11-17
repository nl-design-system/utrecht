import { Comment } from 'postcss';
import { isLicenseComment } from './remove-comments.mjs';

export const mergeLicenseComments = () => {
  return (css) => {
    // Add all licenses to a `Map`, to deduplicate the license declarations.
    const licenses = new Map();
    css.walkComments((node) => {
      if (isLicenseComment(node.text)) {
        node.remove();

        if (!licenses.has(node.text)) {
          licenses.set(
            node.text,
            new Comment({
              text: node.text,
              raws: {
                left: node.raws.left,
                right: node.raws.right,
              },
            }),
          );
        }
      }
    });
    licenses.forEach((license) => {
      css.prepend(license);
    });
  };
};
