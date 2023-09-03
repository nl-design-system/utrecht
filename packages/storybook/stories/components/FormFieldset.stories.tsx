/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Fieldset, FieldsetLegend, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { FieldsetProps } from '@utrecht/component-library-react/dist/css-module/Fieldset';
import readme from '@utrecht/components/form-fieldset/README.md?raw';
import tokensDefinition from '@utrecht/components/form-fieldset/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { FormFieldsetDiv, FormFieldsetLegendDiv } from './FormFieldsetDiv';
import { designTokenStory } from './util';

interface FormFieldsetStoryProps extends FieldsetProps {
  element?: string | 'div' | 'fieldset';
  legend?: ReactNode;
  legendId?: string;
  invalid?: boolean;
  section?: boolean;
}

const FormFieldsetStory = ({ children, element, legend, legendId, section, ...restProps }: FormFieldsetStoryProps) => {
  if (element === 'div') {
    return (
      <FormFieldsetDiv section={section} {...restProps}>
        {legend && <FormFieldsetLegendDiv id={legendId}>{legend}</FormFieldsetLegendDiv>}
        {children}
      </FormFieldsetDiv>
    );
  } else {
    return (
      <Fieldset className={clsx({ 'utrecht-form-fieldset--section': section })} {...restProps}>
        {legend && <FieldsetLegend id={legendId}>{legend}</FieldsetLegend>}
        {children}
      </Fieldset>
    );
  }
};

const meta = {
  title: 'CSS Component/Form fieldset',
  id: 'css-form-fieldset',
  component: FormFieldsetStory,
  argTypes: {
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    children: {
      description: 'Set the content of the fieldset',
      control: 'text',
    },
    element: {
      description: 'HTML element',
      control: { type: 'select' },
      options: ['div', 'fieldset'],
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    legend: {
      description: 'Set the content of the legend',
      control: 'text',
    },
    role: {
      control: { type: 'select' },
      options: {
        '': undefined,
        group: 'group',
        radiogroup: 'radiogroup',
      },
    },
    section: {
      description: 'Section appearance',
      type: 'boolean',
    },
  },
  args: {
    disabled: false,
    element: 'fieldset',
    children: '',
    invalid: false,
    legend: '',
    section: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-form-fieldset',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormFieldsetStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    children: <Paragraph>Fieldset body</Paragraph>,
    legend: 'Fieldset legend',
  },
  parameters: {
    docs: {
      description: {
        story: `Markup using the \`<fieldset>\` and \`<legend>\` HTML elements, wrapped in \`<div>\` element to support full CSS styling. Styling via \`utrecht-form-fieldset\` class name.
  
  \`<fieldset>\` is preferred as markup, because the automatic labelling via \`<legend>\` is less likely to break than \`aria-labelledby\`, and when the CSS can not be loaded, the visual representation is still clear to the user.`,
      },
    },
  },
};

export const WithoutCSS: Story = {
  args: {
    disabled: false,
    children: <Paragraph>Fieldset body</Paragraph>,
    legend: 'Fieldset legend',
  },
  decorators: [(Story) => <div className="no-style-decorator">{Story()}</div>],
  name: 'Without CSS',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'When the CSS can not be loaded, the visual representation is still clear to the user.',
      },
    },
  },
};

export const Div: Story = {
  args: {
    ...Default.args,
    element: 'div',
    legendId: 'e7d3424c-8034-4494-9a52-110c2e5f6f4c',
  },
  name: '<div> as markup',
  parameters: {
    docs: {
      description: {
        story: `Markup using only \`<div>\` HTML elements. This is not the recommended markup, but the CSS implementation should support this flexibility anyway.

Semantics built into the \`<fieldset>\` and \`<legend>\` elements must now be specified explicitly: \`role="group"\` for the fieldset (but \`role="radiogroup"\` is OK too), and the legend must explicitly be associated with the group using \`aria-labelledby\`.

The \`disabled\` effect from \`<fieldset>\` will no longer work, so all form controls must be set to \`disabled\` individually.`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--disabled` class names.',
      },
    },
  },
};

export const Section: Story = {
  args: {
    ...Default.args,
    section: true,
  },
  name: 'Section',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset` and `.utrecht-form-fieldset--section` class names.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-form-fieldset__legend--invalid` class names.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
