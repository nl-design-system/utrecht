import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonGroup } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Button group',
  id: 'react-button-group',
  component: ButtonGroup,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Button appearance="primary-action-button">Save and continue</Button>
      <Button appearance="secondary-action-button">Back</Button>
    </>
  ),
};
