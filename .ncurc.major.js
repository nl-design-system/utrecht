const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: [...minorConfig.reject, '@mdx-js/react'],
};
