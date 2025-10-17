/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/grid-css/README.md?raw';
import tokensDefinition from '@utrecht/grid-css/src/tokens.json';
import { Grid, GridCell, GridCellProps } from '@utrecht/grid-react';
import React from 'react';
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
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '0.875rem',
        fontWeight: '500',
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
  render: (args) => (
    <Grid {...args}>
      <GridColumn xs={12} sm={6}>
        Column 1
      </GridColumn>
      <GridColumn xs={12} sm={6}>
        Column 2
      </GridColumn>
    </Grid>
  ),
};

export const ResponsiveColumns: Story = {
  name: 'Responsive Columns',
  render: (args) => (
    <div>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
        Resize browser window to test responsiveness: Mobile (1 col) → Tablet (2 cols) → Desktop (3-4 cols)
      </p>
      <Grid {...args}>
        <GridColumn xs={12} sm={6} md={4} lg={3} color="#ffcccb">
          xs=12 sm=6 md=4 lg=3
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3} color="#add8e6">
          xs=12 sm=6 md=4 lg=3
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3} color="#90ee90">
          xs=12 sm=6 md=4 lg=3
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3} color="#ffd700">
          xs=12 sm=6 md=4 lg=3
        </GridColumn>
      </Grid>
    </div>
  ),
};

export const EqualColumns: Story = {
  name: 'Equal Width Columns',
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <GridColumn key={i} xs={2}>
          Col {i + 1}
        </GridColumn>
      ))}
    </Grid>
  ),
};

export const VariableWidths: Story = {
  name: 'Variable Column Widths',
  render: (args) => (
    <Grid {...args}>
      <GridColumn xs={3}>3 cols</GridColumn>
      <GridColumn xs={6}>6 cols</GridColumn>
      <GridColumn xs={3}>3 cols</GridColumn>
      <GridColumn xs={4}>4 cols</GridColumn>
      <GridColumn xs={8}>8 cols</GridColumn>
    </Grid>
  ),
};

export const WithSpacing: Story = {
  name: 'Different Spacing',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Small Spacing</h3>
        <Grid spacing="sm">
          <GridColumn xs={4} color="#ffcccb">
            Small
          </GridColumn>
          <GridColumn xs={4} color="#add8e6">
            Small
          </GridColumn>
          <GridColumn xs={4} color="#90ee90">
            Small
          </GridColumn>
        </Grid>
      </div>
      <div>
        <h3>Medium Spacing</h3>
        <Grid spacing="md">
          <GridColumn xs={4} color="#ffcccb">
            Medium
          </GridColumn>
          <GridColumn xs={4} color="#add8e6">
            Medium
          </GridColumn>
          <GridColumn xs={4} color="#90ee90">
            Medium
          </GridColumn>
        </Grid>
      </div>
      <div>
        <h3>Large Spacing</h3>
        <Grid spacing="lg">
          <GridColumn xs={4} color="#ffcccb">
            Large
          </GridColumn>
          <GridColumn xs={4} color="#add8e6">
            Large
          </GridColumn>
          <GridColumn xs={4} color="#90ee90">
            Large
          </GridColumn>
        </Grid>
      </div>
    </div>
  ),
};

export const WithAlignment: Story = {
  name: 'Alignment Options',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Horizontal Alignment - Center</h3>
        <div style={{ border: '2px dashed #ddd', padding: '1rem', borderRadius: '8px' }}>
          <Grid justifyContent="center">
            <GridColumn xs={3} color="#e8f4fd">
              🎯 Centered
            </GridColumn>
            <GridColumn xs={3} color="#e8f4fd">
              🎯 Centered
            </GridColumn>
          </Grid>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Horizontal Alignment - Space Between</h3>
        <div style={{ border: '2px dashed #ddd', padding: '1rem', borderRadius: '8px' }}>
          <Grid justifyContent="space-between">
            <GridColumn xs={3} color="#fff2e8">
              ⬅️ Left
            </GridColumn>
            <GridColumn xs={3} color="#fff2e8">
              Right ➡️
            </GridColumn>
          </Grid>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Horizontal Alignment - Flex End</h3>
        <div style={{ border: '2px dashed #ddd', padding: '1rem', borderRadius: '8px' }}>
          <Grid justifyContent="flex-end">
            <GridColumn xs={3} color="#f0e8ff">
              Right ➡️
            </GridColumn>
            <GridColumn xs={3} color="#f0e8ff">
              Right ➡️
            </GridColumn>
          </Grid>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Vertical Alignment - Center</h3>
        <div style={{ border: '2px dashed #ddd', padding: '1rem', borderRadius: '8px', minHeight: '120px' }}>
          <Grid alignItems="center">
            <GridColumn xs={4} minHeight="80px" color="#e8f5e8">
              📏 Tall content
              <br />
              Multiple lines
              <br />
              More height
            </GridColumn>
            <GridColumn xs={4} color="#ffe8e8">
              🔄 Centered
            </GridColumn>
            <GridColumn xs={4} color="#fff8e8">
              ⚖️ Aligned
            </GridColumn>
          </Grid>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Combined: Center + Vertical Center</h3>
        <div style={{ border: '2px dashed #ddd', padding: '1rem', borderRadius: '8px', minHeight: '120px' }}>
          <Grid justifyContent="center" alignItems="center">
            <GridColumn xs={3} color="#f8e8ff">
              ✨ Perfect
            </GridColumn>
            <GridColumn xs={3} color="#f8e8ff">
              ✨ Center
            </GridColumn>
          </Grid>
        </div>
      </div>
    </div>
  ),
};

export const WithOrder: Story = {
  name: 'Column Ordering',
  render: (args) => (
    <Grid {...args}>
      <GridColumn xs={4} order={3} color="#ffcccb">
        First in DOM (order: 3)
      </GridColumn>
      <GridColumn xs={4} order={1} color="#add8e6">
        Second in DOM (order: 1)
      </GridColumn>
      <GridColumn xs={4} order={2} color="#90ee90">
        Third in DOM (order: 2)
      </GridColumn>
    </Grid>
  ),
};

export const DesignTokens = designTokenStory(meta);
