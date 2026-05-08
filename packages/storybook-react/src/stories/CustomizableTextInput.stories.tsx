/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/customizable-text-input-css/README.md?raw';
import anatomyDocs from '@utrecht/customizable-text-input-css/docs/anatomy.nl.md?raw';
import tokensDefinition from '@utrecht/customizable-text-input-css/src/tokens.json';
import { CustomizableTextInput } from '@utrecht/customizable-text-input-react';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { Textbox } from '@utrecht/textbox-react';
import { ReactNode } from 'react';
import { designTokenStory } from './util.js';

const TextWrapper = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'block', paddingInline: 'var(--utrecht-space-inline-xs)' }}>{children}</span>
);

const meta = {
  title: 'React Component/CustomizableTextInput',
  id: 'react-customizable-text-input',
  component: CustomizableTextInput,
  argTypes: {
    inputId: {
      description: 'Koppelt start en end aan de text input en zorgt dat deze klikbaar zijn',
      control: 'text',
    },
    children: {
      description: 'Hier plaats je de text input',
    },
    start: {
      description: 'Tekst, element of icoon dat wordt weergegeven aan het begin van de text input',
      control: 'object',
    },
    end: {
      description: 'Tekst, element of icoon dat wordt weergegeven aan het einde van de text input',
      control: 'object',
    },

    labelStart: {
      description: 'Tekst aan het begin van de text input, doet mee aan de label functionaliteit',
      control: 'object',
    },
    labelEnd: {
      description: 'Tekst aan het einde van de text input, doet mee aan de label functionaliteit',
      control: 'object',
    },

    actionStart: {
      description: 'Interactief element aan het begin van de text input, zoals een knop of input',
      control: 'object',
    },
    actionEnd: {
      description: 'Interactief element aan het eind van de text input, zoals een knop of input',
      control: 'object',
    },
  },
  args: {
    start: undefined,
    end: (
      <TextWrapper>
        <utrecht-icon-search />
      </TextWrapper>
    ),
    children: <Textbox id="textbox-default" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcustomizable-text-input',
    // communityFigma:
    //   'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=859-981&t=CiZrkiC5t6Bn59Hg-0',
    // figma:
    //   'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=859-981&t=kJatlKfN59e8T0eA-0',
    // nldesignsystem: 'https://nldesignsystem.nl/customizable-text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-customizable-text-input',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs]),
      },
    },
  },
} satisfies Meta<typeof CustomizableTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
