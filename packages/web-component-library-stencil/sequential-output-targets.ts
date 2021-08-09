import type { CompilerCtx, Config, OutputTargetCustom } from '@stencil/core/internal';

export const sequentialOutputTargets: OutputTargetCustom = (a, b) => ({
  type: 'custom',
  name: `${a.name} + ${b.name}`,
  validate(config) {
    return a.validate(config) && b.validate(config);
  },
  async generator(config: Config, compilerCtx: CompilerCtx, buildCtx) {
    await a.generator(config, compilerCtx, buildCtx);
    await b.generator(config, compilerCtx, buildCtx);
  },
});
