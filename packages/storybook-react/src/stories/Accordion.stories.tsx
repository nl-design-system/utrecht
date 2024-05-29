import { Meta, StoryObj } from '@storybook/react';
import {
  AccordionProvider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/accordion/README.md?raw';
import tokensDefinition from '@utrecht/components/accordion/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronDown } from '@utrecht/web-component-library-react';
import React, { ReactNode } from 'react';
import { designTokenStory } from './util';
interface AccordionStoryProps {
  label: string;
  body: ReactNode;
  expanded?: boolean;
  expandedAccordion?: boolean;
  reverseIcon?: boolean;
  utrechtIcon?: boolean;
}

const AccordionStoryUtrecht = ({ expanded, label, body, utrechtIcon }: AccordionStoryProps) => (
  <AccordionProvider utrechtIcon={utrechtIcon} sections={[{ expanded, label, body }]} />
);

const AccordionStory = ({ expanded, label, body, reverseIcon }: AccordionStoryProps) => (
  <AccordionProvider
    icon={<UtrechtIconChevronDown />}
    reverseIcon={reverseIcon}
    sections={[{ expanded, label, body }]}
  />
);

const meta = {
  title: 'React Component/Accordion',
  id: 'react-accordion',
  args: {
    label: '',
    body: '',
    expandedAccordion: false,
    reverseIcon: false,
    utrechtIcon: false,
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
    reverseIcon: {
      name: 'reverseIcon',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'API',
      },
    },
    utrechtIcon: {
      name: 'utrechtIcon',
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

const ExampleTable = () => (
  <TableContainer overflowInline>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Column A</TableHeaderCell>
          <TableHeaderCell scope="col">Column B</TableHeaderCell>
          <TableHeaderCell scope="col">Column C</TableHeaderCell>
          <TableHeaderCell scope="col">Column D</TableHeaderCell>
          <TableHeaderCell scope="col">Column E</TableHeaderCell>
          <TableHeaderCell scope="col">Column F</TableHeaderCell>
          <TableHeaderCell scope="col">Column G</TableHeaderCell>
          <TableHeaderCell scope="col">Column H</TableHeaderCell>
          <TableHeaderCell scope="col">Column I</TableHeaderCell>
          <TableHeaderCell scope="col">Column J</TableHeaderCell>
          <TableHeaderCell scope="col">Column K</TableHeaderCell>
          <TableHeaderCell scope="col">Column L</TableHeaderCell>
          <TableHeaderCell scope="col">Column M</TableHeaderCell>
          <TableHeaderCell scope="col">Column N</TableHeaderCell>
          <TableHeaderCell scope="col">Column O</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell scope="row">Item 1</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Item</TableHeaderCell>
          <TableCell>Data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
          <TableCell>More data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const accordionDefaultDataEn = {
  label: 'Lorem ipsum',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
  expandedAccordion: true,
};
const accordionDefaultDataAR = {
  label: 'ما هو "لوريم إيبسوم" ؟',
  body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.',
};
const accordionData = [
  {
    label: 'Lorem ipsum 1',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: true,
  },
  {
    label: 'Lorem ipsum 2',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: false,
  },
  {
    label: 'Lorem ipsum 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
    expandedAccordion: false,
  },
];

export const Default: Story = {
  args: accordionDefaultDataEn,
};

export const ReverseIcon: Story = {
  args: accordionDefaultDataEn,
  render: (args) => {
    return <AccordionStory {...{ ...args, reverseIcon: !args.reverseIcon }} />;
  },
};

export const DefaultUtrecht: Story = {
  args: accordionDefaultDataEn,
  render: (args) => <AccordionStoryUtrecht {...{ ...args, utrechtIcon: !args.utrechtIcon }} />,
};

export const Multiple: Story = {
  render: () => <AccordionProvider icon={<UtrechtIconChevronDown />} sections={accordionData} />,
};

export const MultipleUtrecht: Story = {
  render: () => <AccordionProvider utrechtIcon sections={accordionData} />,
};

export const RTLUtrecht: Story = {
  args: accordionDefaultDataAR,
  render: (args) => <AccordionStoryUtrecht {...{ ...args, utrechtIcon: !args.utrechtIcon }} />,
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left Utrecht',
};

export const RTL: Story = {
  args: accordionDefaultDataAR,
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};
export const RTLReverseIcon: Story = {
  args: accordionDefaultDataAR,
  render: (args) => <AccordionStory {...{ ...args, reverseIcon: true }} />,
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left Reverse Icon',
};

export const tableInlineOverflowUtrecht: Story = {
  args: {
    label: 'table',
    body: <ExampleTable />,
  },
  render: (args) => <AccordionStoryUtrecht {...{ ...args, utrechtIcon: !args.utrechtIcon }} />,
  name: 'Table Inline Overflow Utrecht',
};

export const tableInlineOverflow: Story = {
  args: {
    label: 'table',
    body: <ExampleTable />,
  },
  name: 'Table Inline Overflow',
};

export const DesignTokens = designTokenStory(meta);
