import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Icon',
  id: 'react-icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ color, size, ...args }) => (
  <div style={{ '--utrecht-icon-color': color, '--utrecht-icon-size': `${size}px` }}>
    <Icon {...args} />
  </div>
);

export const WithInlineSVG = Template.bind({});

WithInlineSVG.args = {
  children: (
    <svg viewBox="0 0 1000 1000">
      <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
    </svg>
  ),
  color: 'green',
  size: 32,
};
