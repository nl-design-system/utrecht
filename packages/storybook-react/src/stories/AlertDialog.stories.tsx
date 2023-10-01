import { Meta, StoryObj } from '@storybook/react';
import type { AlertDialogProps } from '@utrecht/component-library-react/src';
import {
  AlertDialog,
  Button,
  ButtonGroup,
  Paragraph,
  PrimaryActionButton,
} from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/alert-dialog/README.md?raw';
import tokensDefinition from '@utrecht/components/alert-dialog/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { createRef, PropsWithChildren, useState } from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Alert dialog',
  id: 'react-alert-dialog',
  component: AlertDialog,
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
  },
  parameters: {
    tokensPrefix: 'utrecht-alert-dialog',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Info: Story = {
  args: {
    open: true,
    type: 'info',
  },
};

export const OK: Story = {
  args: {
    open: true,
    type: 'ok',
  },
};

export const Warning: Story = {
  args: {
    open: true,
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    open: true,
    type: 'error',
  },
};

interface ShowModalProps extends AlertDialogProps {
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
    const alertDialog = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (alertDialog.current) {
        setOpen(true);
        alertDialog.current.showModal();
      }
    };
    return (
      <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <AlertDialog {...restProps} ref={alertDialog}>
          {children}
        </AlertDialog>
      </div>
    );
  },
  args: {
    buttonLabel: 'Stoppen',
    buttonAppearance: 'secondary-action-button',
    buttonHint: 'danger',
    type: 'warning',
    children: (
      <form method="dialog">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <ButtonGroup>
          <PrimaryActionButton type="submit">OK</PrimaryActionButton>
        </ButtonGroup>
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
