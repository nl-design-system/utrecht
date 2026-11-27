import { Controls, Description, IconGallery, IconItem, Primary, Subheading, Title } from '@storybook/addon-docs/blocks';
import { Meta, StoryObj } from '@storybook/react-vite';
// Loads every icon: import this only in stories that offer an icon control
import * as icons from '@utrecht/icons-react';
import React from 'react';
import { Icon } from '../../../component-library-react/src/index.js';

interface IconsStoryProps {
  icon: keyof typeof icons;
  color?: string;
  size?: number;
}

const meta = {
  title: 'React Component/Icons',
  id: 'react-icons',
  args: {
    icon: 'IconArrow',
    color: '#007DAD',
    size: 32,
  },
  argTypes: {
    icon: {
      description: 'Icoon uit `@utrecht/icons-react`',
      control: { type: 'select' },
      options: Object.keys(icons),
    },
    color: {
      description: 'Kleur van het icoon, met `--utrecht-icon-color`',
      control: 'color',
    },
    size: {
      description: 'Grootte van het icoon in pixels, met `--utrecht-icon-size`',
      control: 'number',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Elk icoon is een eigen React component uit \`@utrecht/icons-react\`. Je app laadt alleen de iconen die je importeert.

\`\`\`tsx
import { Icon } from '@utrecht/component-library-react';
import { IconArrow } from '@utrecht/icons-react';

<Icon>
  <IconArrow />
</Icon>;
\`\`\``,
      },
      // The autodocs page with an overview of all icons, made with the `IconGallery` doc block
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Subheading>Overzicht</Subheading>
          <IconGallery>
            {Object.entries(icons).map(([name, SvgIcon]) => (
              <IconItem key={name} name={name}>
                <SvgIcon />
              </IconItem>
            ))}
          </IconGallery>
        </>
      ),
    },
  },
  render: ({ icon, color, size }) => {
    const SvgIcon = icons[icon];
    return (
      <div style={{ '--utrecht-icon-color': color, '--utrecht-icon-size': size ? `${size}px` : undefined }}>
        <Icon>
          <SvgIcon />
        </Icon>
      </div>
    );
  },
} satisfies Meta<IconsStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
