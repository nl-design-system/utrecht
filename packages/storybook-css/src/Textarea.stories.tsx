/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from '@utrecht/component-library-react/src/Textarea';
import readme from '@utrecht/components/textarea/README.md?raw';
import tokensDefinition from '@utrecht/components/textarea/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface TextareaStoryProps extends TextareaProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  children?: string;
}

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

const TextareaStory = ({ children, focus, focusVisible, hover, ...args }: TextareaStoryProps) => (
  <Textarea
    className={clsx({
      'utrecht-textarea--focus': focus,
      'utrecht-textarea--focus-visible': focusVisible,
      'utrecht-textarea--hover': hover,
    })}
    defaultValue={children}
    {...args}
  />
);

const meta = {
  title: 'CSS Component/Textarea',
  id: 'css-textarea',
  component: TextareaStory,
  argTypes: {
    dir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: {
        '': undefined,
        auto: 'auto',
        ltr: 'ltr',
        rtl: 'rtl',
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'focusVisible',
      control: 'boolean',
    },
    spellCheck: {
      description: 'Spellcheck',
      control: { type: 'select' },
      options: {
        '': undefined,
        false: 'false',
        true: 'true',
      },
    },
  },
  args: {
    dir: 'auto',
    disabled: false,
    focus: false,
    focusVisible: false,
    hover: false,
    invalid: false,
    readOnly: false,
    required: false,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    spellCheck: undefined,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textarea',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof TextareaStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: `Styling via the \`.utrecht-textarea\` class name.`,
      },
    },
  },
};

export const Placeholder: Story = {
  name: 'Placeholder',
  args: {
    ...Default.args,
    children: '',
    placeholder: 'Typ je bericht...',
  },
  parameters: {
    docs: {
      description: {
        story: 'De `::placeholder` styling werkt automatisch als met de `utrecht-textarea--html-textarea` class name',
      },
    },
  },
};

export const PlaceholderRightToLeft: Story = {
  name: 'Placeholder (right-to-left)',
  args: {
    ...Default.args,
    placeholder: 'اكتب رسالتك',
    children: '',
  },
  decorators: [arabicDecorator],
};

export const RightToLeft: Story = {
  args: {
    ...Default.args,
    children:
      'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.',
  },
  decorators: [arabicDecorator],
  name: 'Right-to-left',
};

export const Spellcheck: Story = {
  args: {
    ...Default.args,
    spellCheck: false,
  },
  name: 'Disable spell check',
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
  name: 'Invalid',
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
  name: 'Read-only',
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
  name: 'Required',
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible',
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
};

export const DesignTokens = designTokenStory(meta);
