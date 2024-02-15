const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, '@mdx-js/react'],
  target: 'latest',
};
