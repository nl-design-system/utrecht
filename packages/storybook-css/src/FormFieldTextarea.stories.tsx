/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldTextarea, type FormFieldTextareaProps } from '@utrecht/component-library-react';
import { Heading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';

interface FormFieldTextareaStoryProps extends FormFieldTextareaProps {
  headingLevel?: number;
  datalist?: { label: string; value?: string }[];
}

const FormFieldTextareaStory = ({ datalist, label, headingLevel, ...args }: FormFieldTextareaStoryProps) => {
  const datalistId = Array.isArray(datalist) ? `${args.id}-datalist` : undefined;

  return (
    <>
      <FormFieldTextarea
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
  title: 'CSS Component/Form Field with Textarea',
  id: 'css-form-field-textarea',
  component: FormFieldTextareaStory,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fform-field-textbox',
    nldesignsystem: 'https://nldesignsystem.nl/text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof FormFieldTextareaStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  name: 'Textarea with label',
  args: {
    name: 'message',
    label: 'Bericht',
    id: '93051d49-ac02-4a15-b5a2-b424eccb35d6',
  },
};
