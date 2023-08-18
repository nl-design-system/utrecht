import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { AlertDialogProps } from '@utrecht/component-library-react/dist/AlertDialog';
import {
  AlertDialog,
  Button,
  ButtonGroup,
  Paragraph,
  PrimaryActionButton,
} from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/alert-dialog/README.md?raw';
import tokensDefinition from '@utrecht/components/alert-dialog/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { createRef, useState } from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Alert dialog',
  id: 'css-alert-dialog',
  component: AlertDialog,
  args: {
    open: true,
    type: 'info',
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
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
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
