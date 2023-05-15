import type { Meta, StoryObj } from '@storybook/vue3';
import { Image } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/form-field/README.md?raw';
import tokens from '@utrecht/components/form-field/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Image> = {
  id: 'vue-image',
  title: 'Vue.js Component/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    photo: {
      name: 'photo',
      control: { type: 'boolean' },
      type: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args: any) => ({
    setup() {
      return { args };
    },
    components: { Image },
    template: `<Image v-bind="$props" />`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-emphasis',
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Image',
  component: Image,
  args: {
    alt: 'Wapen van de Gemeente Utrecht',
    height: 100,
    src: 'logo.svg',
    width: 192,
    photo: false,
  },
});

export const Photo: Story = createStory(meta, {
  name: 'Photo',
  component: Image,
  args: {
    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
    height: 1536,
    photo: true,
    src: 'example/photo-nijntje-vuelta.jpg',
    width: 2048,
  },
});
