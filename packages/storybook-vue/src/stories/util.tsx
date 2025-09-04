import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { ComponentTokensSection } from '@utrecht/documentation/components/ComponentTokensSection.jsx';
import React from 'react';

export const templateSourceCode = (templateSource, args, replacing = ' v-bind="$props"') => {
  const { textContent, slot, ...restArgs } = args;

  const propToSource = (key, val) => {
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

  return templateSource.replace('<slot></slot>', slot || textContent || '').replace(
    replacing,
    Object.keys(restArgs)
      .map((key) => propToSource(key, args[key]))
      .join(''),
  );
};

export const createStory = (meta, story) => {
  const render =
    typeof meta.render === 'function'
      ? (args) => {
          const out = meta.render(args);

          // Override the template with args
          const template = typeof out.template === 'string' ? templateSourceCode(out.template, args) : out.template;
          console.log(template);
          return {
            ...out,
            template,
          };
        }
      : undefined;

  const code = meta.parameters?.docs?.source?.code
    ? templateSourceCode(meta.parameters.docs.source.code, story.args)
    : typeof render === 'function'
    ? render(story.args).template
    : undefined;
  console.log(code);
  return {
    ...story,
    render,
    parameters: {
      ...(story.parameters || {}),
      docs: {
        // description: {
        //   component: "Pluggables are similar to React's Portal, but provide more control over how inserts are rendered",
        // },
        page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
            {meta.parameters?.tokenPrefix && meta.parameters?.tokens ? (
              <ComponentTokensSection
                tokens={tokens}
                definition={meta.parameters?.tokens}
                component={meta.parameters?.tokenPrefix}
              />
            ) : (
              ''
            )}
          </>
        ),
        source: {
          code,
        },
      },
    },
  };
};
