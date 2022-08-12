import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Fieldset, FieldsetLegend, FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, data } from './argTypes';

export default {
  title: 'React.js Component/Radio Button/With Fieldset And Legend',
  id: 'react-radio-button-with-fieldset-and-legend',
  component: RadioButton,
  subcomponents: { FormLabel, FormField },
  argTypes,
} as ComponentMeta<typeof RadioButton>;

export const WithFieldsetAndLegend: ComponentStory<typeof RadioButton> = (args) => (
  <form>
    <Fieldset>
      <FieldsetLegend>Kies locatie</FieldsetLegend>
      {data.map(({ id, label, value }) => (
        <FormField key={id}>
          <RadioButton id={id} name="kiez-locatie" value={value} {...args} />
          <FormLabel type="radio" htmlFor={id}>
            {label}
          </FormLabel>
        </FormField>
      ))}
    </Fieldset>
  </form>
);
