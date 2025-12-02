import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/rich-text-css/README.md?raw';
import tokensDefinition from '@utrecht/rich-text-css/src/tokens.json';
import { StoryTemplate } from './RichText.utils';
import { designTokenStory } from '../design-token-story';

const meta = {
  title: 'CSS Component/Rich Text',
  id: 'css-rich-text',
  component: StoryTemplate,
  args: {},
  parameters: {
    // cannot be tested using visual regression testing (exceeds 25,000,000px), ignore this story
    chromatic: { disableSnapshot: true },
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Frich-text',
    tokensPrefix: 'utrecht-rich-text',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof StoryTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DesignTokens = designTokenStory(meta);

export const Accordion: Story = {
  args: {
    component: 'utrecht-accordion',
  },
};
export const ActionGroupo: Story = {
  args: {
    component: 'utrecht-action-group',
  },
};
export const Alert: Story = {
  args: {
    component: 'utrecht-alert',
  },
};
export const BadgeList: Story = {
  args: {
    component: 'utrecht-badge-list',
  },
};
export const StatusBadge: Story = {
  args: {
    component: 'utrecht-badge-status',
  },
};
export const Blockquote: Story = {
  args: {
    component: 'utrecht-blockquote',
  },
};
export const BreadcrumbNav: Story = {
  args: {
    component: 'utrecht-breadcrumb-nav',
  },
};
export const ButtonGroup: Story = {
  args: {
    component: 'utrecht-button-group',
  },
};
export const Button: Story = {
  args: {
    component: 'utrecht-button',
  },
};
export const DataList: Story = {
  args: {
    component: 'utrecht-data-list',
  },
};
export const Figure: Story = {
  args: {
    component: 'utrecht-figure',
  },
};

export const FormField: Story = {
  args: {
    component: 'utrecht-form-field',
  },
};

export const FormFieldDescription: Story = {
  args: {
    component: 'utrecht-form-field-description',
  },
};
export const FormFieldErrorMessage: Story = {
  args: {
    component: 'utrecht-form-field-error-message',
  },
};
export const FormLabel: Story = {
  args: {
    component: 'utrecht-form-label',
  },
};

export const Heading1: Story = {
  args: {
    component: 'utrecht-heading-1',
  },
};
export const Heading2: Story = {
  args: {
    component: 'utrecht-heading-2',
  },
};
export const Heading3: Story = {
  args: {
    component: 'utrecht-heading-3',
  },
};
export const Heading4: Story = {
  args: {
    component: 'utrecht-heading-4',
  },
};
export const Heading5: Story = {
  args: {
    component: 'utrecht-heading-5',
  },
};
export const Heading6: Story = {
  args: {
    component: 'utrecht-heading-6',
  },
};

export const Image: Story = {
  args: {
    component: 'utrecht-img',
  },
};
export const Link: Story = {
  args: {
    component: 'utrecht-link',
  },
};
export const OrderedList: Story = {
  args: {
    component: 'utrecht-ordered-list',
  },
};

export const Paragraph: Story = {
  args: {
    component: 'utrecht-paragraph',
  },
};
export const Select: Story = {
  args: {
    component: 'utrecht-select',
  },
};
export const Separator: Story = {
  args: {
    component: 'utrecht-separator',
  },
};
export const SpotlightSection: Story = {
  args: {
    component: 'utrecht-spotlight-section',
  },
};

export const Table: Story = {
  args: {
    component: 'utrecht-table',
  },
};
export const Textarea: Story = {
  args: {
    component: 'utrecht-textarea',
  },
};
export const Textbox: Story = {
  args: {
    component: 'utrecht-textbox',
  },
};
export const UnorderedList: Story = {
  args: {
    component: 'utrecht-unordered-list',
  },
};
