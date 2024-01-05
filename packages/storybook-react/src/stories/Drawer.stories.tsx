import { Meta, StoryObj } from '@storybook/react';
import type { DrawerProps } from '@utrecht/component-library-react';
import {
  Button,
  ButtonGroup,
  Drawer,
  Paragraph,
  PrimaryActionButton,
} from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/drawer/README.md?raw';
import tokensDefinition from '@utrecht/components/drawer/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { createRef, PropsWithChildren, useState } from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Drawer',
  id: 'react-drawer',
  component: Drawer,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '256px',
          position: 'relative',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  args: {
    children: '',
    hidden: false,
    open: false,
    modal: false,
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['', 'block-end', 'block-start', 'inline-end', 'inline-start'],
    },
    children: {
      description: 'Content of the drawer',
    },
    hidden: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-drawer',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: [
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
      <ButtonGroup>
        <PrimaryActionButton>OK</PrimaryActionButton>
      </ButtonGroup>,
    ],
    open: true,
  },
};

export const InlineStart: Story = {
  args: {
    ...Default.args,
    align: 'inline-start',
  },
  name: 'inline-start alignment',
};

export const InlineEnd: Story = {
  args: {
    ...Default.args,
    align: 'inline-end',
  },
  name: 'inline-end alignment',
};

export const BlockStart: Story = {
  args: {
    ...Default.args,
    align: 'block-start',
  },
  name: 'block-start alignment',
};

export const BlockEnd: Story = {
  args: {
    ...Default.args,
    align: 'block-end',
  },
  name: 'block-end alignment',
};

interface ShowModalProps extends DrawerProps {
  buttonLabel: string;
  buttonAppearance?: 'primary-action-button' | 'secondary-action-button' | 'subtle-button';
  buttonHint?: string;
}

export const ShowModal = {
  render: ({
    buttonLabel,
    buttonAppearance,
    buttonHint,
    children,
    ...restProps
  }: PropsWithChildren<ShowModalProps>) => {
    const drawer = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (drawer.current) {
        setOpen(true);
        drawer.current.showModal();
      }
    };
    return (
      <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <Drawer {...restProps} ref={drawer}>
          {children}
        </Drawer>
      </div>
    );
  },
  args: {
    buttonLabel: 'Open menu',
    buttonAppearance: 'subtle-button',
    children: (
      <form method="dialog">
        <ButtonGroup>
          <Button apperance="subtle-button" type="submit">
            Sluiten
          </Button>
        </ButtonGroup>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </form>
    ),
  },
  argTypes: {
    buttonLabel: {
      type: 'text',
    },
    buttonAppearance: {
      type: 'select',
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    buttonHint: {
      type: 'select',
      options: [undefined, 'warning', 'danger'],
    },
    type: {
      type: 'select',
      options: ['info', 'ok', 'warning', 'error'],
    },
  },
};

export const DesignTokens = designTokenStory(meta);
