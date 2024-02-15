const patchConfig = require('./.ncurc.patch');

module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject, 'typescript', '@vue/tsconfig', 'zone.js'],
  target: 'minor',
};
