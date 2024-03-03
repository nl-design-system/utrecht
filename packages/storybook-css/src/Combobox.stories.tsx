import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import { ColorSample } from '@utrecht/component-library-react';
import comboboxDocs from '@utrecht/components/combobox/README.md?raw';
import defaultDocs from '@utrecht/components/combobox/_default.md?raw';
import expandedDocs from '@utrecht/components/combobox/_expanded.md?raw';
import optionActiveDocs from '@utrecht/components/combobox/_option-active.md?raw';
import optionSelectedDocs from '@utrecht/components/combobox/_option-selected.md?raw';
import React, { ReactNode } from 'react';
import { ComboboxStory } from './Combobox';
import { FontSample } from './FontSample';

const spaceForPopover = (Story: PartialStoryFn): ReactNode => (
  <div style={{ minBlockSize: '42em' }}>{Story() as ReactNode}</div>
);

const exampleOptions = [
  {
    id: '162370d9-fa10-4731-9b1d-b21b8479a4b6',
    label: 'Drenthe',
    value: 'http://standaarden.overheid.nl/owms/terms/Drenthe',
  },
  {
    id: 'cf357445-a90f-400c-bc2e-22dd7eaccdc2',
    label: 'Flevoland',
    value: 'http://standaarden.overheid.nl/owms/terms/Flevoland',
  },
  {
    id: '4d352dac-4d66-47f7-88f3-919e97670c83',
    label: 'Fryslân',
    value: 'https://standaarden.overheid.nl/owms/terms/Fryslan',
  },
  {
    id: 'b520a436-3d51-4315-bbba-872d0647949a',
    label: 'Gelderland',
    value: 'http://standaarden.overheid.nl/owms/terms/Gelderland',
  },
  {
    id: '3b0f059e-a2d1-4c7c-880a-23e890fc7e13',
    label: 'Groningen',
    value: 'http://standaarden.overheid.nl/owms/terms/Groningen_(provincie)',
  },
  {
    id: 'b385dffb-a314-43f8-8def-73e6711d29dc',
    label: 'Limburg',
    value: 'http://standaarden.overheid.nl/owms/terms/Limburg',
  },
  {
    id: '3874c3dc-0599-4671-9de8-ba8e8298405b',
    label: 'Noord-Brabant',
    value: 'http://standaarden.overheid.nl/owms/terms/Noord-Brabant',
  },
  {
    id: 'd1f3b99b-6f71-4574-9f00-9d11988efbb8',
    label: 'Noord-Holland',
    value: 'http://standaarden.overheid.nl/owms/terms/Noord-Holland',
  },
  {
    id: '3cc3eb66-6f63-4a6b-a0b1-13f1dea16300',
    label: 'Overijssel',
    value: 'http://standaarden.overheid.nl/owms/terms/Overijssel',
  },
  {
    id: 'f340a0ec-9bb3-430d-ac67-cd8829c8d5fe',
    label: 'Utrecht',
    value: 'https://standaarden.overheid.nl/owms/terms/Utrecht_(provincie)',
  },
  {
    id: '52a4e51b-1aa9-4156-ac05-eb3319dce47c',
    label: 'Zeeland',
    value: 'https://standaarden.overheid.nl/owms/terms/Zeeland_(provincie)',
  },
  {
    id: '97f5ded4-5cc8-4127-8e80-7b7b3b78485f',
    label: 'Zuid-Holland',
    value: 'http://standaarden.overheid.nl/owms/terms/Zuid-Holland',
  },
];

const exampleFontFamilyOptions = [
  {
    id: '4b17012d-22aa-416d-823d-aef724c7f1fc',
    label: 'Arial',
    value: 'Arial',
  },
  {
    id: 'ade1da12-6673-43a6-bffe-565decc0da16',
    label: 'Georgia',
    value: 'Georgia',
  },
  {
    id: '0078f3ac-473d-4663-81f9-1a7b88e06362',
    label: 'Times New Roman',
    value: 'Times New Roman',
  },
  {
    id: 'aa926811-4e53-4a5f-b20e-e6425a4e395a',
    label: 'Verdana',
    value: 'Verdana',
  },
];

const exampleColorOptions = [
  {
    id: '086c0c3d-1c0c-4700-9907-16fbf088621b',
    label: 'Pink 11',
    value: '#C2298A',
  },
  {
    id: '7dd07d0b-f9fa-490e-b94f-41d6e3e3b57e',
    label: 'Pink 10',
    value: '#CF3897',
  },
  {
    id: '63995fe9-3a4e-4415-b1d7-fae8c0cca4b3',
    label: 'Pink 9',
    value: '#D6409F',
  },
  {
    id: 'cfb17985-9261-48b8-b5ce-87e9517b4808',
    label: 'Pink 8',
    value: '#DD93C2',
  },
  {
    id: 'fa54cc4a-9259-4d15-9ef8-2eaeb4f67493',
    label: 'Pink 7',
    value: '#E7ACD0',
  },
].map((obj) => {
  const { value, label } = obj;
  return {
    ...obj,
    label: (
      <>
        <ColorSample color={value} /> {label}
      </>
    ),
  };
});

const exampleArabicColorOptions = [
  {
    id: '086c0c3d-1c0c-4700-9907-16fbf088621b',
    label: 'Pink 11',
    value: '#C2298A',
  },
  {
    id: '7dd07d0b-f9fa-490e-b94f-41d6e3e3b57e',
    label: 'Pink 10',
    value: '#CF3897',
  },
  {
    id: '63995fe9-3a4e-4415-b1d7-fae8c0cca4b3',
    label: 'Pink 9',
    value: '#D6409F',
  },
  {
    id: 'cfb17985-9261-48b8-b5ce-87e9517b4808',
    label: 'Pink 8',
    value: '#DD93C2',
  },
  {
    id: 'fa54cc4a-9259-4d15-9ef8-2eaeb4f67493',
    label: 'Pink 7',
    value: '#E7ACD0',
  },
].map((obj) => {
  const { label } = obj;
  return {
    ...obj,
    label: label.replace('Pink', 'الوردي'),
  };
});

