import { Meta, StoryObj } from '@storybook/react';
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
  title: 'React Component/Alert dialog',
  id: 'react-alert-dialog',
  component: AlertDialog,
  tags: ['autodocs'],
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
} as Meta<typeof AlertDialog>;

export default meta;

const Template: StoryObj<typeof AlertDialog> = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  children: [
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>,
    <ButtonGroup>
      <PrimaryActionButton>OK</PrimaryActionButton>
    </ButtonGroup>,
  ],
};

export const Info = Template.bind({});

Info.args = {
  ...Default.args,
  type: 'info',
};

export const OK = Template.bind({});

OK.args = {
  ...Default.args,
  type: 'ok',
};

export const Warning = Template.bind({});

Warning.args = {
  ...Default.args,
  type: 'warning',
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  type: 'error',
};

const ModalTemplate: StoryObj<typeof AlertDialog> = ({
  children,
  icon,
  type,
  buttonLabel,
  buttonAppearance,
  buttonHint,
}) => {
  const alertDialog = createRef();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    if (alertDialog.current) {
      setOpen(true);
      alertDialog.current.showModal();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ButtonGroup>
        <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
          {buttonLabel}
        </Button>
      </ButtonGroup>
      <AlertDialog ref={alertDialog} icon={icon} type={type} onClose={handleClose}>
        {children}
      </AlertDialog>
    </div>
  );
};

export const ShowModal = ModalTemplate.bind({});

ShowModal.args = {
  buttonAppearance: 'secondary-action-button',
  buttonHint: 'danger',
  buttonLabel: 'Stoppen',
  type: 'warning',
  children: (
    <form method="dialog">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <ButtonGroup>
        <PrimaryActionButton type="submit">OK</PrimaryActionButton>
      </ButtonGroup>
    </form>
  ),
};

export const DesignTokens = designTokenStory(meta);
