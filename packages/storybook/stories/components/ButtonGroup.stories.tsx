import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/button-group/README.md?raw';
import tokensDefinition from '@utrecht/components/button-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './util';

interface ButtonGroupStoryProps {
  vertical?: boolean;
}

const ButtonGroupStory = ({ vertical, ...props }: PropsWithChildren<ButtonGroupStoryProps>) => (
  <ButtonGroup {...props} className={clsx(vertical && 'utrecht-button-group--vertical')} />
);

const meta = {
  title: 'CSS Component/Button Group',
  id: 'css-button-group',
  component: ButtonGroup,
  args: {
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
  argTypes: {
    vertical: {
      description: 'Set the vertical modifier',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
  },
  render: ButtonGroupStory,
  parameters: {
    tokensPrefix: 'utrecht-button-group',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button-group\` class name.`,
      },
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
} satisfies Meta<typeof ButtonGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-button-group\` class name.
Er moet lege ruimte zijn tussen de buttons, zodat de buttons duidelijk van elkaar te onderscheiden zijn, en het niet één grote button lijkt.`,
      },
    },
  },
};

export const DirectionVertical: Story = {
  args: {
    ...Default.args,
    vertical: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-button-group\` and \`.utrecht-button-group--vertical\` modifier class names.
Er moet lege ruimte zijn tussen de rijen, zodat de buttons duidelijk van elkaar te onderscheiden zijn, en het niet één grote button lijkt.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
