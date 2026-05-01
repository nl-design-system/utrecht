/* @license CC0-1.0 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldTextbox, type FormFieldTextboxProps } from '@utrecht/component-library-react';
import { Heading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import voorvoegsels from './voorvoegsels-tabel-36.json';

interface FormFieldTextboxStoryProps extends FormFieldTextboxProps {
  headingLevel?: number;
  datalist?: { label: string; value?: string }[];
}

const FormFieldTextboxStory = ({ datalist, label, headingLevel, ...args }: FormFieldTextboxStoryProps) => {
  const datalistId = Array.isArray(datalist) ? `${args.id}-datalist` : undefined;

  return (
    <>
      <FormFieldTextbox
        list={datalistId}
        label={headingLevel ? <Heading level={headingLevel}>{label}</Heading> : label}
        {...args}
      />
      {Array.isArray(datalist) ? (
        <datalist id={datalistId}>
          {datalist.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </datalist>
      ) : null}
    </>
  );
};

const arabicDecorator: Decorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

const meta = {
  title: 'CSS Component/Form Field with Textbox (right-to-left)',
  id: 'css-form-field-textbox-rtl',
  component: FormFieldTextboxStory,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform-field-textbox',
    nldesignsystem: 'https://nldesignsystem.nl/text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FormFieldTextboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullName = {
  name: 'Full name (empty)',
  args: {
    label: 'الاسم الكامل',
    autoComplete: 'name',
    type: 'text',
    inputDir: 'auto',
    id: '5e95c937-e454-4605-a220-a59dd226aebf',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `In een _right-to-left_ schrift zoals Arabisch moet de tekst van het label, placeholder en van de invoer meestal rechts uitgelijnd zijn.

Sommige invoer is links-naar-rechts, daarom zijn er enkele uitzonderingen:

- e-mailadressen
- website URLs
- telefoonnummers
- zoek naar code (kleurocodes, programmeertalen)

Gebruik een passend formaat van de textbox, zodat het het rechts uitgelijnde label niet een onnodig grote afstand heeft tot de links uitgelijnde invoer.`,
      },
    },
  },
};

export const FullNamePlaceholder = {
  name: 'Full name (placeholder)',
  args: {
    label: 'الاسم الكامل',
    placeholder: 'الاسم الكامل',
    autoComplete: 'name',
    type: 'text',
    inputDir: 'auto',
    placeholderDir: 'rtl',
    id: 'a79112b4-26b6-4393-96bd-c514aaac0781',
    className: 'utrecht-textbox--placeholder-rtl',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `A right-to-left placeholder should be right aligned.

Let op: dit is helaas nog niet gelukt om de placeholder automatisch rechts uit te lijnen, wanneer de tekst van de
placeholder right-to-left is. Op dit moment gebruiken we de volgende class name: \`utrecht-textbox--placeholder-rtl\``,
      },
      status: {
        type: 'WORK IN PROGRESS',
      },
      chromatic: { disableSnapshot: true },
    },
  },
};

export const FullNameLTRPlaceholder = {
  name: 'Full name (left-to-right placeholder)',
  args: {
    label: 'الاسم الكامل',
    placeholder: 'Jane Doe',
    autoComplete: 'name',
    type: 'text',
    inputDir: 'auto',
    id: '5dfbb67d-699c-47c2-9ec7-ce18d7efe71c',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `A left-to-right placeholder should be left aligned.`,
      },
    },
  },
};

export const FullNameValue = {
  name: 'Full name (value)',
  args: {
    label: 'الاسم الكامل',
    autoComplete: 'name',
    type: 'text',
    value: 'Jan Janssen',
    inputDir: 'auto',
    id: 'e341cf11-0666-4ae5-abed-8fe1e2af3bd9',
  },
  decorators: [arabicDecorator],
};

export const Email = {
  name: 'E-mail address (empty)',
  args: {
    label: 'بريد إلكتروني',
    type: 'email',
    autoComplete: 'email',
    inputDir: 'ltr',
    id: 'b3b9491b-c32a-4eee-b742-46c14324a417',
  },
  decorators: [arabicDecorator],
};

export const EmailPlaceholder = {
  name: 'E-mail address (right-to-left placeholder)',
  args: {
    label: 'بريد إلكتروني',
    placeholder: 'بريد إلكتروني',
    type: 'email',
    autoComplete: 'email',
    inputDir: 'ltr',
    placeholderDir: 'rtl',
    id: '1cede51f-042c-4839-b7a7-e29d8702a16e',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `Voor een e-mailadres, die _left-to-right_ moet zijn, moet een _right-to-left_ placeholder tekst rechts uitgelijnd zijn.

Let op: dit is helaas nog niet gelukt om de placeholder automatisch rechts uit te lijnen, wanneer de tekst van de
placeholder right-to-left is. Op dit moment gebruiken we de volgende class name: \`utrecht-textbox--placeholder-rtl\``,
      },
      status: {
        type: 'WORK IN PROGRESS',
      },
      chromatic: { disableSnapshot: true },
    },
  },
};

export const EmailLTRPlaceholder = {
  name: 'E-mail address (left-to-right placeholder)',
  args: {
    label: 'بريد إلكتروني',
    placeholder: 'info@example.com',
    type: 'email',
    autoComplete: 'email',
    inputDir: 'ltr',
    id: '5cbdd2ff-6fae-49bf-977d-a5e762618506',
  },
  decorators: [arabicDecorator],
};

export const EmailValue = {
  name: 'E-mail address (value)',
  args: {
    label: 'بريد إلكتروني',
    type: 'email',
    autoComplete: 'email',
    value: 'info@example.com',
    inputDir: 'ltr',
    id: 'fece1712-c6ca-4972-b735-0fb5fa705ce7',
  },
  decorators: [arabicDecorator],
};

export const WebsiteEmpty = {
  name: 'Website URL (empty)',
  args: {
    label: 'موقع إلكتروني',
    type: 'url',
    autoComplete: 'url',
    inputDir: 'ltr',
    id: 'b3b9491b-c32a-4eee-b742-46c14324a417',
  },
  decorators: [arabicDecorator],
};

export const WebsitePlaceholder = {
  name: 'Website URL (placeholder)',
  args: {
    label: 'موقع إلكتروني',
    placeholder: 'موقع إلكتروني',
    type: 'url',
    autoComplete: 'email',
    inputDir: 'ltr',
    placeholderDir: 'rtl',
    id: '1cede51f-042c-4839-b7a7-e29d8702a16e',
    className: 'utrecht-textbox--placeholder-rtl',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `Let op: dit is helaas nog niet gelukt om de placeholder automatisch rechts uit te lijnen, wanneer de tekst van de
placeholder right-to-left is. Op dit moment gebruiken we de volgende class name: \`utrecht-textbox--placeholder-rtl\``,
      },
      status: {
        type: 'WORK IN PROGRESS',
      },
      chromatic: { disableSnapshot: true },
    },
  },
};

export const WebsiteLTRPlaceholder = {
  name: 'Website URL (left-to-right placeholder)',
  args: {
    label: 'موقع إلكتروني',
    placeholder: 'https://example.com/',
    type: 'url',
    autoComplete: 'email',
    inputDir: 'ltr',
    id: '5cbdd2ff-6fae-49bf-977d-a5e762618506',
  },
  decorators: [arabicDecorator],
};

export const WebsiteValue = {
  name: 'Website URL (value)',
  args: {
    label: 'موقع إلكتروني',
    type: 'url',
    autoComplete: 'email',
    value: 'https://example.com/',
    inputDir: 'ltr',
    id: 'fece1712-c6ca-4972-b735-0fb5fa705ce7',
  },
  decorators: [arabicDecorator],
};

export const MobilePhoneNumber = {
  name: 'Mobile phone number (empty)',
  args: {
    label: 'رقم الهاتف المحمول',
    type: 'tel',
    autoComplete: 'mobile tel',
    inputDir: 'ltr',
    id: '8f455e89-85be-4911-ad05-b666a8cc2ff7',
  },
  decorators: [arabicDecorator],
};

export const MobilePhoneNumberPlaceholder = {
  name: 'Mobile phone number (right-to-left placeholder)',
  args: {
    label: 'رقم الهاتف المحمول',
    placeholder: 'رقم الهاتف المحمول',
    type: 'tel',
    autoComplete: 'mobile tel',
    inputDir: 'ltr',
    id: '73c41136-aecf-421d-9f06-16caf39b09e7',
    placeholderDir: 'rtl',
    className: 'utrecht-textbox--placeholder-rtl',
  },
  decorators: [arabicDecorator],
  parameters: {
    docs: {
      description: {
        story: `Let op: dit is helaas nog niet gelukt om de placeholder automatisch rechts uit te lijnen, wanneer de tekst van de
placeholder right-to-left is. Op dit moment gebruiken we de volgende class name: \`utrecht-textbox--placeholder-rtl\``,
      },
      status: {
        type: 'WORK IN PROGRESS',
      },
      chromatic: { disableSnapshot: true },
    },
  },
};

export const MobilePhoneNumberLTRPlaceholder = {
  name: 'Mobile phone number (left-to-right placeholder)',
  args: {
    label: 'رقم الهاتف المحمول',
    placeholder: '+1 555 1234',
    type: 'tel',
    autoComplete: 'mobile tel',
    inputDir: 'ltr',
    id: '785ba9e3-6bab-4155-9ae6-6d0af71f7479',
  },
  decorators: [arabicDecorator],
};

export const MobilePhoneNumberValue = {
  name: 'Mobile phone number (value)',
  args: {
    label: 'رقم الهاتف المحمول',
    type: 'tel',
    autoComplete: 'mobile tel',
    value: '+31 6 1234 5678',
    inputDir: 'ltr',
    id: 'c155f4b2-9d08-4690-8639-a4059929dba9',
  },
  decorators: [arabicDecorator],
};
