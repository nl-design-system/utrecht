import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util.js';
import readme from '../../../../components/search-bar/README.md?raw';
import tokensDefinition from '../../../../components/search-bar/src/tokens.json';
import { HeaderSearchBar } from '../../../component-library-react/src/index.js';

const meta = {
  title: 'React Component/Header Search Bar',
  id: 'react-header-search-bar',
  component: HeaderSearchBar,
  argTypes: {
    'aria-label': {
      description: 'Label for the search landmark',
      control: 'text',
      table: {
        category: 'ARIA attribute',
        defaultValue: { summary: 'Zoeken op de website' },
      },
    },
    buttonLabel: {
      description: 'Text for the submit button',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: 'Zoek' },
      },
    },
    defaultValue: {
      description: 'Set the value of the search input. In React you should use `defaultValue` instead of `value`.',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    inputLabel: {
      description: 'Accessible name for the search input',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: 'Zoeken' },
      },
    },
    name: {
      description: 'Name',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    required: {
      description: 'Required',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    'aria-label': 'Zoeken op de website',
    buttonLabel: 'Zoek',
    inputLabel: 'Zoeken',
    name: 'q',
    placeholder: '',
    required: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-search-bar',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HeaderSearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Afspraak maken',
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const FocusVisible: Story = {
  name: 'Focus visible',
  args: {
    className: 'utrecht-search-bar--focus-visible',
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Active: Story = {
  args: {
    className: 'utrecht-search-bar--active',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const SmallViewport: Story = {
  name: 'Small viewport',
  args: {
    className: 'utrecht-search-bar--small',
  },
  parameters: {
    viewport: {
      defaultViewport: 'wcagMinimum',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
