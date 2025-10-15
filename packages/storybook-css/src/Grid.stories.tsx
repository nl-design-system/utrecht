/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/grid-css/README.md?raw';
import tokensDefinition from '@utrecht/grid-css/src/tokens.json';
import React from 'react';
import { Grid, GridCell, GridCellProps } from './Grid';
import { designTokenStory } from './design-token-story';

const GridColumn: React.FC<
  GridCellProps & {
    children?: React.ReactNode;
    color?: string;
    minHeight?: string;
  }
> = ({ children, color = '#e3e3e3', minHeight, ...gridProps }) => (
  <GridCell {...gridProps}>
    <div
      style={{
        padding: '1rem',
        background: color,
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  </GridCell>
);

const meta = {
  title: 'CSS Component/Grid',
  id: 'css-grid',
  component: Grid,
  argTypes: {
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing between grid cells',
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
      description: 'Horizontal alignment of grid cells',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end'],
      description: 'Vertical alignment of grid cells',
    },
  },
  args: {
    spacing: 'md',
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fgrid',
    figma:
      'https://www.figma.com/design/RW5IlUJIQa64hga1fELyQZ/Local---Gemeente-Utrecht---Bibliotheek?node-id=49-1030&p=f',
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-grid',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    console.log(args);
    return (
      <Grid {...args}>
        <GridColumn sm={6} md={12}>
          Column 1
        </GridColumn>
        <GridColumn sm={6} md={12}>
          Column 2
        </GridColumn>
      </Grid>
    );
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: 'sm',
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4].map((num) => (
        <GridColumn key={num} xs={6} md={3}>
          {num}
        </GridColumn>
      ))}
    </Grid>
  ),
};

export const DesignTokens = designTokenStory(meta);
