/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
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

const meta = {
  title: 'CSS Component/Form Field with Textbox',
  id: 'css-form-field-textbox',
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

export const Default = {
  name: 'Textbox with label',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    id: '172cd71b-8854-41ee-bcdc-9c8ac856c5d1',
  },
};
export const HeadingLabel = {
  name: 'Heading as label',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    id: '5657eb52-c943-4106-85dd-9a3926a9155a',
    headingLevel: 1,
  },
};

export const Description = {
  name: 'description',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    id: 'c2d1cc9c-4ec4-4806-8fc7-caa66fc4986a',
    description: 'Do not use any emoji characters.',
  },
};

export const Invalid = {
  name: 'invalid',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'I ❤️ NY',
    id: '5da58629-c3d5-4fad-bb7c-eca1f8df972e',
    description: 'Do not use any emoji characters.',
    invalid: true,
    invalidDescription: 'Remove the emoji characters from the subject.',
  },
};

export const RichTextDescription = {
  name: 'Rich text description',
  args: {
    name: 'subject',
    label: 'Password',
    id: 'fb436ace-88ff-4a38-b7ca-b03bbf43a7c0',
    autoComplete: 'new-password',
    description: (
      <>
        <p className="utrecht-paragraph">Your new password needs to meet these requirements:</p>
        <ul className="utrecht-unordered-list">
          <li>At least 1 character</li>
          <li>No more than 2 characters</li>
          <li>Use at least one uppercase letter and one lowercase letter.</li>
        </ul>
      </>
    ),
    invalidDescription: (
      <>
        <p className="utrecht-paragraph">Your new password does not meet these requirements:</p>
        <ul className="utrecht-unordered-list">
          <li>Your password is too long.</li>
          <li>Use at least one uppercase letter.</li>
        </ul>
      </>
    ),
  },
};

export const Naam = {
  name: 'Naam',
  args: {
    type: 'text',
    label: 'Naam',
    minLength: 1,
    maxLength: 412, // 200 + 1 + 10 + 1 + 200,
    required: true,
    autoComplete: 'name',
    spellcheck: 'false',
    id: '4c6d647b-bacd-437f-b160-6304353ddbdd',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Voornaam = {
  name: 'Voornaam',
  args: {
    control: 'text',
    type: 'text',
    label: 'Voornaam',
    required: true,
    minLength: 1,
    maxLength: 200,
    spellcheck: 'false',
    autoComplete: 'given-name',
    id: 'af0084ba-cef6-489d-a876-1da92277624c',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Voornamen = {
  name: 'Voornamen',
  args: {
    control: 'text',
    type: 'text',
    label: 'Voornaam (1 of meerdere)',
    minLength: 1,
    maxLength: 200,
    spellcheck: 'false',
    required: true,
    id: '8ad75c24-32b9-4558-9057-9b5b327f9b70',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Achternaam = {
  name: 'Achternaam',
  args: {
    control: 'text',
    type: 'text',
    label: 'Achternaam',
    minLength: 1,
    maxLength: 200,
    required: true,
    spellcheck: 'false',
    autoComplete: 'family-name',
    id: '12719913-e6d1-43a9-8068-239f609abea0',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Voorvoegsel = {
  name: 'Voorvoegsel',
  args: {
    control: 'text',
    type: 'text',
    label: 'Voorvoegsel',
    minLength: 1,
    maxLength: 10,
    required: false,
    spellcheck: 'false',
    datalist: voorvoegsels.map((item) => ({ label: item })),
    id: 'ac0c98d6-2ad1-453e-9e06-6b26a5f61546',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Postcode = {
  name: 'Postcode',
  args: {
    control: 'text',
    type: 'text',
    label: 'Postcode',
    spellcheck: 'false',
    autoComplete: 'postal-code',
    id: '16e1fde4-94e2-4848-9cae-27679070bc93',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Gebruikersnaam = {
  name: 'Gebruikersnaam',
  args: {
    control: 'text',
    type: 'text',
    label: 'Gebruikersnaam',
    spellcheck: 'false',
    autoComplete: 'username',
    id: '6b4dc32d-1a12-496b-bfe6-19470f48f156',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Wachtwoord = {
  name: 'Wachtwoord',
  args: {
    control: 'text',
    type: 'password',
    label: 'Wachtwoord',
    autoComplete: 'current-password',
    spellcheck: 'false',
    id: '0e462594-7b98-4755-ad8e-3a661df6da05',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Email = {
  name: 'Email',
  args: {
    control: 'text',
    type: 'email',
    label: 'E-mailadres',
    description: 'Wij sturen op dit e-mailadres de ontvangstbevestiging en we nemen via e-mail contact met u op.',
    required: true,
    autoComplete: 'email',
    spellcheck: 'false',
    id: 'ba119f18-ce9d-42d7-8d32-cdfbc6531137',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Telefoonnummer = {
  name: 'Telefoonnummer',
  args: {
    control: 'text',
    type: 'tel',
    label: 'Telefoonnummer',
    description: 'Wij bellen u als de afspraak onverwacht niet door kan gaan. We sturen dan ook een e-mail.',
    autoComplete: 'tel',
    spellcheck: 'false',
    id: '88b391aa-7b6b-4e86-8033-e810ee4e847e',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const NieuwWachtwoord = {
  name: 'NieuwWachtwoord',
  args: {
    control: 'text',
    type: 'password',
    label: 'Nieuw wachtwoord',
    autoComplete: 'new-password',
    spellcheck: 'false',
    id: '6dcec3ba-eb91-4173-af55-1b229688d3f7',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
