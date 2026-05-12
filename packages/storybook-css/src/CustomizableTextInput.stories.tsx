/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCalendar } from '@tabler/icons-react';
import { Combobox, ComboboxPopover } from '@utrecht/combobox-react';
import { Button, Icon, ListboxOption } from '@utrecht/component-library-react';
import readme from '@utrecht/customizable-text-input-css/README.md?raw';
import clickableDocs from '@utrecht/customizable-text-input-css/_clickable.md?raw';
import describedByDocs from '@utrecht/customizable-text-input-css/_described-by.md?raw';
import labelDocs from '@utrecht/customizable-text-input-css/_label.md?raw';
import sizingClassesDocs from '@utrecht/customizable-text-input-css/_sizing-classes.md?raw';
import anatomyDocs from '@utrecht/customizable-text-input-css/docs/anatomy.nl.md?raw';
import tokensDefinition from '@utrecht/customizable-text-input-css/src/tokens.json';
import { CustomizableTextInput } from '@utrecht/customizable-text-input-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { Textbox } from '@utrecht/textbox-react';
import { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

const ExampleTextWrapper = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'block', paddingInline: 'var(--utrecht-space-inline-xs)' }}>{children}</span>
);

const meta = {
  title: 'CSS Component/Customizable Text Input',
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
      <ExampleTextWrapper>
        <utrecht-icon-search />
      </ExampleTextWrapper>
    ),
    children: <Textbox id="textbox-default" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcustomizable-text-input',
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

export const SizingClasses: Story = {
  args: {
    start: (
      <ExampleTextWrapper>
        <utrecht-icon-phone />
      </ExampleTextWrapper>
    ),
    end: undefined,
    children: (
      <Textbox id="textbox-sizing-classes" className="utrecht-textbox--tel-nl-size" defaultValue="0612345678" />
    ),
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

export const WithLabelEnd: Story = {
  name: 'Met label',
  args: {
    children: <Textbox id="textbox-label" defaultValue="23400" />,
    inputId: 'textbox-label',
    end: null,
    labelEnd: <ExampleTextWrapper>kWh</ExampleTextWrapper>,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: labelDocs,
      },
    },
  },
};

export const ClickableSlots: Story = {
  name: 'Focus op input field',
  args: {
    children: <Textbox id="textbox-clickable" defaultValue="The quick brown fox jumps over the lazy dog" />,
    inputId: 'textbox-clickable',
    end: <ExampleTextWrapper>kWh</ExampleTextWrapper>,
    start: (
      <ExampleTextWrapper>
        <utrecht-icon-laadpaal />
      </ExampleTextWrapper>
    ),
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

export const WithDescription: Story = {
  name: 'Slot als beschrijving',
  args: {
    inputId: 'textbox-with-description',
    end: <ExampleTextWrapper id="textbox-with-description-description">mL per hour</ExampleTextWrapper>,
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
      <CustomizableTextInput {...args}>
        <Textbox id={args.inputId} aria-describedby="textbox-with-description-description" />
      </CustomizableTextInput>
    );
  },
};

export const WithSubtleButton: Story = {
  name: 'Action slot met subtle button',
  args: {
    end: undefined,
    actionEnd: (
      <Button appearance="subtle-button" aria-haspopup="dialog" aria-label="Open/sluit kalender">
        <Icon>
          <IconCalendar />
        </Icon>
      </Button>
    ),
  },
};

export const WithCombobox: Story = {
  name: 'Met combobox',
  args: {
    inputId: 'combobox',
    start: (
      <ExampleTextWrapper>
        <utrecht-icon-search />
      </ExampleTextWrapper>
    ),
    end: null,
  },
  render: (args) => {
    return (
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
            <ListboxOption>Option 1</ListboxOption>
            <ListboxOption>Option 2</ListboxOption>
          </ComboboxPopover>
        </Combobox>
      </CustomizableTextInput>
    );
  },
};

export const DesignTokens = designTokenStory(meta);
