import type { Meta, StoryObj } from '@storybook/vue3';
import { Accordion, AccordionProvider, AccordionSection } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/accordion/README.md?raw';
import tokens from '@utrecht/components/accordion/tokens.json';
import { Ref } from 'vue';
import { createStory } from './util';

export interface AccordionSectionProps extends HTMLDivElement {
  headingLevel?: number;
  label: string;
  body: any;
  expanded?: boolean;
  disabled?: boolean;
  section?: boolean;
  onActivate?: Function;
  onButtonFocus?: Function;
  onButtonBlur?: Function;
  buttonRef?: Ref<HTMLButtonElement>;
  id: string;
}

const accordionSections: AccordionSectionProps[] = [
  {
    label: 'Lorem ipsum',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    section: true,
    expanded: false,
  },
] as AccordionSectionProps[];

const meta: Meta<typeof AccordionProvider> = {
  id: 'vue-accordion',
  title: 'Vue.js Component/Accordion',
  tags: ['autodocs'],
  component: AccordionProvider,
  argTypes: {},
  args: {
    sections: accordionSections,
  },
  render: () => ({
    components: {
      AccordionProvider,
      Accordion,
      AccordionSection,
    },
    setup(args: any) {
      return {
        args,
      };
    },
    template: `<AccordionProvider :sections="args.sections" />`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-accordion',
    docs: {
      component: {
        description: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    sections: accordionSections,
  },
});

const rtlSections: AccordionSectionProps[] = [
  {
    label: 'ما هو "لوريم إيبسوم" ؟',
    body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
    expanded: false,
  },
] as AccordionSectionProps[];

export const RTL: Story = createStory(meta, {
  args: {
    sections: rtlSections,
  },
  decorators: [() => ({ template: '<div lang="ar" dir="rtl"><story/></div>' })],
  name: 'Right-to-left',
});
