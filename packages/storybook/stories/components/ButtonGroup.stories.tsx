import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Button Group',
  id: 'css-button-group',
  component: ButtonGroup,
  args: {
    innerHTML: `<button class='utrecht-button utrecht-button--primary-action'>Save and continue</button><button class='utrecht-button utrecht-button--secondary-action'>Back</button>`,
  },
  argTypes: {
    innerHTML: {
      name: 'innerHTML',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-button-group',
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
} satisfies Meta<typeof ButtonGroup>;

const ButtonGroupRender = ({ children, div = false, innerHTML = '', direction }) => {
  const classNames = [
    'utrecht-button-group',
    direction === 'horizontal' && 'utrecht-button-group--horizontal',
    direction === 'vertical' && 'utrecht-button-group--vertical',
  ];

  const attributes = {
    className: clsx(classNames),
    role: 'group',
  };

  const content = (
    <>
      {children}
      {parse(innerHTML)}
    </>
  );

  return div ? <div {...attributes}>{content}</div> : <p {...attributes}>{content}</p>;
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => {
    const { children, direction, innerHTML } = args;
    return (
      <ButtonGroupRender direction={direction} innerHTML={innerHTML}>
        {children}
      </ButtonGroupRender>
    );
  },
};

export const DirectionHorizontal: Story = {
  args: {
    ...Default.args,
    children: '',
    innerHTML: `<button class='utrecht-button utrecht-button--primary-action'>Save and continue</button><button class='utrecht-button utrecht-button--secondary-action'>Back</button>`,
    direction: 'horizontal',
  },
  render: (args) => {
    const { children, direction, innerHTML } = args;
    return (
      <ButtonGroupRender direction={direction} innerHTML={innerHTML}>
        {children}
      </ButtonGroupRender>
    );
  },
};

export const DirectionVertical: Story = {
  args: {
    ...Default.args,
    children: '',
    innerHTML: `<button class='utrecht-button utrecht-button--primary-action'>Save and continue</button><button class='utrecht-button utrecht-button--secondary-action'>Back</button>`,
    direction: 'vertical',
  },
  render: (args) => {
    const { children, direction, innerHTML } = args;
    return (
      <ButtonGroupRender direction={direction} innerHTML={innerHTML}>
        {children}
      </ButtonGroupRender>
    );
  },
};

export const DesignTokens = designTokenStory(meta);
