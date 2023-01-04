import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading,
  Paragraph,
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
  id: 'react-form-field--checkbox-group',
  component: FormField,
  argTypes: storyArgTypes,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  const { groupDescription, groupId, groupInvalidDescription, groupLabel, groupName, headingLevel, invalid, options } =
    args;
  const groupDescriptionId = groupId && groupDescription ? `${groupId}-description` : undefined;
  const groupInvalidDescriptionId = groupInvalidDescription ? `${groupId}-invalid-description` : undefined;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean).join(' ');
  return (
    <Fieldset id={groupId} aria-describedby={groupDescribedByIds} invalid={invalid}>
      <FieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FieldsetLegend>
      {groupDescriptionId ? (
        <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription>
      ) : undefined}
      {groupInvalidDescriptionId ? (
        <FormFieldDescription id={groupInvalidDescriptionId} status="invalid">
          {groupInvalidDescription}
        </FormFieldDescription>
      ) : undefined}
      {options.map(({ description, checked, id, invalid, invalidDescription, label, name, value }) => {
        const descriptionId = `${id}-description`;
        const invalidDescriptionId = invalid ? `${id}-invalid-description` : undefined;
        return (
          <FormField invalid={invalid} type="checkbox" key={id}>
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
              <FormLabel type="checkbox" htmlFor={id}>
                <Checkbox
                  className="utrecht-form-field__input"
                  id={id}
                  value={value}
                  name={name || groupName}
                  defaultChecked={checked}
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

export const FormFieldCheckboxGroup = Template.bind({});

FormFieldCheckboxGroup.args = {
  groupId: '7adc261b-20ea-41b8-bc5d-8bdcad6feb91',
  groupLabel: 'Hoe wil je dat wij contact opnemen?',
  options: [
    {
      id: '4e054ee1-799e-4608-9055-19d3fc0b88e9',
      name: 'phone',
      value: 'true',
      label: 'Telefoon',
      checked: true,
    },
    {
      id: '238b2692-2460-4bad-93b5-b6def8c3b820',
      name: 'email',
      value: 'true',
      label: 'E-mail',
    },
    {
      id: '6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2',
      name: 'mail',
      value: 'true',
      label: 'Brief',
    },
  ],
};
