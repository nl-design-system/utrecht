import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AlertDialog, Button, ButtonGroup, Paragraph, PrimaryActionButton } from '@utrecht/component-library-react';
import React, { createRef, useState } from 'react';

export default {
  title: 'React Component/Alert dialog',
  id: 'react-alert-dialog',
  component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = ({
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
    console.log('x');
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

export const ShowModal = Template.bind({});

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
