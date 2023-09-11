import { Meta, StoryObj } from '@storybook/react';
import { Textbox } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/textbox/README.md?raw';
import tokensDefinition from '@utrecht/components/textbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Textbox',
  id: 'react-textbox',
  component: Textbox,
  argTypes: {
    autoComplete: {
      description: 'Autocomplete',
      control: 'select',
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      description: 'Invalid. For this component you should use `invalid` instead of `ariaInvalid`.',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    minLength: {
      description: 'Set the minimum length of the input text',
      control: 'number',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      description: 'Set the text of the placeholder',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'Required',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    spellCheck: {
      description: 'Spellcheck',
      control: { type: 'select' },
      options: ['', 'false', 'true'],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    type: {
      description: 'Type',
      control: 'select',
      options: {
        '': null,
        email: 'email',
        number: 'number',
        password: 'number',
        search: 'search',
        tel: 'tel',
        text: 'text',
        url: 'url',
      },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'Set the value of the text box. In React you should use `defaultValue` instead of `value`.',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    defaultValue: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-textbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const DesignTokens = designTokenStory(meta);
