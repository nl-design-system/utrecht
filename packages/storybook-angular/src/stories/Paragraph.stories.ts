import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtParagraph } from '@utrecht/component-library-angular';

const paragraphMeta: Meta<UtrechtParagraph> = {
  title: 'Angular Component/Paragraph',
  id: 'angular-paragraph',
  component: UtrechtParagraph,
  argTypes: {
    lead: {
      name: 'lead',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
  },
};

export default paragraphMeta;

export type Story = StoryObj<UtrechtParagraph>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<p utrecht-paragraph [lead]="lead">
    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
    </p>`,
    component: UtrechtParagraph,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Lead: Story = {
  ...Template,
  args: {
    lead: true,
  },
};
