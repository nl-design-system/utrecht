import type { CompilerCtx, Config, Diagnostic, OutputTargetCustom } from '@stencil/core/internal';

export const sequentialOutputTargets = (a: OutputTargetCustom, b: OutputTargetCustom) => ({
  type: 'custom',
  name: `${a.name} + ${b.name}`,
  validate(config: Config, diagnostic: Diagnostic[]) {
    return (a.validate ? a.validate(config, diagnostic) : true) && (b.validate ? b.validate(config, diagnostic) : true);
  },
  async generator(config: Config, compilerCtx: CompilerCtx, buildCtx: any, docs: any) {
    await a.generator(config, compilerCtx, buildCtx, docs);
    await b.generator(config, compilerCtx, buildCtx, docs);
  },
});
