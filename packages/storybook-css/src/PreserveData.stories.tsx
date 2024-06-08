import { Meta, StoryObj } from '@storybook/react';
import { PreserveData } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/preserve-data-css/README.md?raw';
import tokensDefinition from '@utrecht/preserve-data-css/src/tokens.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Preserve data',
  id: 'css-preserve-data',
  component: PreserveData,
  args: {
    children: '',
  },
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
    dateTime: {
      name: 'dateTime',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-preserve-data',
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
} satisfies Meta<typeof PreserveData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ' (06) 249 0420 120',
  },
};

export const RightToLeft: Story = {
  args: {
    children: 'علي,',
  },
  name: 'Right-to-left',
};

export const NoTranslate: Story = {
  args: {
    children: 'Mees de Vos',
    lang: 'nl',
  },
  name: 'Prevent translation',
};

export const Value: Story = {
  args: {
    children: 'zeker tienduizend',
    value: '10000',
  },
};

export const Time: Story = {
  args: {
    children: 'afgelopen nacht',
    dateTime: '2021-01-19T03:14:08Z',
  },
};

export const DesignTokens = designTokenStory(meta);
