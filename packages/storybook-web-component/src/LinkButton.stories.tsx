/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link/README.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtLinkButton, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface LinkButtonStoryProps {
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEnctype?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  inline?: boolean;
  name?: string;
  popoverTarget?: string;
  popoverTargetAction?: string;
  pressed?: boolean;
  type?: string;
  value?: number | string;
}

const LinkButtonStory = ({
  children,
  disabled,
  form,
  formAction,
  formEnctype,
  formMethod,
  formNoValidate,
  formTarget,
  inline,
  name,
  popoverTarget,
  popoverTargetAction,
  pressed,
  type,
  value,
}: PropsWithChildren<LinkButtonStoryProps>) => (
  <UtrechtLinkButton
    disabled={disabled || undefined}
    form={form || undefined}
    formAction={formAction || undefined}
    formEnctype={formEnctype || undefined}
    formMethod={formMethod || undefined}
    formNoValidate={formNoValidate || undefined}
    formTarget={formTarget || undefined}
    inline={inline || undefined}
    name={name || undefined}
    popoverTarget={popoverTarget || undefined}
    popoverTargetAction={popoverTargetAction || undefined}
    pressed={pressed || undefined}
    type={type || undefined}
    value={value ? String(value) : undefined}
  >
    {children}
  </UtrechtLinkButton>
);

const meta = {
  title: 'Web Component/Link button',
  id: 'web-component-link-button',
  component: LinkButtonStory,
  argTypes: {
    children: {
      description: 'Button text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    inline: {
      description: 'Inline',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed',
      control: 'boolean',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    name: {
      description: 'Optional. Name to submit a value as form data.',
      control: 'text',
    },
    value: {
      description: 'Optional. Value to submit as form data.',
      control: 'text',
    },
    form: {
      description: 'Optional. ID of associated form, when the button is not inside that <form> element.',
      control: 'text',
    },
    formAction: {
      description: 'Optional. Submit the form to another URL than the `action` of the associated <form> element.',
      control: 'text',
    },
    formEnctype: {
      description:
        'Optional. "application/x-www-form-urlencoded" is default. You should probably use "multipart/form-data" when the form contains a file upload form field.',
      control: 'select',
      options: ['', 'application/x-www-form-urlencoded', 'multipart/form-data'],
    },
    formMethod: {
      description:
        'Optional. Any standard HTTP method, or any custom method. Overrides the method of the associated <form> element.',
      control: 'select',
      options: ['', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    },
    formNoValidate: {
      description:
        'Optional. Disable browser form validation, use this button to submit the form regardless of validation state.',
      control: 'boolean',
    },
    formTarget: {
      description: 'Optional. Submit the form to a specific window or frame.',
      control: 'text',
    },
    popoverTarget: {
      description: 'Optional.',
      control: 'text',
    },
    popoverTargetAction: {
      description: 'Optional.',
      control: 'text',
    },
  },
  args: {
    disabled: false,
    inline: false,
    pressed: false,
    children: '',
    type: '',
    name: '',
    value: '',
    form: '',
    formAction: '',
    formEnctype: '',
    formMethod: '',
    formNoValidate: false,
    popoverTarget: '',
    popoverTargetAction: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LinkButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Premium feature (locked)',
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    children: '← Previous',
    type: 'submit',
  },
};

export const Pressed: Story = {
  args: {
    children: 'Edit',
    pressed: true,
  },
};

export const Inline: Story = {
  args: {
    children: 'approve this PR yourself',
    inline: true,
  },
  decorators: [(Story) => <UtrechtParagraph>You can {Story()}, if you need to.</UtrechtParagraph>],
};

export const FormAttributes: Story = {
  args: {
    children: 'Use all form attributes at once!',
    form: 'id-of-form',
    formMethod: 'PATCH',
    formEnctype: 'multipart/form-data',
    formNoValidate: true,
    formTarget: '_blank',
  },
  decorators: [(Story) => <UtrechtParagraph>You can {Story()}, if you need to.</UtrechtParagraph>],
  parameters: {
    // These attributes have no visible effects
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Many of the attributes for `<button>` are available for `<utrecht-link-button>` too: `form`, `formmethod`, `formenctype`, `formnovalidate`.',
      },
    },
  },
};

/*
export const Popover: Story = {
  args: {
    children: 'Toggle popover',
    popoverTarget: 'c941f39b-bc1d-4739-ab20-ca7a1a8e9817',
  },
  decorators: [
    (Story) => (
      <div>
        {Story()}
        <div id="c941f39b-bc1d-4739-ab20-ca7a1a8e9817" popover>
          <UtrechtParagraph>Hello, world!</UtrechtParagraph>
        </div>
      </div>
    ),
  ],
    parameters: {
    // These attributes have no visible effects
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Attributes for popovers that you would use for the `<button>` element, are available for `<utrecht-link-button>` too: `popover` and `popovertarget`.',
      },
    },
  },

};

export const HidePopover: Story = {
  args: {
    children: 'Close popover',
    popoverTarget: '58e18934-6ca0-4a06-a067-c4ef3051a83f',
    popoverTargetAction: 'hide',
  },
  decorators: [
    (Story) => (
      <div>
        {Story()}
        <div id="58e18934-6ca0-4a06-a067-c4ef3051a83f" popover>
          <UtrechtParagraph>Hello, world!</UtrechtParagraph>
        </div>
      </div>
    ),
  ],
};
*/
export const DesignTokens = designTokenStory(meta);
