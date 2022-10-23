/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { ButtonGroup } from '../../button-group/css/story-template';
import { Button } from '../../button/css/story-template';
import { Heading1 } from '../../heading-1/css/story-template';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  children: {
    description: 'HTML content of the alert dialog',
    control: 'text',
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'error', 'info', 'warning'],
  },
};

export const defaultArgs = {
  children: '',
  variant: '',
};

export const exampleArgs = {
  children: (
    <form method="dialog">
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <ButtonGroup>
        <Button appearance="primary-action-button">OK</Button>
        <Button appearance="secondary-action-button">Annuleren</Button>
      </ButtonGroup>
    </form>
  ),
};

export const AlertDialog = ({ children, icon = null, open, type }) => (
  <dialog
    className={clsx('utrecht-alert-dialog', {
      'utrecht-alert-dialog--error': type === 'error',
      'utrecht-alert-dialog--info': type === 'info',
      'utrecht-alert-dialog--ok': type === 'ok',
      'utrecht-alert-dialog--warning': type === 'warning',
    })}
    open={open}
  >
    {icon && <div className="utrecht-alert-dialog__icon">{icon}</div>}
    <div className="utrecht-alert-dialog__message">{children}</div>
  </dialog>
);

export default AlertDialog;
