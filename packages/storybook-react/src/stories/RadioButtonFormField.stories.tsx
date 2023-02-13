import { Meta, StoryObj } from '@storybook/react';
import { RadioButton, RadioButtonFormField } from '@utrecht/component-library-react';
import readme from '@utrecht/components/form-field/README.md?raw';
import tokensDefinition from '@utrecht/components/form-field/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Radio Button Form Field',
  id: 'react-radio-button-form-field',
  component: RadioButtonFormField,
  argTypes: {
    className: {
      type: {
        name: 'string',
        required: false,
      },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    label: {
      name: 'label',
      description:
        '`label: { htmlFor: string; disabled?: boolean; checked?: boolean; text: string; className?: string;}`',
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    description: {
      name: 'description',
      description: '`description: {id:  string; message: string; className: string | undefined}`',
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    validation: {
      name: 'validation',
      description:
        ' ` description: {state: invalid | valid | warning; id:  string; message: string; className: string | undefined}`',
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-form-field',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof RadioButtonFormField>;

export default meta;

type Story = StoryObj<typeof RadioButtonFormField>;
const inputId = `utrecht-radio-button-A872061E-215F-41AA-8B5E-CCFD769F9775`;
const Template: Story = {
  render: (args) => {
    const descriptionId = args.description ? args.description.id : undefined;
    const validationId = args.validation?.message ? args.validation.id : undefined;

    const ariaDescribedby =
      validationId || descriptionId
        ? `${validationId ? validationId : ''} ${descriptionId ? descriptionId : ''}`
        : undefined;

    return (
      <RadioButtonFormField
        {...args}
        label={{
          htmlFor: inputId,
          text: 'Label',
        }}
      >
        <RadioButton id={inputId} aria-describedby={ariaDescribedby} disabled={args.label?.disabled} />
      </RadioButtonFormField>
    );
  },
};

export const Default: Story = {
  ...Template,
};

export const Disabled: Story = {
  ...Template,
  args: {
    label: {
      htmlFor: inputId,
      text: 'Label',
      disabled: true,
    },
  },
};

export const CustomClassName: Story = {
  ...Template,
  args: {
    label: {
      htmlFor: inputId,
      text: 'Label',
      className: 'fancy-label',
    },
  },
};

export const WithDescription: Story = {
  ...Template,
  args: {
    description: {
      id: 'D3C862EB-D4B6-42C8-B32D-E3635391E2E7',
      message: 'With Form Field Description',
    },
  },
};

export const WithDescriptionCustomClass: Story = {
  ...Template,
  args: {
    description: {
      id: 'D3C862EB-D4B6-42C8-B32D-E3635391E2E7',
      message: 'With Form Field Description Custom CSS Class',
      className: 'custom-class',
    },
  },
};

export const WithDescriptionStatusInvalid: Story = {
  ...Template,
  args: {
    invalid: true,
    validation: {
      id: 'F867D85B-31BF-4242-AD1E-83EBF851A06A',
      message: 'With Form Field Description Status Invalid',
      state: 'invalid',
    },
  },
};

export const WithDescriptionStatusValid: Story = {
  ...Template,
  args: {
    validation: {
      id: 'F867D85B-31BF-4242-AD1E-83EBF851A06A',
      message: 'With Form Field Description Status Valid',
      state: 'valid',
    },
  },
};

export const WithDescriptionStatusWarning: Story = {
  ...Template,
  args: {
    validation: {
      id: 'F867D85B-31BF-4242-AD1E-83EBF851A06A',
      message: 'With Form Field Description Status Warning',
      state: 'warning',
    },
  },
};

export const WithDescriptionStatusCustomClass: Story = {
  ...Template,
  args: {
    invalid: true,
    validation: {
      id: 'F867D85B-31BF-4242-AD1E-83EBF851A06A',
      message: 'With Form Field Description Status Custom CSS Class',
      state: 'invalid',
      className: 'custom-class',
    },
  },
};

export const WithDescriptionStatusAndDescription: Story = {
  ...Template,
  args: {
    invalid: true,
    validation: {
      id: 'F867D85B-31BF-4242-AD1E-83EBF851A06A-error',
      message: 'With Form Field Description Status Custom CSS Class',
      state: 'invalid',
      className: 'custom-class',
    },
    description: {
      id: 'A872061E-215F-41AA-8B5E-CCFD769F9775-description',
      message: 'With Form Field Description',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
