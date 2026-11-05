import { describe, expect, it } from 'vitest';
import { parseStorySource, storyIdFromExport } from './parse.ts';
import { STORYBOOKS } from '../../src/utils/storybook/frameworks.ts';

const storybook = (key: string) => STORYBOOKS.find((s) => s.key === key)!;

describe('parseStorySource', () => {
  it('reads title, id, status, Figma links and the default story', () => {
    const story = parseStorySource(
      'Accordion.stories.tsx',
      `
      import tokensDefinition from '@utrecht/accordion-css/dist/tokens.mjs';
      const meta = {
        title: 'CSS Component/Accordion',
        id: 'css-accordion',
        tags: ['autodocs'],
        parameters: { figma: 'https://figma.com/a', status: { type: 'WORK IN PROGRESS' }, tokensDefinition },
      } satisfies Meta;
      export default meta;
      export const Expanded = {};
      export const Default = {};
      `,
      storybook('css'),
    );
    expect(story).toMatchObject({
      title: 'CSS Component/Accordion',
      name: 'Accordion',
      id: 'css-accordion',
      tags: ['autodocs'],
      parameters: { figma: 'https://figma.com/a' },
      status: 'WORK IN PROGRESS',
      tokensPackage: '@utrecht/accordion-css',
      defaultStory: 'Default',
    });
  });

  it('reads the tokens package from a named import and a property assignment', () => {
    const story = parseStorySource(
      'Textbox.stories.tsx',
      `
      import { default as definition } from '@utrecht/textbox-css/src/tokens.json';
      export default { title: 'CSS Component/Textbox', parameters: { tokensDefinition: definition } };
      export const Default = {};
      `,
      storybook('css'),
    );
    expect(story?.tokensPackage).toBe('@utrecht/textbox-css');
  });

  it('skips a story of another Storybook', () => {
    const source = `export default { title: 'React Component/Button' }; export const Default = {};`;
    expect(parseStorySource('Button.stories.tsx', source, storybook('css'))).toBeUndefined();
  });

  it('uses the first story without a Default, and the code from parameters.docs.source', () => {
    const story = parseStorySource(
      'Link.stories.tsx',
      `
      export default { title: 'Web Component/Link' };
      export const Primary = { parameters: { docs: { source: { code: '<utrecht-link></utrecht-link>' } } } };
      `,
      storybook('web-component'),
    );
    expect(story).toMatchObject({ defaultStory: 'Primary', staticCode: '<utrecht-link></utrecht-link>' });
  });

  it('keeps the Vue template and args for templateSourceCode', () => {
    const story = parseStorySource(
      'Button.stories.ts',
      `
      const meta = {
        title: 'Vue.js Component/Button',
        parameters: { docs: { source: { code: '<UtrechtButton v-bind="$props"><slot></slot></UtrechtButton>' } } },
      };
      export default meta;
      export const Default = createStory(meta, { args: { appearance: 'primary-action-button', textContent: 'Opslaan' } });
      `,
      storybook('vue'),
    );
    expect(story?.vueTemplate).toEqual({
      source: '<UtrechtButton v-bind="$props"><slot></slot></UtrechtButton>',
      args: { appearance: 'primary-action-button', textContent: 'Opslaan' },
    });
  });

  it('reads and dedents an Angular template', () => {
    const story = parseStorySource(
      'Button.stories.ts',
      `
      export default { title: 'Angular Component/Button' };
      export const Default = {
        render: (args) => ({
          props: args,
          template: \`
            <utrecht-button>
              Opslaan
            </utrecht-button>\`,
        }),
      };
      `,
      storybook('angular'),
    );
    expect(story?.staticCode).toBe('<utrecht-button>\n  Opslaan\n</utrecht-button>');
  });
});

describe('storyIdFromExport', () => {
  it.each([
    ['Default', 'default'],
    ['ToggleButton', 'toggle-button'],
    ['HTMLElement', 'html-element'],
  ])('%s becomes %s', (exportName, id) => {
    expect(storyIdFromExport(exportName)).toBe(id);
  });
});
