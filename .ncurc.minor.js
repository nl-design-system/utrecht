const patchConfig = require('./.ncurc.patch');

module.exports = {
  reject: [...patchConfig.reject, 'typescript', '@vue/tsconfig', 'zone.js'],
};
