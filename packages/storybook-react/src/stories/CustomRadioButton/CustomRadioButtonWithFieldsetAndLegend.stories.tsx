import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomRadioButton, Fieldset, FieldsetLegend, FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, data } from './argTypes';

export default {
  title: 'React Component/Custom Radio Button/With Fieldset And Legend',
  id: 'react-custom-radio-button-with-fieldset-and-legend',
  component: CustomRadioButton,
  argTypes,
} as ComponentMeta<typeof CustomRadioButton>;

const Template: ComponentStory<typeof CustomRadioButton> = (args) => (
  <form>
    <Fieldset>
      <FieldsetLegend>Kies locatie</FieldsetLegend>
      {data.map(({ id, label, value }) => (
        <React.Fragment key={id}>
          <CustomRadioButton id={id} name="kiez-locatie" value={value} {...args} />
          <FormLabel type="radio" htmlFor={id}>
            {label}
          </FormLabel>
          <br />
        </React.Fragment>
      ))}
    </Fieldset>
  </form>
);

export const WithLabel = Template.bind({});
