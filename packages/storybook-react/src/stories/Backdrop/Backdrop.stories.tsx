import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Backdrop } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Backdrop',
  id: 'react-backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <dialog open>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  ),
};
