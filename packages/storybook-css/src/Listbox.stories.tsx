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
  name: 'Listbox with options',
};

export const OptionHover: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        hover: true,
        label: 'Option #2',
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: hover',
  parameters: {
    docs: {
      description: {
        story:
          'The option with `hover` should appear differently from other options, because of a `background-color` and `color`.',
      },
    },
  },
};

export const OptionHoverForcedColors: Story = {
  args: {
    forcedColors: true,
    options: [
      { label: 'Option #1' },
      {
        hover: true,
        label: 'Option #2',
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: hover (forced colors)',
  parameters: {
    docs: {
      description: {
        story:
          'In forced colors mode the option with `hover` should appear differently from options in default state. Because there are limited styling options in forced colors mode, options in `hover` state may appear identical to active and selected options.',
      },
    },
  },
};

export const ActiveOption: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        active: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: active',
};

export const ActiveOptionForcedColors: Story = {
  args: {
    forcedColors: true,
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        active: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: active (forced colors)',
  parameters: {
    docs: {
      description: {
        story:
          'In forced colors mode the option with `active` should appear differently from options in default state. Because there are limited styling options in forced colors mode, options in `active` state may appear identical to hover and selected options.',
      },
    },
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
  name: 'Option: selected',
};

export const SelectedOptionForcedColors: Story = {
  args: {
    forcedColors: true,
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        selected: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: selected (forced colors)',
  parameters: {
    docs: {
      description: {
        story:
          'In forced colors mode the option with `selected` should appear differently from options in default state. Because there are limited styling options in forced colors mode, options in `selected` state may appear identical to `active` and `hover` options.',
      },
    },
  },
};

export const OptionSelectedHover: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        hover: true,
        label: 'Option #2',
        selected: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: selected and hover',
};

export const DisabledOption: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        disabled: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: disabled',
  parameters: {
    docs: {
      description: {
        story: 'A disabled option appearance must signal the option is not interactive.',
      },
    },
  },
};

export const OptionDisabledHover: Story = {
  args: {
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        disabled: true,
        hover: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: disabled + hover',
  parameters: {
    docs: {
      description: {
        story: 'A disabled option must not appear differently in a `hover` state.',
      },
    },
  },
};

export const DisabledOptionForcedColors: Story = {
  args: {
    forcedColors: true,
    options: [
      { label: 'Option #1' },
      {
        label: 'Option #2',
        disabled: true,
      },
      { label: 'Option #3' },
    ],
  },
  name: 'Option: disabled (forced colors)',
  parameters: {
    docs: {
      description: {
        story: 'A disabled option must not appear differently in a `hover` state.',
      },
    },
  },
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
  name: 'Option: disabled and selected',
};

export const DisabledSelectedOptionForcedColors: Story = {
  args: {
    forcedColors: true,
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
  name: 'Option: disabled and selected (forced colors)',
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
  name: 'Option: focus',
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

export const OverflowBlock: Story = {
  args: {
    options: Array(42)
      .fill(0)
      .map((_, index) => ({ label: `Option #${index + 1}` })),
  },
  name: 'Listbox overflowing with options at block-end',
};

export const OverflowInline: Story = {
  args: {
    options: Array(3)
      .fill(0)
      .map((_, index) => ({
        label: `Option #${index + 1} - Ipsa dignissimos quisquam velit at. Ut necessitatibus esse unde et pariatur.`,
      })),
  },
  name: 'Overflowing options at inline-end',
  parameters: {
    docs: {
      description: {
        story:
          'The text of options should be completely visible. Text must not have hidden overflow, and text must not be truncated.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled listbox',
  parameters: {
    docs: {
      description: {
        story: 'The disabled listbox and the listbox options must not have hover effects.',
      },
    },
  },
};

export const DisabledDisabledOptions: Story = {
  args: {
    options: [
      { label: 'Option #1', disabled: true },
      {
        label: 'Option #2',
        disabled: true,
      },
      { label: 'Option #3', disabled: true },
    ],
    disabled: true,
  },
  name: 'Disabled listbox and disabled options',
  parameters: {
    docs: {
      description: {
        story: 'The disabled listbox and the listbox options must not have hover effects.',
      },
    },
  },
};

export const DisabledForcedColors: Story = {
  args: {
    ...Default.args,
    disabled: true,
    forcedColors: true,
  },
  name: 'Disabled listbox (forced colors)',
  parameters: {
    docs: {
      description: {
        story:
          'The disabled listbox must appear different from a regular textbox. The `border-color` of the listbox and `color` or `background-color` of options must signal they are disabled.',
      },
    },
  },
};

export const DisabledFocus: Story = {
  args: {
    ...Default.args,
    disabled: true,
    focus: true,
  },
  name: 'Disabled + focus listbox',
  parameters: {
    docs: {
      description: {
        story:
          'When a focusable disabled listbox received focus, it must appear different from a disabled textbox. The `border-color` of the listbox must signal listbox has focus.',
      },
    },
  },
};

export const DisabledListboxSelectedOption: Story = {
  args: {
    ...SelectedOption.args,
    disabled: true,
  },
  name: 'Disabled listbox with selected option',
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
  name: 'Required listbox',
  parameters: {
    docs: {
      description: {
        story: 'The required listbox should be announced as required by screen readers.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
  name: 'Invalid listbox',
  parameters: {
    docs: {
      description: {
        story: 'The invalid listbox should be announced as invalid by screen readers.',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'A listbox with the `focus` state should not appear differently from a default state.',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story: 'There must be a focus ring around the listbox with `focus-visible` state.',
      },
    },
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
