import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-css/README.md?raw';
import anatomyDocs from '@utrecht/button-css/docs/anatomy.nl.md?raw';
import failureDescriptionDocs from '@utrecht/button-css/docs/failure-description.nl.md?raw';
import failureErrorMessageDocs from '@utrecht/button-css/docs/failure-error-message.nl.md?raw';
import relatedComponentsDocs from '@utrecht/button-css/docs/related-components.nl.md?raw';
import htmlDocs from '@utrecht/button-css/docs/technology-html.nl.md?raw';
import visualDesignDocs from '@utrecht/button-css/docs/visual-design.nl.md?raw';
import wcagDocs from '@utrecht/button-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/button-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { ButtonStory } from './Button';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: ButtonStory,
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed',
      control: { type: 'select' },
      options: ['', false, true],
      type: {
        required: false,
      },
    },
    textContent: {
      description: 'Button text',
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    hint: {
      control: { type: 'select' },
      options: ['', 'danger', 'warning', 'ready'],
    },
    label: {
      description: 'Button text in label',
      type: {
        name: 'string',
        required: false,
      },
    },
    IconBefore: {
      description: 'Icon before label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    IconAfter: {
      description: 'Icon after label',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    active: false,
    appearance: '',
    busy: false,
    disabled: false,
    focus: false,
    focusVisible: false,
    hint: false,
    hover: false,
    pressed: '',
    textContent: '',
    type: 'button',
    label: '',
    IconBefore: '',
    IconAfter: '',
  },
  parameters: {
    communityFigma: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/?node-id=153-1138',
    figma: 'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/?node-id=153-1138',
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbutton',
    nldesignsystem: 'https://nldesignsystem.nl/button',
    tokensPrefix: 'utrecht-button',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([
          readme,
          relatedComponentsDocs,
          anatomyDocs,
          visualDesignDocs,
          htmlDocs,
          failureDescriptionDocs,
          failureErrorMessageDocs,
          wcagDocs,
        ]),
      },
    },
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Start je aanvraag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button` class naam',
      },
    },
  },
};

export const PrimaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--primary-action` class naam',
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--secondary-action` class naam',
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--subtle` class naam',
      },
    },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
  name: 'Active',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--active` class name',
      },
    },
  },
};

export const Pressed: Story = {
  args: {
    ...Default.args,
    pressed: true,
  },
  name: 'Pressed',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--pressed` class name',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--hover` class name',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--focus` class name',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--focus` en `.utrecht-button--focus-visible` class name',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--disabled` class name',
      },
    },
  },
};

export const Busy: Story = {
  args: {
    ...Default.args,
    busy: true,
  },
  name: 'Busy',
  parameters: {
    // `cursor` cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Styling met de `.utrecht-button--busy` class name',
      },
    },
  },
};

export const IconAfter: Story = {
  args: {
    IconAfter: 'utrecht-icon-chevron-right',
    rel: 'next',
    label: 'Next',
  },
  name: 'Icon after label',
};

export const IconBefore: Story = {
  args: {
    IconBefore: 'utrecht-icon-chevron-left',
    label: 'Previous',
  },
  name: 'Icon before label',
};

export const DesignTokens = designTokenStory(meta);
