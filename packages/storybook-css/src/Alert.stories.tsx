/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonGroup,
  Link,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/alert/README.md?raw';
import alertActions from '@utrecht/components/alert/_alert-actions.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import React, { PropsWithChildren } from 'react';
import { Alert } from './Alert';
import type { AlertProps } from './Alert';
import { Heading2 } from './Heading2';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './design-token-story';
import '@utrecht/components/alert/css/index.scss';

interface AlertStoryProps extends Omit<AlertProps, 'icon'> {
  icon: string;
}

const AlertStory = ({ icon, ...restProps }: PropsWithChildren<AlertStoryProps>) => {
  const IconElement = icon;
  return <Alert {...restProps} icon={icon ? <IconElement></IconElement> : undefined}></Alert>;
};

const meta = {
  title: 'CSS Component/Alert',
  id: 'css-alert',
  component: AlertStory,
  argTypes: {
    children: {
      description: 'HTML content of the alert',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
  },
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    icon: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AlertStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    type: 'info',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const InfoIcon: Story = {
  args: {
    icon: 'utrecht-icon-alleen',
    type: 'info',
  },
  name: 'Info with icon',
  parameters: {
    docs: {
      description: {
        story: 'De gemeente Utrecht gebruikt zelf nog geen icoon bij de alert, het icoon is een voorbeeld.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const OK: Story = {
  args: {
    type: 'ok',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const OKIcon: Story = {
  args: {
    icon: 'utrecht-icon-checkmark',
    type: 'ok',
  },
  name: 'OK with icon',
  parameters: {
    docs: {
      description: {
        story: 'De gemeente Utrecht gebruikt zelf nog geen icoon bij de alert, het icoon is een voorbeeld.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const WarningIcon: Story = {
  args: {
    icon: 'utrecht-icon-melding',
    type: 'warning',
  },
  name: 'Warning with icon',
  parameters: {
    docs: {
      description: {
        story: 'De gemeente Utrecht gebruikt zelf nog geen icoon bij de alert, het icoon is een voorbeeld.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const ErrorIcon: Story = {
  args: {
    icon: 'utrecht-icon-melding',
    type: 'error',
  },
  name: 'Error with icon',
  parameters: {
    docs: {
      description: {
        story: 'De gemeente Utrecht gebruikt zelf nog geen icoon bij de alert, het icoon is een voorbeeld.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const CallToActionLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: `De link-teksten in dit voorbeeld zijn speciaal zo geschreven dat het ook duidelijke instructies zijn wanneer je niet weet dat het links zijn.

Als je de link-teksten goed schrijft dan is de alert ook duidelijk wanneer een _screen reader_ de alert aankondigt.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  args: {
    type: 'error',
    children: (
      <>
        <Heading2>Probleem met ingevulde gegevens</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <Link href="#given-name">Vul je voornaam in.</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="#postal-code">Vul een postcode in, bijvoorbeeld: 1011 AB.</Link>
          </UnorderedListItem>
        </UnorderedList>
      </>
    ),
  },
};

export const ActionsWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: alertActions,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  args: {
    type: 'warning',
    children: (
      <Paragraph>
        De sessie is afgelopen, omdat je 15 minuten niets hebt gedaan. Je kan weer opnieuw beginnen.
      </Paragraph>
    ),
    actions: (
      <ButtonGroup>
        <Button appearance="primary-action-button">Opnieuw beginnen</Button>
      </ButtonGroup>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
