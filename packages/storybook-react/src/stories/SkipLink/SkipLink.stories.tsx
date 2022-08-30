import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkipLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

// `will-change: transform` will create a "containing block" that will contain `position: fixed` elements.
const ExampleViewport = (Story) => (
  <div
    style={{
      minHeight: '240px',
      minWidth: '320px',
      position: 'relative',
      willChange: 'transform',
    }}
  >
    {Story()}
  </div>
);
ExampleViewport.displayName = 'ExampleViewport';

export default {
  title: 'React.js Component/Skip link',
  id: 'react-skip-link',
  component: SkipLink,
  argTypes,
  decorators: [ExampleViewport],
} as ComponentMeta<typeof SkipLink>;

const Template: ComponentStory<typeof SkipLink> = (args) => <SkipLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '#main',
  children: 'Skip to main content',
};

// Since skip link is not visible by default, simulate focus state by default
Default.parameters = {
  pseudo: {
    focus: true,
    focusVisible: true,
  },
};
