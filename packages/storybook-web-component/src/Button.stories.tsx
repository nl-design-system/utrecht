/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-css/README.md?raw';
import tokensDefinition from '@utrecht/button-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { UtrechtButton, UtrechtIconBestemmingsplan, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface ButtonStoryProps {
  appearance?: string;
  busy?: boolean;
  disabled?: boolean;
  expanded?: boolean | string;
  label?: string;
  icon?: string;
  pressed?: boolean | string;
  type?: string;
}
const ButtonStory = ({
  appearance,
  busy,
  children,
  disabled,
  form,
  formAction,
  formEnctype,
  formMethod,
  formNoValidate,
  formTarget,
  label,
  icon,
  name,
  popoverTarget,
  popoverTargetAction,
  pressed,
  type,
  value,
  ...restProps
}: PropsWithChildren<ButtonStoryProps>) => {
  const IconElement = icon;

  return (
    <UtrechtButton
      appearance={appearance}
      busy={busy || null}
      disabled={disabled || null}
      form={form || undefined}
      formAction={formAction || undefined}
      formEnctype={formEnctype || undefined}
      formMethod={formMethod || undefined}
      formNoValidate={formNoValidate || undefined}
      formTarget={formTarget || undefined}
      name={name || undefined}
      popoverTarget={popoverTarget || undefined}
      popoverTargetAction={popoverTargetAction || undefined}
      pressed={pressed || undefined}
      type={type || null}
      value={value || undefined}
      {...restProps}
    >
      {IconElement && React.cloneElement(<IconElement />, { slot: 'icon' })}
      {label && <span slot="label">{label}</span>}
      {children}
    </UtrechtButton>
  );
};

const meta = {
  title: 'Web Component/Button',
  id: 'web-component-button',
  component: ButtonStory,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    expanded: {
      description: 'Expanded',
      control: 'select',
      options: {
        '': undefined,
        false: 'false',
        true: 'true',
      },
    },
    label: {
      description: 'Button text in label',
      control: 'text',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    pressed: {
      description: 'Pressed',
      control: 'select',
      options: {
        '': undefined,
        false: 'false',
        true: 'true',
      },
    },
    type: {
      description: 'Type',
      control: 'select',
      options: ['', 'button', 'reset', 'submit'],
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
    formNovalidate: {
      description:
        'Optional. Disable browser form validation, use this button to submit the form regardless of validation state.',
      control: 'boolean',
    },
    formTarget: {
      description: 'Optional. Submit the form to a specific window or frame.',
      control: 'text',
    },
  },
  args: {
    busy: false,
    disabled: false,
    children: '',
    type: '',
    icon: '',
    name: '',
    value: '',
    form: '',
    formaction: '',
    formenctype: '',
    formmethod: '',
    formnovalidate: false,
    popoverTarget: '',
    popoverTargetAction: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the simplest variant, which is closest to the HTML `<button>` element.',
      },
    },
  },
};

export const Submit: Story = {
  args: {
    children: 'Send',
    type: 'submit',
  },
  parameters: {
    docs: {
      description: {
        story: 'The `type="submit"` attribute works the same way you expect from the HTML `<button>` element.',
      },
    },
  },
};

export const Busy: Story = {
  args: {
    busy: true,
    children: 'Send',
    type: 'submit',
  },
};

export const Icon: Story = {
  args: {
    label: 'Read more...',
    icon: 'utrecht-icon-bestemmingsplan',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Do this instead: use the `slot="icon"` attribute on your icon and use the `slot="label"` attribute on your label.',
      },
    },
  },
};

export const DiscouragedIcon: Story = {
  args: {
    children: (
      <>
        <UtrechtIconBestemmingsplan /> Read <strong>more</strong>...
      </>
    ),
  },
  name: 'Discouraged method: no slot for the icon',
  parameters: {
    docs: {
      description: {
        story:
          'Do not do this! When you have an icon, it is better to use the `icon` slot for the label. It works fine when the label only contains plain text. You will have unexpected results when the label contains an element. Between each element a space will be greated because of the `column-gap` design token.',
      },
    },
  },
};

export const ToggleButton: Story = {
  args: {
    children: 'Open menu',
    pressed: false,
  },
};

export const ToggleButtonPressed: Story = {
  args: {
    children: 'Open menu',
    pressed: true,
  },
};

export const ExpandButton: Story = {
  args: {
    children: 'Open section',
    expanded: false,
  },
};

export const CollapseButton: Story = {
  args: {
    children: 'Close section',
    expanded: true,
  },
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
          'Many of the attributes for `<button>` are available for `<utrecht-button>` too: `form`, `formmethod`, `formenctype`, `formnovalidate`.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
