import { ArgsTable, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import type { Meta, StoryContext, StoryObj } from '@storybook/vue3';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { ComponentTokensSection } from '@utrecht/documentation/components/ComponentTokensSection.jsx';
import React from 'react';

// `Args` is not exported from `@storybook/addon-docs`, so it is copied here.
interface Args {
  [key: string]: any;
}

export const templateSourceCode = (templateSource: string, args: Args, replacing = ' v-bind="$props"') => {
  const { textContent, slot, ...restArgs } = args;

  const propToSource = (key: string, val: string) => {
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

  let result = templateSource;

  if (slot || textContent) {
    result = result.replace('<slot></slot>', slot || textContent);
    result = result.replace('<slot/>', slot || textContent);
    result = result.replace('<slot />', slot || textContent);
  }

  const namedSlots = Object.keys(restArgs).filter((key) => key.startsWith('slot:'));

  namedSlots.forEach((key) => {
    result = result.replace(`<slot name="${key.slice(5)}"></slot>`, restArgs[key]);
    delete restArgs[key];
  });

  result = result.replace(
    replacing,
    Object.keys(restArgs)
      .map((key) => propToSource(key, args[key]))
      .join(''),
  );

  return result;
};

export const createStory = <T,>(meta: Meta<T>, story: StoryObj): StoryObj => {
  type Parameters = typeof meta.parameters;
  type RenderFn = typeof story.render;

  const _render = story.render || meta.render;

  const render: RenderFn =
    typeof _render === 'function'
      ? (args, context) => {
          const out = _render(args, context);
          // Override the template with args
          const template = typeof out.template === 'string' ? templateSourceCode(out.template, args) : out.template;
          console.log(template);
          return {
            ...out,
            template,
          };
        }
      : undefined;

  const context: StoryContext = {
    ...meta,
    componentId: '',
    id: '',
    kind: '',
    name: '',
    story: '',
    title: '',
    tags: [],
    initialArgs: {},
    parameters: {},
    argTypes: {},
    globals: {},
    args: {},
    hooks: undefined,
    viewMode: 'story',
    originalStoryFn: (() => {}) as any,
    loaded: undefined as any,
    abortSignal: undefined as any,
    canvasElement: undefined as any,
  };
  const docs = meta.parameters ? meta.parameters['docs'] : undefined;
  const code = docs?.source?.code
    ? templateSourceCode(docs.source.code, story.args)
    : typeof render === 'function'
    ? render({ ...story.args }, context).template
    : undefined;

  const metaParameters: Parameters = meta.parameters || {};

  const extendedStory = {
    ...story,
    render,
    parameters: {
      ...(story.parameters || {}),
      docs: {
        page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable />
            <Stories />
            {metaParameters['tokenPrefix'] && metaParameters['tokens'] ? (
              <ComponentTokensSection
                tokens={tokens}
                definition={metaParameters['tokens']}
                component={metaParameters['tokenPrefix']}
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
  return extendedStory;
};

export const handleNamedSlotContents = (inputString: string = '') => {
  const tagRegex = /(<\/?[A-Z][^>]*>|[^<]+)/g;
  const htmlTagRegex = /(<[a-z][^>]*>.*?<\/[a-z]+>)/gs;
  const textRegex = /(?:<\/[\w\d]+>\s*)([^<>\n]*)(?!\s*<[\w\d]+>)/gm;

  const combinedRegex = new RegExp(tagRegex.source + '|' + htmlTagRegex.source + '|' + textRegex.source, 'g');
  const matches = inputString.match(combinedRegex) ?? [];

  const output: any[] = [];

  matches.forEach((match: any, index: number) => {
    if (match.match(/<\/?[A-Z][^>]*>/)) {
      const componentName = match.match(/^<([A-Z][a-zA-Z0-9]*)/) ? match.match(/^<([A-Z][a-zA-Z0-9]*)/)[1] : null;
      const componentContent = matches[index + 1];

      // is custom component
      if (componentName && componentContent) {
        output.push({
          name: componentName,
          content: componentContent,
          isComponent: true,
        });
      }
      // is html content
    } else if (match.match(htmlTagRegex)) {
      output.push({
        content: match.match(htmlTagRegex)[0],
        isComponent: false,
      });
    } else {
      /* 1. check if there is a previous element in the array.
          1.1 if yes, check if it is an opening tag.
            1.1.1 if so, ignore the current item and do not match with it.
            1.1.2 if not, match with the current item.
          1.2. check if the previous element ends on
            1.2.1 a closing tag => match with the current item
            1.2.2 a self-closing tag => match with the current item
          1.3 if there is no previous element, match with the current item
      */

      if (matches[index - 1]) {
        // 1. check if there is a previous element in the array.
        const openingTagRegex = /^<[^/]+?>$/;
        const closingTagRegex = /^.+?<\/\w+>$/;
        const selfClosingTagRegex = /^<.+?(?:\/>|\/\s*>)/;

        if (matches[index - 1].match(openingTagRegex) === null) {
          // 1.1 if yes, check if it is an opening tag.
          // 1.1.1 if so, ignore the current item and do not match with it.
          // 1.1.2 if not, match with the current item.
          output.push({
            content: match,
            isComponent: false,
          });
          return;
        }

        // 1.2.1 previous element ends on a closing tag => match with the current item
        if (matches[index - 1].match(closingTagRegex)) {
          output.push({
            content: match,
            isComponent: false,
          });
          return;
        }

        // 1.2.2 previous element ends on a self-closing tag, match with the current item
        if (matches[index - 1].match(selfClosingTagRegex)) {
          output.push({
            content: match,
            isComponent: false,
          });
        }
      } else {
        // 1.3 if there is no previous element, match with the current item
        output.push({
          content: match,
          isComponent: false,
        });
      }
    }
  });

  return output;
};
