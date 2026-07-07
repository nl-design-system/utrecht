import patchConfig from './.ncurc.patch.mjs';

export default {
  ...patchConfig,
  reject: [...patchConfig.reject, 'typescript', '@vue/tsconfig', 'zone.js'],
  target: 'minor',
};
