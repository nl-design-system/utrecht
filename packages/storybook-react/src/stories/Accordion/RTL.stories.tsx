import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, defaultArgs } from './args';

export default {
  title: 'React Component/Accordion/RTL',
  id: 'react-accordion-rtl',
  argTypes,
  args: defaultArgs,
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const RTL = Template.bind({});

RTL.args = {
  label: 'ما هو "لوريم إيبسوم" ؟',
  body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
  locale: 'ar',
};
