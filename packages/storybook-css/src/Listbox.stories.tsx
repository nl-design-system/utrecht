/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/listbox-css/README.md?raw';
import tokensDefinition from '@utrecht/listbox-css/src/tokens.json';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import { ListboxStory } from './Listbox';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Listbox',
  id: 'css-listbox',
  component: ListboxStory,
  argTypes: {
    options: {
      description: 'Options',
      type: {
        name: 'array',
        required: true,
      },
    },
  },
  args: {
    disabled: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    multiple: false,
    options: [],
    readOnly: false,
    required: false,
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flistbox',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-listbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ListboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [{ label: 'Option #1' }, { label: 'Option #2' }, { label: 'Option #3' }],
  },
};

export const SelectedOption: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        selected: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Selected option',
};

export const DisabledSelectedOption: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        disabled: true,
        selected: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Disabled and selected option',
};

export const FocusedOption: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        focus: true,
        focusVisible: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Focused option',
  parameters: {
    docs: {
      description: {
        story:
          'Probleem: door `overflow: auto` van de _listbox_ is de focus ring van de _option_ niet helemaal zichtbaar.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Overflow: Story = {
  args: {
    options: Array(42)
      .fill(0)
      .map((_, index) => ({ label: `Option #${index + 1}` })),
  },
  name: 'Overflowing options',
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledListboxSelectedOption: Story = {
  args: {
    ...SelectedOption.args,
    disabled: true,
  },
  name: 'Disabled listbox with selected option',
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
};

export const Icon: Story = {
  args: {
    options: [
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 10D, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 14A, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 16A, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 16B, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 16C, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 20A, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 22A, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 22B, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 22C, 3544NA Utrecht
          </>
        ),
      },
      {
        label: (
          <>
            <UtrechtIconChevronRight /> Utrechtseweg 27A, 3544NA Utrecht
          </>
        ),
      },
    ],
  },
  name: 'Icon in listbox option',
};

export const DesignTokens = designTokenStory(meta);
