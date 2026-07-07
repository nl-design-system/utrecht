/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/checkbox-css/README.md?raw';
import anatomyDocs from '@utrecht/checkbox-css/docs/anatomy.en.md?raw';
import bestPracticesDocs from '@utrecht/checkbox-css/docs/best-practices.en.md?raw';
import contentDocs from '@utrecht/checkbox-css/docs/content.nl.md?raw';
import keyboardDocs from '@utrecht/checkbox-css/docs/keyboard.en.md?raw';
import referencesDocs from '@utrecht/checkbox-css/docs/references.nl.md?raw';
import relatedComponentsDocs from '@utrecht/checkbox-css/docs/related-components.en.md?raw';
import usageDocs from '@utrecht/checkbox-css/docs/usage.nl.md?raw';
import wcagDocs from '@utrecht/checkbox-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/checkbox-css/src/tokens.json';
import { Checkbox } from '@utrecht/component-library-react';
import type { CheckboxProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface CheckboxStoryProps extends CheckboxProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  active?: boolean;
  checkedHover?: boolean;
  checkedActive?: boolean;
  indeterminateHover?: boolean;
  indeterminateActive?: boolean;
}

const CheckboxStory = ({
  active,
  focus,
  focusVisible,
  hover,
  checkedHover,
  checkedActive,
  indeterminateHover,
  indeterminateActive,
  name,
  checked,
  value,
  ...args
}: CheckboxStoryProps) => (
  <Checkbox
    className={clsx({
      'utrecht-checkbox--active': active,
      'utrecht-checkbox--focus': focus,
      'utrecht-checkbox--focus-visible': focusVisible,
      'utrecht-checkbox--hover': hover,
      'utrecht-checkbox--checked': checkedHover || checkedActive,
      'utrecht-checkbox--checked-hover': checkedHover,
      'utrecht-checkbox--checked-active': checkedActive,
      'utrecht-checkbox--indeterminate': indeterminateHover || indeterminateActive,
      'utrecht-checkbox--indeterminate-hover': indeterminateHover,
      'utrecht-checkbox--indeterminate-active': indeterminateActive,
    })}
    defaultChecked={checked}
    defaultValue={value}
    name={name || undefined}
    {...args}
  />
);

const meta = {
  title: 'CSS Component/Checkbox',
  id: 'css-checkbox',
  component: CheckboxStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    hover: false,
    focus: false,
    focusVisible: false,
    checkedHover: false,
    checkedActive: false,
    indeterminateHover: false,
    indeterminateActive: false,
    invalid: false,
    name: '',
  },
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    id: {
      description: 'ID',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    indeterminate: {
      name: 'indeterminate',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      description: 'Name',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
        category: 'HTML attribute',
      },
    },
    value: {
      description: 'Value',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    active: {
      description: 'Active',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    checkedHover: {
      description: 'Checked and hover',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    checkedActive: {
      description: 'Checked and active',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    indeterminateHover: {
      description: 'Indeterminate and hover',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
    indeterminateActive: {
      description: 'Indeterminate and active',
      control: 'boolean',
      table: {
        category: 'Simulate state',
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcheckbox',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=944-1535&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=944-1535&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/checkbox',
    tokensPrefix: 'utrecht-checkbox',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([
          readme,
          anatomyDocs,
          usageDocs,
          relatedComponentsDocs,
          keyboardDocs,
          contentDocs,
          bestPracticesDocs,
          referencesDocs,
          wcagDocs,
        ]),
      },
    },
  },
} satisfies Meta<typeof CheckboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  name: 'Hover',
  args: {
    hover: true,
  },
};

export const Focus: Story = {
  name: 'Focus',
  args: {
    focus: true,
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  args: {
    focus: true,
    focusVisible: true,
  },
};

export const Active: Story = {
  name: 'Active',
  args: {
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `When the component is \`active\`, it always has \`focus\` too. Test these states together for accurate results.`,
      },
    },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const DisabledAndFocussed: Story = {
  name: 'Disabled and Focus',
  args: {
    disabled: true,
    focus: true,
  },
};

export const DisabledAndFocusVisible: Story = {
  name: 'Disabled and Focus-Visible',
  args: {
    disabled: true,
    focus: true,
    focusVisible: true,
  },
};

export const DisabledAndHover: Story = {
  name: 'Disabled and Hover',
  args: {
    disabled: true,
    hover: true,
  },
};

export const DisabledAndActive: Story = {
  name: 'Disabled and Active',
  args: {
    disabled: true,
    active: true,
  },
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    checked: true,
  },
};

export const CheckedAndFocus: Story = {
  name: 'Checked and Focus',
  args: {
    checked: true,
    focus: true,
  },
};

export const CheckedAndFocusVisible: Story = {
  name: 'Checked and Focus-Visible',
  args: {
    checked: true,
    focus: true,
    focusVisible: true,
  },
};

export const CheckedAndHover: Story = {
  name: 'Checked and Hover',
  args: {
    checkedHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered through the `utrecht-checkbox--checked-hover` modifier class so the checked hover state is visible without pointer interaction.',
      },
    },
  },
};

export const CheckedAndActive: Story = {
  name: 'Checked and Active',
  args: {
    checkedActive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered through the `utrecht-checkbox--checked-active` modifier class so the checked active state is visible without pointer interaction.',
      },
    },
  },
};

export const CheckedAndDisabled: Story = {
  name: 'Checked and Disabled',
  args: {
    checked: true,
    disabled: true,
  },
};

export const CheckedDisabledAndHover: Story = {
  name: 'Checked, Disabled and Hover',
  args: {
    checked: true,
    disabled: true,
    hover: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocus: Story = {
  name: 'Checked, Disabled and Focus',
  args: {
    checked: true,
    disabled: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndFocusVisible: Story = {
  name: 'Checked, Disabled and Focus-visible',
  args: {
    checked: true,
    disabled: true,
    focus: true,
    focusVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const CheckedDisabledAndActive: Story = {
  name: 'Checked, Disabled and Active',
  args: {
    checked: true,
    disabled: true,
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Should be identical to "Checked + disabled"`,
      },
    },
  },
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  args: {
    indeterminate: true,
  },
};

export const CheckedAndIndeterminate: Story = {
  name: 'Checked and Indeterminate',
  args: {
    checked: true,
    indeterminate: true,
  },
};

export const CheckedAndIndeterminateAndDisabled: Story = {
  name: 'Checked and Indeterminate and Disabled',
  args: {
    checked: true,
    disabled: true,
    indeterminate: true,
  },
};

export const IndeterminateAndHover: Story = {
  name: 'Indeterminate and Hover',
  args: {
    indeterminateHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered through the `utrecht-checkbox--indeterminate-hover` modifier class so the indeterminate hover state is visible without pointer interaction.',
      },
    },
  },
};

export const IndeterminateAndActive: Story = {
  name: 'Indeterminate and Active',
  args: {
    indeterminateActive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Rendered through the `utrecht-checkbox--indeterminate-active` modifier class so the indeterminate active state is visible without pointer interaction.',
      },
    },
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
};

export const CheckedAndInvalid: Story = {
  name: 'Checked and Invalid',
  args: {
    checked: true,
    invalid: true,
  },
};

export const RequiredAndInvalid: Story = {
  name: 'Required and Invalid',
  args: {
    name: 'example',
    invalid: true,
    required: true,
  },
  decorators: [(Story) => <form>{Story()}</form>],
  parameters: {
    docs: {
      description: {
        story:
          'The native checkbox should have the same position and size as the custom checkbox, so the native error message tooltip aligns with the custom checkbox.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
