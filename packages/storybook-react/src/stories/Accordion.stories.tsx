import { Meta, StoryObj } from '@storybook/react';
import { AccordionProvider } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/accordion/README.md?raw';
import tokensDefinition from '@utrecht/components/accordion/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { ReactNode } from 'react';
import { designTokenStory } from './util';

interface AccordionStoryProps {
  label: string;
  body: ReactNode;
  expanded?: boolean;
  expandedAccordion?: boolean;
}

const AccordionStory = ({ expanded, label, body }: AccordionStoryProps) => (
  <AccordionProvider sections={[{ expanded, label, body }]} />
);

const meta = {
  title: 'React Component/Accordion',
  id: 'react-accordion',
  args: {
    label: '',
    body: '',
    expandedAccordion: false,
  },
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    body: {
      name: 'body',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: '' },
        category: 'API',
      },
    },
    expandedAccordion: {
      name: 'expandedAccordion',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'API',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: AccordionStory,
} satisfies Meta<AccordionStoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Lorem ipsum',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: true,
  },
};

export const RTL: Story = {
  args: {
    label: 'ما هو "لوريم إيبسوم" ؟',
    body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
  },
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};

export const DesignTokens = designTokenStory(meta);
