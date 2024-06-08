import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import readme from '@utrecht/alert-dialog-css/README.md?raw';
import tokensDefinition from '@utrecht/alert-dialog-css/src/tokens.json';
import {
  AlertDialog,
  Button,
  ButtonGroup,
  Heading1,
  Paragraph,
  PrimaryActionButton,
  SecondaryActionButton,
} from '@utrecht/component-library-react';
import type { AlertDialogProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { createRef, useState } from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Alert dialog',
  id: 'css-alert-dialog',
  component: AlertDialog,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>) => (
      <div style={{ minHeight: '250px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    open: true,
    type: 'info',
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
      <form method="dialog">
        <ButtonGroup>
          <PrimaryActionButton type="submit">OK</PrimaryActionButton>
          <SecondaryActionButton type="submit">Annuleren</SecondaryActionButton>
        </ButtonGroup>
      </form>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-alert-dialog',
    status: {
      type: 'WORK IN PROGRESS',
    },
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
    ...Default.args,
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    type: 'error',
  },
};

const ShowModalStory = (props: AlertDialogProps) => {
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
        <Button onClick={showModal} aria-pressed={open} appearance="secondary-action-button" hint="danger">
          Stoppen
        </Button>
      </ButtonGroup>
      <AlertDialog ref={alertDialog} {...props} />
    </div>
  );
};

export const ShowModal = {
  render: ShowModalStory,
  args: {
    ...Default.args,
    open: false,
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
};
export const DesignTokens = designTokenStory(meta);
