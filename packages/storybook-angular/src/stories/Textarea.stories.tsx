import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtTextareaAttr } from '@utrecht/component-library-angular';

interface RelevantHTMLAttributes {
  dir?: string;
  required?: boolean;
  value?: string;
}

const radioMeta: Meta<UtrechtTextareaAttr & RelevantHTMLAttributes> = {
  title: 'Angular Component/Textarea',
  id: 'angular-textarea',
  component: UtrechtTextareaAttr,
  argTypes: {
    dir: {
      name: 'dir',
      type: { name: 'string', required: false },
      control: 'select',
      options: ['', 'auto', 'ltr', 'rtl'],
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
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
    required: {
      name: 'checked',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
  },
};

export default radioMeta;

type Story = StoryObj<UtrechtTextareaAttr & RelevantHTMLAttributes>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<textarea [invalid]="invalid" [value]="value" [dir]="dir" [disabled]="disabled" utrecht-textarea></textarea>`,
    component: UtrechtTextareaAttr,
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    value: '',
  },
};

export const Value: Story = {
  ...Template,
  args: {
    value: 'Hello world',
  },
};

export const Hover: Story = {
  ...Template,
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    value: '',
  },
};

export const Focus: Story = {
  ...Template,
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    value: '',
  },
};

export const FocusVisible: Story = {
  ...Template,
  parameters: {
    pseudo: { focusVisible: true },
  },
  args: {
    value: '',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
    value: '',
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    invalid: true,
    value: '',
  },
};

export const Required: Story = {
  ...Template,
  args: {
    required: true,
    value: '',
  },
};

export const LeftToRight: Story = {
  ...Template,
  args: {
    dir: 'ltr',
    value: '',
  },
};