const exampleIconOptions = [
  {
    id: 'a06d5575-0bdf-489b-ba6c-f11be4f508bb',
    label: '',
    value: 'utrecht-icon-afval',
  },
  {
    id: '590ecf19-8165-4f3e-8dd6-3b1dbdf07e8b',
    label: '',
    value: 'utrecht-icon-afval-container',
  },
  {
    id: 'a3e694c2-62a2-4b77-bb86-741a9186669b',
    label: '',
    value: 'utrecht-icon-afval-containerpas',
  },
  {
    id: '98ad6f0c-2cb7-4e38-bd44-b2221f2867d5',
    label: '',
    value: 'utrecht-icon-afval-kalender',
  },
  {
    id: '4ec478d1-7e84-4dd5-8acd-1443a731a973',
    label: '',
    value: 'utrecht-icon-afval-scheiden',
  },
  {
    id: '9df015d0-9ab9-4a03-b57f-9834e3407183',
    label: '',
    value: 'utrecht-icon-afval',
  },
].map((obj) => {
  const { value } = obj;
  const IconElement = value;
  return {
    ...obj,
    label: (
      <>
        <IconElement /> {value}
      </>
    ),
  };
});

const meta = {
  title: 'CSS Component/Combobox',
  id: 'css-combobox',
  component: ComboboxStory,
  tags: ['autodocs'],
  argTypes: {
    expanded: {
      description: 'Expanded',
      type: 'boolean',
    },
    name: {
      description: 'Name in HTTP submit',
      type: 'string',
    },
    options: {
      description: 'Options',
      control: 'select',
      options: {
        '': undefined,
        empty: [],
        Colors: exampleColorOptions,
        Provinces: exampleOptions,
        'Font families': exampleFontFamilyOptions,
      },
    },
    activeId: {
      description: 'Active option',
      control: 'select',
    },
    label: {
      description: 'Textbox label',
      type: 'string',
    },
    placeholder: {
      description: 'Textbox placeholder text',
      type: 'string',
    },
    position: {
      description: 'Listbox position',
      control: 'select',
      options: {
        '': undefined,
        'block-end': 'block-end',
      },
    },
  },
  args: {
    expanded: false,
    label: '',
    placeholder: '',
    options: [],
  },
  decorators: [spaceForPopover as any],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: comboboxDocs,
      },
    },
  },
} satisfies Meta<typeof ComboboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Provincie',
    name: 'province',
    id: '74a82a65-0f9a-4ba8-90f3-228444a12a0c',
  },
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};

export const Expanded: Story = {
  args: {
    label: 'Provincie',
    name: 'province',
    id: '22922608-7e8a-4795-a451-02334f30593e',
    expanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: expandedDocs,
      },
    },
  },
};

export const ActiveOption: Story = {
  args: {
    label: 'Provincie',
    name: 'province',
    options: exampleOptions.map((obj, index) => ({
      ...obj,
      active: index === 0,
    })),
    id: 'd92b0bc5-7724-4533-9a93-fe786848f492',
    expanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: optionActiveDocs,
      },
    },
  },
};

export const SelectedOption: Story = {
  args: {
    label: 'Provincie',
    name: 'province',
    options: exampleOptions.map((obj, index) => ({
      ...obj,
      selected: index === 1,
    })),
    id: '83b3113b-3e49-425b-83bc-a4310129bbbd',
    expanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: optionSelectedDocs,
      },
    },
  },
};

export const Options: Story = {
  args: {
    label: 'Provincie',
    name: 'province',
    options: exampleOptions,
    id: 'bac035a8-131e-4346-bf71-e51dd1b26929',
    expanded: true,
  },
};

export const ColorOptions: Story = {
  args: {
    label: 'Color',
    name: 'color',
    defaultValue: 'pink',
    expanded: true,
    options: exampleColorOptions.map((obj, index) => ({
      ...obj,
      selected: index === 1,
    })),
    id: '2ddb2b4f-8ab5-4c36-a82d-cec0f5c80d51',
  },
};

export const IconOptions: Story = {
  args: {
    label: 'Icon',
    name: 'icon',
    defaultValue: 'afval',
    expanded: true,
    options: exampleIconOptions.map((obj, index) => ({
      ...obj,
      selected: index === 1,
    })),
    id: '4d0dd8d6-aaf1-40df-86ed-be04dab1ba5c',
  },
};

export const FontFamilyOptions: Story = {
  args: {
    label: 'Font family',
    name: 'font-family',
    defaultValue: '',
    expanded: true,
    options: exampleFontFamilyOptions
      .map((obj) => ({
        ...obj,
        label: <FontSample fontFamily={obj.value}>{obj.label}</FontSample>,
      }))
      .map((obj, index) => ({
        ...obj,
        selected: index === 1,
      })),
    id: '4d0dd8d6-aaf1-40df-86ed-be04dab1ba5c',
  },
};

export const RightToLeft: Story = {
  args: {
    label: 'لون:',
    name: 'color',
    defaultValue: 'الوردي',
    expanded: true,
    options: exampleArabicColorOptions.map((obj, index) => ({
      ...obj,
      selected: index === 1,
    })),
    id: '53fdeab7-9013-482d-a1f4-0e44e90ba043',
  },
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  name: 'Right-to-left',
};
