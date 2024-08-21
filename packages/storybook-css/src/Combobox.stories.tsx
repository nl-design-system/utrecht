import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import comboboxDocs from '@utrecht/combobox-css/README.md?raw';
import defaultDocs from '@utrecht/combobox-css/_default.md?raw';
import expandedDocs from '@utrecht/combobox-css/_expanded.md?raw';
import optionActiveDocs from '@utrecht/combobox-css/_option-active.md?raw';
import optionSelectedDocs from '@utrecht/combobox-css/_option-selected.md?raw';
import { ColorSample } from '@utrecht/component-library-react';
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

const exampleLongText = [
  {
    label: 'Al Amana Leidsche Rijn - Eerste Oosterparklaan 88A, 3544 AK Utrecht',
    value: '1',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3318',
  },
  {
    label: 'Al Amana Zuilen - Marnixlaan 362, 3552 HM Utrecht',
    value: '2',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3319',
  },
  {
    label: 'Al Hambra Aziëlaan - Aziëlaan 157, 3526 SG Utrecht',
    value: '4',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3320',
  },
  {
    label: 'Ariane de Ranitz College - Blauwe-Vogelweg 11, 3585 LK Utrecht',
    value: '5',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3321',
  },
  {
    label: 'Ariane de Ranitz SO - Blauwe-Vogelweg 11, 3585 LK Utrecht',
    value: '6',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3322',
  },
  { label: 'Auris Fortaal - Agavedreef 92, 3563 EN Utrecht', value: '7', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3323' },
  {
    label: 'Auris Fortaal - Santa Cruzdreef 30, 3563 VJ Utrecht',
    value: '8',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3324',
  },
  {
    label: 'Axia College - Liendertseweg 101, 3815 BA Amersfoort',
    value: '9',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3325',
  },
  {
    label: 'Axia College - Utrechtseweg 266, 3818 EW Amersfoort',
    value: '10',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3326',
  },
  {
    label: 'Axia College - Vondellaan 28, 3818 WP Amersfoort',
    value: '11',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3327',
  },
  {
    label: 'Bartimeus - Oude Arnhemse Bovenweg 3, 3941 XM Doorn',
    value: '12',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3328',
  },
  {
    label: 'Bartimeus SO - Van Renesselaan 30A, 3703 AJ Zeist',
    value: '13',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3329',
  },
  {
    label: 'Bartimeus VSO - Van Renesselaan 30A, 3703 AJ Zeist',
    value: '14',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3330',
  },
  {
    label: 'Belle van Zuylen - Prof. H. Bavinckstraat 3, 3555 GS Utrecht',
    value: '15',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3331',
  },
  {
    label: 'Berg en Bosch SO Bilthoven - Prof. Bronkhorstlaan 22, 3723 MB Bilthoven',
    value: '16',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3332',
  },
  {
    label: 'Berg en Bosch SO Houten - Handboog 4, 3994 AD Houten',
    value: '17',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3333',
  },
  {
    label: 'Berg en Bosch VSO Bilthoven - Prof. Bronkhorstlaan 22, 3723 MB Bilthoven',
    value: '18',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3334',
  },
  {
    label: 'Berg en Bosch VSO Houten - Handboog 4, 3994 AD Houten',
    value: '19',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3335',
  },
  { label: 'Beukenrode - Beukenrodelaan 2C, 3941ZP Doorn', value: '20', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3336' },
  {
    label: 'Beukenrode OZC Odijk - Zeisterweg 81 b, 3984NK Odijk',
    value: '21',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3337',
  },
  { label: 'Binnentuin - Binnentuinlaan 6, 3452 RN Utrecht', value: '22', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3338' },
  { label: 'De Schans - Orinocodreef 15, 3563 ST Utrecht', value: '23', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3339' },
  {
    label: 'De Trappenberg SO - Soestdijkerstraatweg 129 C, 1213 VX Hilversum',
    value: '24',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3340',
  },
  {
    label: 'De Trappenberg College - Soestdijkerstraatweg 129 C, 1213 VX Hilversum',
    value: '25',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3341',
  },
  {
    label: 'Fritz Redl SO - Heidelberglaan 100, 3584 CX Utrecht',
    value: '26',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3342',
  },
  {
    label: 'Fritz Redl VSO - Heidelberglaan 100, 3584 CX Utrecht',
    value: '27',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3343',
  },
  { label: 'Heuvelrug College - Noordweg 12, 3704 GN Zeist', value: '28', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3344' },
  { label: 'Kentalis College - Slotlaan 37, 3523 HB Utrecht', value: '29', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3345' },
  {
    label: 'Kentalis Compas College - Wielkamp 1, 5301 DB Zaltbommel',
    value: '30',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3346',
  },
  {
    label: 'Kentalis Signis SO - Jan Sluijtersstraat 9, 1062 CJ Amsterdam',
    value: '31',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3347',
  },
  {
    label: 'Kentalis Signis - Herman de Manstraat 1, 1064 BX Amsterdam',
    value: '32',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3348',
  },
  { label: 'Kesper College - Nansenstraat 40, 2806 HM Gouda', value: '33', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3349' },
  { label: 'Kolibrie - Hellingweg 1, 3762 CP Soest', value: '34', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3350' },
  {
    label: 'Kromme Rijn College - Kraneburgerweg 20, 3582 GR Utrecht',
    value: '35',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3351',
  },
  {
    label: 'Kromme Rijn College - Ramsesdreef 190, 3564 CL Utrecht',
    value: '36',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3352',
  },
  { label: 'Lasenberg - Schrikslaan 20, 3762 TC Soest', value: '37', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3353' },
  {
    label: 'Leersumschool, C.P, van - Verlengde Slotlaan 113, 3707 CE Zeist',
    value: '38',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3354',
  },
  {
    label: 'Luc Stevens - Marco Pololaan 485, 3526 GH Utrecht',
    value: '39',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3355',
  },
  { label: 'Lux SO - Boadreef 2, 3563 EP Utrecht', value: '40', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3356' },
  {
    label: 'Meerklank SO - Van Renesselaan 30A-1, 3703 AJ Zeist',
    value: '41',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3357',
  },
  {
    label: 'Meerklank VSO - Laan van Eikenstein 2, 3705 AR Zeist',
    value: '42',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3358',
  },
  {
    label: 'Mensura College - Achterom 152, 1211 PD Hilversum',
    value: '43',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3359',
  },
  {
    label: 'Mensura College - Notebomenlaan 400, 3582 CN Utrecht',
    value: '44',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3360',
  },
  { label: 'Noorderlicht SO - Noordweg 8, 3704 GN Zeist', value: '45', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3361' },
  { label: 'Plevier - Lageweg 4, 3815 VG Amersfoort', value: '46', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3362' },
  { label: 'Rafael - Lanslaan 10, 3526 XH Utrecht', value: '47', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3363' },
  { label: 'Rotsoord - Rotsoord 36, 3523 CL Utrecht', value: '48', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3364' },
  { label: 'Sint Maarten - Neckardreef 20, 3562 CP Utrecht', value: '49', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3365' },
  { label: 'SO Fier - Winklerlaan 79, 3571 KL Utrecht', value: '50', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3366' },
  { label: 'Sprong - Valkenheide 41, 3953 MC Maarsbergen', value: '51', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3367' },
  { label: 'Stip - Europalaan 89, 3526 KP Utrecht', value: '52', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3368' },
  {
    label: 'Taalschool Hart van Noord - Trumanlaan 60E, 3527 BR Utrecht',
    value: '53',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3369',
  },
  {
    label: 'Taalschool Leidsche Rijn - Operettelaan 655, 3543 BR Utrecht - Leidsche Rijn',
    value: '54',
    id: 'C9EA4BFE-60B8-478C-A20C-5192735F3370',
  },
  { label: 'Taalschool Ondiep - Ondiep 63, 3552 EB Utrecht', value: '55', id: 'C9EA4BFE-60B8-478C-A20C-5192735F3371' },
];

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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcombobox',
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
export const LongText: Story = {
  args: {
    label: 'Naam School',
    name: 'school-name',
    id: 'long-text',
    options: exampleLongText,
    expanded: true,
  },
};
