/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/grid-css/README.md?raw';
import tokensDefinition from '@utrecht/grid-css/src/tokens.json';
import { Grid, GridCell, GridCellProps } from '@utrecht/grid-react';
import React from 'react';
import { designTokenStory } from './design-token-story';
import './grid-custom-breakpoints.scss';

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
        inlineSize: '100%',
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
  args: {
    spacing: 'md',
    children: (
      <>
        <GridColumn xs={12} sm={6}>
          Column 1
        </GridColumn>
        <GridColumn xs={12} sm={6}>
          Column 2
        </GridColumn>
      </>
    ),
  },
};

export const ResponsiveColumns: Story = {
  name: 'Responsive Columns',
  args: {
    spacing: 'md',
    children: (
      <>
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
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Resize browser window to test responsiveness: Mobile (1 col) → Tablet (2 cols) → Desktop (3-4 cols)',
      },
    },
  },
};

export const EqualColumns: Story = {
  name: 'Equal Width Columns',
  args: {
    spacing: 'md',
    children: Array.from({ length: 6 }, (_, i) => (
      <GridColumn key={i} xs={2}>
        Col {i + 1}
      </GridColumn>
    )),
  },
};

export const VariableWidths: Story = {
  name: 'Variable Column Widths',
  args: {
    spacing: 'md',
    children: (
      <>
        <GridColumn xs={3}>3 cols</GridColumn>
        <GridColumn xs={6}>6 cols</GridColumn>
        <GridColumn xs={3}>3 cols</GridColumn>
        <GridColumn xs={4}>4 cols</GridColumn>
        <GridColumn xs={8}>8 cols</GridColumn>
      </>
    ),
  },
};

export const SpacingSmall: Story = {
  name: 'Spacing - Small',
  args: {
    spacing: 'sm',
    children: (
      <>
        <GridColumn xs={4} color="#ffcccb">
          Small
        </GridColumn>
        <GridColumn xs={4} color="#add8e6">
          Small
        </GridColumn>
        <GridColumn xs={4} color="#90ee90">
          Small
        </GridColumn>
      </>
    ),
  },
};

export const SpacingMedium: Story = {
  name: 'Spacing - Medium',
  args: {
    spacing: 'md',
    children: (
      <>
        <GridColumn xs={4} color="#ffcccb">
          Medium
        </GridColumn>
        <GridColumn xs={4} color="#add8e6">
          Medium
        </GridColumn>
        <GridColumn xs={4} color="#90ee90">
          Medium
        </GridColumn>
      </>
    ),
  },
};

export const SpacingLarge: Story = {
  name: 'Spacing - Large',
  args: {
    spacing: 'lg',
    children: (
      <>
        <GridColumn xs={4} color="#ffcccb">
          Large
        </GridColumn>
        <GridColumn xs={4} color="#add8e6">
          Large
        </GridColumn>
        <GridColumn xs={4} color="#90ee90">
          Large
        </GridColumn>
      </>
    ),
  },
};

export const AlignmentCenter: Story = {
  name: 'Alignment - Horizontal Center',
  args: {
    spacing: 'md',
    justifyContent: 'center',
    children: (
      <>
        <GridColumn xs={3} color="#e8f4fd">
          🎯 Centered
        </GridColumn>
        <GridColumn xs={3} color="#e8f4fd">
          🎯 Centered
        </GridColumn>
      </>
    ),
  },
};

export const AlignmentSpaceBetween: Story = {
  name: 'Alignment - Space Between',
  args: {
    spacing: 'md',
    justifyContent: 'space-between',
    children: (
      <>
        <GridColumn xs={3} color="#fff2e8">
          ⬅️ Left
        </GridColumn>
        <GridColumn xs={3} color="#fff2e8">
          Right ➡️
        </GridColumn>
      </>
    ),
  },
};

export const AlignmentFlexEnd: Story = {
  name: 'Alignment - Flex End',
  args: {
    spacing: 'md',
    justifyContent: 'flex-end',
    children: (
      <>
        <GridColumn xs={3} color="#f0e8ff">
          Right ➡️
        </GridColumn>
        <GridColumn xs={3} color="#f0e8ff">
          Right ➡️
        </GridColumn>
      </>
    ),
  },
};

export const AlignmentVerticalCenter: Story = {
  name: 'Alignment - Vertical Center',
  args: {
    spacing: 'md',
    alignItems: 'center',
    children: (
      <>
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
      </>
    ),
  },
};

export const AlignmentCombined: Story = {
  name: 'Alignment - Combined Center',
  args: {
    spacing: 'md',
    justifyContent: 'center',
    alignItems: 'center',
    children: (
      <>
        <GridColumn xs={3} color="#f8e8ff">
          ✨ Perfect
        </GridColumn>
        <GridColumn xs={3} color="#f8e8ff">
          ✨ Center
        </GridColumn>
      </>
    ),
  },
};

export const WithOrder: Story = {
  name: 'Column Ordering',
  args: {
    spacing: 'md',
    children: (
      <>
        <GridColumn xs={4} order={3} color="#ffcccb">
          First in DOM (order: 3)
        </GridColumn>
        <GridColumn xs={4} order={1} color="#add8e6">
          Second in DOM (order: 1)
        </GridColumn>
        <GridColumn xs={4} order={2} color="#90ee90">
          Third in DOM (order: 2)
        </GridColumn>
      </>
    ),
  },
};

export const CustomBreakpoints: Story = {
  name: 'Custom Breakpoints (SCSS Configuration)',
  render: () => (
    <div className="utrecht-grid-custom">
      <Grid spacing="md">
        <GridColumn xs={12} sm={6} md={3} color="#e8f4fd">
          sm: 400px (custom)
        </GridColumn>
        <GridColumn xs={12} sm={6} md={3} color="#ffe8e8">
          md: 1024px (custom)
        </GridColumn>
        <GridColumn xs={12} sm={6} md={3} color="#e8f5e8">
          lg: 1440px (custom)
        </GridColumn>
        <GridColumn xs={12} sm={6} md={3} color="#fff8e8">
          Resize to test
        </GridColumn>
      </Grid>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This story uses custom breakpoints: sm=400px, md=1024px, lg=1440px (vs defaults: sm=600px, md=960px, lg=1280px). Resize browser to see the difference.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
