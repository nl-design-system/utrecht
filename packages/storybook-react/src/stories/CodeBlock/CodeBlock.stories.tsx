import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CodeBlock } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Code block',
  id: 'react-code-block',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: `<!DOCTYPE html>
  <html lang="nl" dir="ltr">
    <head>
      <title>NL Design System</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <h1>NL Design System</h1>
    </body>
  </html>
  `,
};
