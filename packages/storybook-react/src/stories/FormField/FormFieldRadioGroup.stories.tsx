import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading,
  Paragraph,
  RadioButton,
} from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

const storyArgTypes = {
  ...argTypes,
  headingLevel: {
    description: 'Heading level for the label. Leave empty for a regular label.',
    control: { type: 'select' },
    options: ['', '1', '2', '3', '4', '5', '6'],
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  name: {
    description: 'Name attribute of the <input> elements',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  groupLabel: {
    description: 'Label of the group',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  groupInvalidDescription: {
    description: 'Description for an invalid group',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  groupId: {
    description: 'ID of the group',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  groupDescription: {
    description: 'Description of the group',
    type: { name: 'text', required: false },
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
};

export default {
  title: 'React Component/Form Field',
  id: 'react-form-field--radio-group',
  component: FormField,
  argTypes: storyArgTypes,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  const { groupDescription, groupId, groupInvalidDescription, groupLabel, headingLevel, invalid, options, name } = args;
  const groupDescriptionId = groupDescription ? `${groupId}-description` : undefined;
  const groupInvalidDescriptionId = groupInvalidDescription ? `${groupId}-invalid-description` : undefined;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean);
  const groupDescribedBy = groupDescribedByIds.length ? groupDescribedByIds.join(' ') : undefined;
  return (
    <Fieldset role="radiogroup" id={groupId} aria-describedby={groupDescribedBy} invalid={invalid}>
      <FieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FieldsetLegend>
      {groupDescription ? (
        <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription>
      ) : undefined}
      {groupInvalidDescription ? (
        <FormFieldDescription status="invalid" id={groupInvalidDescriptionId}>
          {groupInvalidDescription}
        </FormFieldDescription>
      ) : undefined}
      {options.map(({ id, label, description, invalidDescription, value }) => {
        const descriptionId = description ? `${id}-description` : undefined;
        const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : undefined;
        return (
          <FormField type="radio" key={id}>
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel type="radio" htmlFor={id}>
                <RadioButton
                  className="utrecht-form-field__input"
                  id={id}
                  value={value}
                  name={name}
                  aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || undefined}
                />
                {label}
              </FormLabel>
            </Paragraph>
            {description ? (
              <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
                {description}
              </FormFieldDescription>
            ) : undefined}
            {invalidDescription ? (
              <FormFieldDescription
                id={invalidDescriptionId}
                status="invalid"
                className="utrecht-form-field__description"
              >
                {invalidDescription}
              </FormFieldDescription>
            ) : undefined}
          </FormField>
        );
      })}
    </Fieldset>
  );
};

export const FormFieldRadioGroup = Template.bind({});

FormFieldRadioGroup.args = {
  name: '828aa90e-0e99-4db9-a5e5-d39f689cf7b3',
  groupLabel: 'Choose your option',
  groupId: 'df861ef1-844a-42df-8365-b54f59474fb8',
  options: [
    {
      id: '800b7f3f-5048-4dcc-8f23-d04fa6ca4199',
      value: '1',
      label: 'Option 1',
    },
    {
      id: 'fbc03e63-42c2-46e3-9acc-183fa64c6dcd',
      value: '2',
      label: 'Option 2',
    },
    {
      id: '62824075-bcc1-4563-a97b-78d1eae3544f',
      value: '3',
      label: 'Option 3',
    },
  ],
};
