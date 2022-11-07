import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, FormField, FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Checkbox/With Label',
  id: 'react-checkbox-with-label',
  component: Checkbox,
  argTypes,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <FormField>
    <Checkbox {...args} id="1" />
    <FormLabel htmlFor="1" type="checkbox">
      Label
    </FormLabel>
  </FormField>
);

export const WithLabel = Template.bind({});
