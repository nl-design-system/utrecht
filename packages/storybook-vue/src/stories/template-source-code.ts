/**
 * Fills in the args of a story in its Vue template, for the code snippet in the docs.
 * Also used by the Astro documentation website (`packages/astro/scripts/storybook`).
 */
export const templateSourceCode = (
  templateSource: string,
  args: Record<string, unknown>,
  replacing = ' v-bind="$props"',
) => {
  const { textContent, slot, ...restArgs } = args;

  const propToSource = (key: string, val: unknown) => {
    const type = typeof val;
    switch (type) {
      case 'boolean':
        return val ? ` ${key}` : '';
      case 'string':
        return ` ${key}="${val}"`;
      case 'object':
        return ` ${key}='${JSON.stringify(val)}'`;
      default:
        return ` :${key}="${val}"`;
    }
  };

  return templateSource.replace('<slot></slot>', (slot || textContent || '') as string).replace(
    replacing,
    Object.keys(restArgs)
      .map((key) => propToSource(key, args[key]))
      .join(''),
  );
};
