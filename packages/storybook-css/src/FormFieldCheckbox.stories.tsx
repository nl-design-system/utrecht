/* @license CC0-1.0 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@utrecht/component-library-react';
import { FormFieldCheckbox, type FormFieldCheckboxProps } from '@utrecht/form-field-checkbox-react';
import clsx from 'clsx';
import React from 'react';

const arabicDecorator: Decorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

interface FormFieldCheckboxStoryProps extends FormFieldCheckboxProps {
  headingLevel?: number;
}

const FormFieldCheckboxStory = ({ label, headingLevel, ...args }: FormFieldCheckboxStoryProps) => {
  return <FormFieldCheckbox label={headingLevel ? <Heading level={headingLevel}>{label}</Heading> : label} {...args} />;
};

const meta = {
  title: 'CSS Component/Form Field with Checkbox',
  id: 'css-form-field-checkbox',
  component: FormFieldCheckboxStory,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform-field-checkbox',
    nldesignsystem: 'https://nldesignsystem.nl/checkbox',
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FormFieldCheckboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  name: 'Checkbox with label',
  args: {
    id: '172cd71b-8854-41ee-bcdc-9c8ac856c5d1',
    label: 'Ik ga akkoord met de algemene voorwaarden',
    type: 'checkbox',
  },
};

export const Description = {
  name: 'Checkbox with description',
  args: {
    id: '7cdd4f82-e7eb-4573-bad3-2b520aac504b',
    label: 'Ik ga akkoord met de algemene voorwaarden',
    description: 'U kunt ons echt vertrouwen!',
    type: 'checkbox',
  },
};

export const Invalid = {
  name: 'Checkbox with error message',
  args: {
    id: '6cfb69fc-3a52-4fd8-b8a1-0c2d0dfb11ed',
    label: 'Ik ga akkoord met de algemene voorwaarden',
    description: 'U kunt ons echt vertrouwen!',
    invalid: true,
    required: true,
    errorMessage: 'U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.',
    type: 'checkbox',
  },
};

export const RightToLeft = {
  name: 'Checkbox with right-to-left text',
  args: {
    id: '2d692d60-e111-4582-a487-385cdbd3f994',
    label: 'أوافق على الشروط',
    description: 'يمكنك حقا أن تثق بنا!',
    invalid: true,
    required: true,
    errorMessage: 'يجب أن توافق على الشروط والأحكام وإلا فلن تتمكن من المتابعة.',
    type: 'checkbox',
  },
  decorators: [arabicDecorator],
};

export const RichTextDescription = {
  name: 'Checkbox with rich text description',
  args: {
    ...Default.args,
    id: 'f23a0d30-29b5-4e82-a6e5-7eb83e5cd47a',
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
    errorMessage: (
      <>
        <p className="utrecht-paragraph">Your new password does not meet these requirements:</p>
        <ul className="utrecht-unordered-list">
          <li>Your password is too long.</li>
          <li>Use at least one uppercase letter.</li>
        </ul>
      </>
    ),
    type: 'checkbox',
  },
};
