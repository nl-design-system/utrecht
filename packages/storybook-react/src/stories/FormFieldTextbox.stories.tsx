import { Meta, StoryObj } from '@storybook/react';
import { FormFieldTextbox } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import FormFieldMeta from './FormField.stories';

const storyArgTypes = {
  ...FormFieldMeta.argTypes,
  required: {
    description: 'Required',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  inputRequired: {
    description: 'Required (HTML validation)',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  readOnly: {
    description: 'Read-only',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  name: {
    description: 'Name',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  defaultValue: {
    description: 'Value',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  value: {
    description: 'Value',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  placeholder: {
    description: 'Placeholder',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  label: {
    name: 'label',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
  errorMessage: {
    name: 'errorMessage',
    description: 'Description for invalid input',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
  errorMessagePosition: {
    name: 'errorMessagePosition',
    description: 'Position of the error message in regards to the form control',
    type: { name: 'text', required: false },
    control: 'select',
    options: ['', 'after', 'before'],
    table: {
      defaultValue: { summary: '' },
      category: 'API',
    },
  },
  description: {
    description: 'Description',
    type: { name: 'text', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  autoComplete: {
    description: 'Autocomplete',
    control: 'select',
    options: [
      '',
      'additional-name',
      'address-level1',
      'address-level2',
      'address-level3',
      'address-level4',
      'address-line1',
      'address-line2',
      'address-line3',
      'bday',
      'bday-day',
      'bday-month',
      'bday-year',
      'cc-additional-name',
      'cc-csc',
      'cc-exp',
      'cc-exp-month',
      'cc-exp-year',
      'cc-family-name',
      'cc-given-name',
      'cc-name',
      'cc-number',
      'cc-type',
      'country',
      'country-name',
      'current-password',
      'email',
      'family-name',
      'fax',
      'given-name',
      'home',
      'honorific-prefix',
      'honorific-suffix',
      'impp',
      'language',
      'mobile',
      'name',
      'new-password',
      'nickname',
      'one-time-code',
      'organization',
      'organization-title',
      'pager',
      'photo',
      'postal-code',
      'sex',
      'street-address',
      'tel',
      'tel-area-code',
      'tel-country-code',
      'tel-extension',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-national',
      'transaction-amount',
      'transaction-currency',
      'url',
      'username',
      'work',
    ],
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  minLength: {
    description: 'Set the minimum length of the input text',
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  maxLength: {
    description: 'Set the maximum length of the input text',
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  min: {
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  max: {
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  step: {
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  size: {
    control: 'number',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  type: {
    description: 'Type',
    control: 'select',
    options: {
      '': null,
      email: 'email',
      number: 'number',
      password: 'password',
      search: 'search',
      tel: 'tel',
      text: 'text',
      url: 'url',
    },
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  dir: {
    description: 'Text direction',
    control: { type: 'select' },
    options: {
      '': undefined,
      auto: 'auto',
      ltr: 'ltr',
      rtl: 'rtl',
    },
    table: {
      category: 'DOM',
      defaultValue: { summary: '' },
    },
  },
  inputDir: {
    description: 'Text direction',
    control: { type: 'select' },
    options: {
      '': undefined,
      auto: 'auto',
      ltr: 'ltr',
      rtl: 'rtl',
    },
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
};

const meta = {
  title: 'React Component/Form Field with textbox',
  id: 'react-form-field-textbox',
  component: FormFieldTextbox,
  argTypes: storyArgTypes,
  args: {
    description: '',
    disabled: false,
    invalid: false,
    errorMessage: '',
    errorMessagePosition: '',
    label: '',
    name: '',
    defaultValue: '',
    value: '',
    required: false,
    inputRequired: false,
    type: undefined,
    autoComplete: '',
    readOnly: false,
    dir: undefined,
    inputDir: undefined,
    placeholder: '',
    size: undefined,
  },
  render: (args) => {
    const {
      description,
      disabled,
      id,
      invalid,
      errorMessage,
      errorMessagePosition,
      status,
      inputRequired,
      label,
      name,
      required,
      defaultValue,
      type,
      autoComplete,
      minLength,
      maxLength,
      readOnly,
      dir,
      inputDir,
      placeholder,
      value,
      size,
    } = args;
    return (
      <FormFieldTextbox
        id={id || undefined}
        description={description || undefined}
        disabled={disabled}
        errorMessage={errorMessage || undefined}
        errorMessagePosition={errorMessagePosition || undefined}
        status={status || undefined}
        invalid={invalid}
        label={label || undefined}
        name={name || undefined}
        required={required}
        inputRequired={inputRequired}
        defaultValue={defaultValue || undefined}
        value={value || undefined}
        type={type || undefined}
        autoComplete={autoComplete || undefined}
        minLength={minLength || undefined}
        maxLength={maxLength || undefined}
        readOnly={readOnly || undefined}
        inputDir={inputDir || undefined}
        dir={dir || undefined}
        placeholder={placeholder || undefined}
        size={size || undefined}
      />
    );
  },
} satisfies Meta<typeof FormFieldTextbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
  },
};

export const Description: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.',
  },
};

export const ErrorMessage: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true,
  },
};

export const ErrorMessagePositionAfter: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    errorMessagePosition: 'after',
    invalid: true,
  },
};

export const ErrorMessagePositionBefore: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    errorMessagePosition: 'before',
    invalid: true,
  },
};

export const Status: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.',
  },
};

export const Password: Story = {
  args: {
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
    autoComplete: 'current-password',
  },
};

export const Disabled: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!',
  },
};

export const Required: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true,
  },
};

export const InputRequired: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true,
  },
};

export const Placeholder: Story = {
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...',
  },
};

export const LeftToRightInput: Story = {
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr',
  },
  name: 'Left-to-right input',
};
