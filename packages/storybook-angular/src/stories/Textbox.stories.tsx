import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtTextboxAttr } from '@utrecht/component-library-angular';

interface RelevantHTMLAttributes {
  dir?: string;
  required?: boolean;
  value?: string;
}

const radioMeta: Meta<UtrechtTextboxAttr & RelevantHTMLAttributes> = {
  title: 'Angular Component/Textbox',
  id: 'angular-textbox',
  component: UtrechtTextboxAttr,
  argTypes: {
    dir: {
      name: 'dir',
      type: { name: 'string', required: false },
      control: 'select',
      options: ['', 'auto', 'ltr', 'rtl'],
      table: {
        category: 'DOM API',
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
      },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        category: 'DOM API',
      },
    },
  },
};

export default radioMeta;

type Story = StoryObj<UtrechtTextboxAttr & RelevantHTMLAttributes>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<input type="text" [invalid]="invalid" [value]="value" [dir]="dir" [disabled]="disabled" utrecht-textbox />`,
    component: UtrechtTextboxAttr,
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
