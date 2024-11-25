import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-content',
  title: 'Open Formulieren/Content',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'content',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'content',
    extraComponentProperties: {
      html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque a felis ante. Nunc dictum, <b>dui et scelerisque euismod</b>, ex dui sodales magna,
    quis vehicula nulla justo sed urna. <i>Integer maximus tempus tellus</i> vel commodo.
    Orci varius natoque penatibus et magnis <a href="#">dis parturient montes.</a></p>`,
    },
  },
};
