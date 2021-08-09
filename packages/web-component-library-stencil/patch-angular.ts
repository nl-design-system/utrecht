import type { CompilerCtx, Config, OutputTargetCustom } from '@stencil/core/internal';

export interface OutputTargetPatchAngular {
  componentCorePackage?: string;
  directivesProxyFile: string;
}

const REGEXP_SPECIAL_CHARS = /([!$()*+./?[\]^{|}])/g;
const escapeRegExp = (str) => {
  return str.replace(REGEXP_SPECIAL_CHARS, '\\$1');
};

export const patchAngularOutputTarget = (outputTarget: OutputTargetPatchAngular): OutputTargetCustom => ({
  type: 'custom',
  name: 'angular-library-patch',
  validate() {
    return true;
  },
  async generator(config: Config, compilerCtx: CompilerCtx, buildCtx) {
    const timespan = buildCtx.createTimeSpan(`generate angular patch started`, true);

    const proxyFile = compilerCtx.fs.readFileSync(outputTarget.directivesProxyFile).toString('utf8');

    const pattern = `${escapeRegExp(`${outputTarget.componentCorePackage}/`)}.+${escapeRegExp('/components/')}`;
    const replacement = `${outputTarget.componentCorePackage}/dist/`;

    const patchedProxyFile = proxyFile.replace(new RegExp(pattern, 'g'), replacement);

    await compilerCtx.fs.writeFile(outputTarget.directivesProxyFile, patchedProxyFile);

    timespan.finish(`generate angular patch finished`);
  },
});
