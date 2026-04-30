/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox, ComboboxPopover } from '@utrecht/combobox-react';
import readme from '@utrecht/customizable-text-input-css/README.md?raw';
import clickableDocs from '@utrecht/customizable-text-input-css/_clickable.md?raw';
import describedByDocs from '@utrecht/customizable-text-input-css/_described-by.md?raw';
import sizingClassesDocs from '@utrecht/customizable-text-input-css/_sizing-classes.md?raw';
import anatomyDocs from '@utrecht/customizable-text-input-css/docs/anatomy.nl.md?raw';
import tokensDefinition from '@utrecht/customizable-text-input-css/src/tokens.json';
import { CustomizableTextInput } from '@utrecht/customizable-text-input-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { Textbox } from '@utrecht/textbox-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/CustomizableTextInput',
  id: 'css-customizable-text-input',
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
  },
  args: {
    start: undefined,
    end: <utrecht-icon-search />,
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

export const Invalid: Story = {
  args: {
    children: <Textbox id="textbox-invalid" defaultValue="The quick brown fox jumps over the lazy dog" invalid />,
    inputId: 'textbox-invalid',
  },
};

export const ReadOnly: Story = {
  name: 'Read-only',
  args: {
    children: <Textbox id="textbox-read-only" defaultValue="The quick brown fox jumps over the lazy dog" readOnly />,
    inputId: 'textbox-read-only',
  },
};

export const Disabled: Story = {
  args: {
    children: <Textbox id="textbox-disabled" defaultValue="The quick brown fox jumps over the lazy dog" disabled />,
    inputId: 'textbox-disabled',
  },
};

export const ClickableSlots: Story = {
  name: 'Klikbare slots',
  args: {
    children: <Textbox id="textbox-clickable" defaultValue="The quick brown fox jumps over the lazy dog" />,
    inputId: 'textbox-clickable',
    start: <utrecht-icon-user />,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: clickableDocs,
      },
    },
  },
};

export const SizingClasses: Story = {
  args: {
    start: <utrecht-icon-phone />,
    end: undefined,
    children: (
      <Textbox id="textbox-sizing-classes" className="utrecht-textbox--tel-nl-size" defaultValue="0612345678" />
    ),
    inputId: 'textbox-sizing-classes',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: sizingClassesDocs,
      },
    },
  },
};

export const WithDescription: Story = {
  name: 'Slot als beschrijving',
  args: {
    inputId: 'textbox-with-description',
    end: <span id="textbox-with-description-description">mL per hour</span>,
    start: undefined,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: describedByDocs,
      },
    },
  },
  render: (args) => {
    return (
      <>
        <CustomizableTextInput {...args}>
          <Textbox id={args.inputId} aria-describedby="textbox-with-description-description" />
        </CustomizableTextInput>
      </>
    );
  },
};

export const WithInteractiveElement: Story = {
  // TODO: add description
  name: 'Slot met interactief element',
  args: {
    end: undefined,
    start: <button>Button</button>,
  },
};

export const WithCombobox: Story = {
  name: 'Met combobox',
  args: {
    inputId: 'combobox',
  },
  render: (args) => {
    return (
      <>
        <CustomizableTextInput {...args}>
          <Combobox>
            <Textbox
              className="utrecht-combobox__input"
              id={args.inputId}
              autoComplete="off"
              aria-autocomplete="list"
              aria-haspopup="listbox"
              aria-controls={`${args.inputId}-popover`}
            />
            <ComboboxPopover
              className="utrecht-listbox utrecht-listbox--html-div utrecht-combobox__popover utrecht-combobox__popover--block-end"
              id={`${args.inputId}-popover`}
              role="listbox"
              tabIndex={-1}
            >
              Combobox list
            </ComboboxPopover>
          </Combobox>
        </CustomizableTextInput>
      </>
    );
  },
};

export const DesignTokens = designTokenStory(meta);
