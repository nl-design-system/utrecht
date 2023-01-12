import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UtrechtDocument, UtrechtHeading1, UtrechtParagraph } from '@utrecht/component-library-angular';

const documentMeta: Meta<UtrechtDocument> = {
  title: 'Angular Component/Document',
  component: UtrechtDocument,
  id: 'angular-document',
  decorators: [
    moduleMetadata({
      declarations: [UtrechtDocument, UtrechtHeading1, UtrechtParagraph],
      imports: [CommonModule],
    }),
  ],
};

export default documentMeta;

type Story = StoryObj<UtrechtDocument>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<div utrecht-document>
    <utrecht-heading-1>Hello world</utrecht-heading-1>
    <utrecht-paragraph>Lorem ipsum</utrecht-paragraph>
  </div>`,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};
