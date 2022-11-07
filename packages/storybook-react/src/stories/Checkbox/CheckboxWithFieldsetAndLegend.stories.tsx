import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, Fieldset, FieldsetLegend, FormField, FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, data } from './argTypes';

export default {
  title: 'React Component/Checkbox/With Fieldset And Legend',
  id: 'react-checkbox-with-fieldset-and-legend',
  component: Checkbox,
  argTypes,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <form>
    <Fieldset>
      <FieldsetLegend>Filter op:</FieldsetLegend>
      {data.map(({ id, label, name }) => (
        <FormField key={id}>
          <Checkbox id={id} name={name} {...args} />
          <FormLabel type="checkbox" htmlFor={id}>
            {label}
          </FormLabel>
        </FormField>
      ))}
    </Fieldset>
  </form>
);

export const WithLabel = Template.bind({});
