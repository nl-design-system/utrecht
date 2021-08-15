import { dirname, join } from 'path';
import type { CompilerCtx, Config, OutputTargetCustom } from '@stencil/core/internal';

export interface OutputTargetPatchVue {
  proxiesFile: string;
}

export const patchVueOutputTarget = (outputTarget: OutputTargetPatchVue): OutputTargetCustom => ({
  type: 'custom',
  name: 'vue-library-patch',
  validate() {
    return true;
  },
  async generator(config: Config, compilerCtx: CompilerCtx, buildCtx) {
    const timespan = buildCtx.createTimeSpan(`generate Vue.js patch started`, true);

    const utilsFilePath = join(dirname(outputTarget.proxiesFile), './vue-component-lib/utils.ts');
    const utilsFile = compilerCtx.fs.readFileSync(utilsFilePath).toString('utf8');
    const patchedUtilsFile = utilsFile.replace('eventName.toLowerCase()', 'eventName');

    await compilerCtx.fs.writeFile(utilsFilePath, patchedUtilsFile);

    timespan.finish(`generate Vue.js patch finished`);
  },
});
