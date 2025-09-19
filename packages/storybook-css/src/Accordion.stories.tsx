import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/accordion-css/README.md?raw';
import tokensDefinition from '@utrecht/accordion-css/dist/tokens.mjs';
import { Accordion, AccordionProvider } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Accordion',
  id: 'css-accordion',
  component: AccordionProvider,
  args: {
    sections: [],
  },
  argTypes: {
    sections: {
      control: 'object',
      table: {
        defaultValue: { summary: '[]' },
        category: 'API',
      },
    },
    icon: {
      name: 'icon',
      description: 'Icon at the start',
      control: { type: 'select' },
      options: ['None', 'Null', 'Chevron Down'],
      mapping: {
        None: undefined,
        Null: null,
        'Chevron Down': <UtrechtIconChevronDown />,
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-accordion',
    tokens,
    tokensDefinition,
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Faccordion',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1261-4784&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=1261-4785&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/accordion',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AccordionProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const accordionDefaultDataEn = {
  sections: [
    {
      headingLevel: 2,
      label: 'Section 1',
      body: <p>test</p>,
      expanded: true,
    },
    {
      headingLevel: 2,
      label: 'Section 2 (not expanded by default)',
      body: <p>test</p>,
      expanded: false,
    },
  ],
};

const accordionDefaultDataAR = {
  sections: [
    {
      label: 'ما هو "لوريم إيبسوم" ؟',
      body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
    },
  ],
};

const accordionData = {
  sections: [
    {
      label: 'Section 1',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 2',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 3',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 4',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 5',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 6',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 7',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 8',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 9',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
    {
      label: 'Section 10',
      body: <p>Lorem ipsum</p>,
      section: false,
      expanded: true,
    },
  ],
};

export const Default: Story = {
  args: accordionDefaultDataEn,
};

export const AvoidLandmarkOverload: Story = {
  args: accordionData,
};

export const RightToLeft: Story = {
  args: accordionDefaultDataAR,
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        <Story />
      </div>
    ),
  ],
  name: 'Right-to-left',
};

export const DesignTokens = designTokenStory(meta);
