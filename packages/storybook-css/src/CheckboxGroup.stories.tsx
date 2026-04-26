/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup, type CheckboxGroupProps } from '@utrecht/checkbox-group-react';
import { Heading } from '@utrecht/component-library-react';
import React from 'react';

interface CheckboxGroupStoryProps extends CheckboxGroupProps {
  headingLevel?: number;
}

const CheckboxGroupStory = ({ label, headingLevel, ...args }: CheckboxGroupStoryProps) => {
  return <CheckboxGroup {...args} label={headingLevel ? <Heading level={headingLevel}>{label}</Heading> : label} />;
};

const meta = {
  title: 'CSS Component/Checkbox Group',
  id: 'css-checkbox-group',
  component: CheckboxGroupStory,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcheckbox-group',
    nldesignsystem: 'https://nldesignsystem.nl/checkbox-group',
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof CheckboxGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Checkbox group with only a label',
  args: {
    id: '0128c307-ead5-40d4-9a99-c91aa6fa4a99',
    label: 'Hoe wil je dat wij contact opnemen?',
    options: [
      {
        id: 'a374296c-669e-45d0-a26d-e62e959958dd',
        name: 'phone',
        value: 'true',
        label: 'Telefoon',
        checked: true,
      },
      {
        id: '714205e8-d33b-40d8-9721-e2ea71c62a20',
        name: 'email',
        value: 'true',
        label: 'E-mail',
      },
      {
        id: '67fa8ea7-6b75-4049-ae4f-ebaa816e4c35',
        name: 'mail',
        value: 'true',
        label: 'Brief',
      },
    ],
  },
};

export const CheckboxGroupHeading = {
  title: 'Checkbox group with heading as label',
  args: {
    ...Default.args,
    name: '2ce3b9f7-5ade-4048-8719-e4b57fc0fd4f',
    label: 'Choose your option',
    id: '4adcc33d-1ac3-4e2e-9630-04c09213dbb9',
    headingLevel: 1,
    options: [
      {
        id: '3bce233e-57aa-49b3-bba7-87fa36f3774c',
        value: '1',
        label: 'Option 1',
      },
      {
        id: 'de55cc3e-ca5b-4487-8295-ee3ca804ed5e',
        value: '2',
        label: 'Option 2',
      },
      {
        id: 'd3bcfabb-ed87-4185-87b9-65dc63ac5430',
        value: '3',
        label: 'Option 3',
      },
    ],
  },
};
export const Description = {
  name: 'Checkbox group with an additional description',
  args: {
    ...Default.args,
    id: 'd7218515-bf54-45c1-ba57-a72af5d7fd42',
    description: 'Kies één of meerdere opties.',
    label: 'Hoe wil je dat wij contact opnemen?',
    options: [
      {
        id: '2a5524f5-6ee8-4be1-90a1-87d0d619d2ee',
        name: 'phone',
        value: 'true',
        label: 'Telefoon',
        checked: true,
      },
      {
        id: '1fe84cc2-16fc-4e9b-9498-856583652181',
        name: 'email',
        value: 'true',
        label: 'E-mail',
      },
      {
        id: '96493bfe-2caa-4cb3-80ce-a4a46fc69c10',
        name: 'mail',
        value: 'true',
        label: 'Brief',
      },
    ],
  },
};

export const OptionDescription = {
  name: 'Checkbox group with an option description',
  args: {
    ...Default.args,
    id: '764bacdd-94b4-4774-be40-89e9e5f82c19',
    label: 'Hoe wil je dat wij contact opnemen?',
    options: [
      {
        id: '28a9109b-eb9c-4119-abaa-02d09e8f359b',
        name: 'phone',
        value: 'true',
        label: 'Telefoon',
        description: 'We bellen je op (085) 555 0000',
        checked: true,
      },
      {
        id: '3bdeeba2-199f-44e9-9184-ed8dbfb2fc37',
        name: 'email',
        description: 'Web mailen je op info@example.com',
        value: 'true',
        label: 'E-mail',
      },
      {
        id: '2bb862c1-114e-4529-975e-1776df23f055',
        name: 'mail',
        value: 'true',
        label: 'Brief',
        description: 'Je ontvangt een brief op Stadhuisplein 1, Amsterdam',
      },
    ],
  },
};

export const Invalid = {
  name: 'Invalid with an error message',
  args: {
    ...Default.args,
    id: '707b7bd8-d476-472c-ac9d-3c1a4caac4c2',
    label: 'Hoe wil je dat wij contact opnemen?',
    invalid: true,
    errorMessage: 'Fout: je hebt geen keuze gemaakt. Kies één of meerdere opties.',
    options: [
      {
        id: '80d14d58-bc99-4c53-824e-36473d6506c7',
        label: 'Telefoon',
        name: 'phone',
        value: 'true',
      },
      {
        id: '0b4aea63-ec5b-4259-b008-ba8eaf8b03e3',
        label: 'E-mail',
        name: 'email',
        value: 'true',
      },
      {
        id: '9360080d-3a48-444d-bc2c-1cd1a40940f9',
        label: 'Brief',
        name: 'mail',
        value: 'true',
      },
    ],
  },
};

export const InvalidOption = {
  name: 'Invalid with an error message for options',
  args: {
    ...Default.args,
    id: '73a3f2c1-00e7-48b8-9ebb-1f51b6550f42',
    label: 'Hoe wil je dat wij contact opnemen?',
    options: [
      {
        checked: true,
        id: 'c0972ecc-6eef-4bf9-80ab-c535fc0229b5',
        invalid: true,
        errorMessage: 'Wij hebben geen telefoonnumer van je. Vul eerst je profiel aan.',
        label: 'Telefoon',
        name: 'phone',
        value: 'true',
      },
      {
        checked: true,
        id: '714d33fd-4cc4-4113-9887-4c38e77a6532',
        invalid: true,
        errorMessage: 'Wij hebben geen e-mailadres van je. Vul eerst je profiel aan.',
        label: 'E-mail',
        name: 'email',
        value: 'true',
      },
      {
        checked: true,
        id: '10ee620a-af7e-4c67-9f6d-5519b3c45c6d',
        invalid: true,
        errorMessage: 'Wij hebben geen postadres van je. Vul eerst je profiel aan.',
        label: 'Brief',
        name: 'mail',
        value: 'true',
      },
    ],
  },
};
