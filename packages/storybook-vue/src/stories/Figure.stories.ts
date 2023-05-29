import type { Meta, StoryObj } from '@storybook/vue3';
import { Figure, FigureCaption, Image } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/figure/README.md?raw';
import tokens from '@utrecht/components/figure/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-figure',
  title: 'Vue.js Component/Figure',
  component: Figure,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      control: { type: 'text' },
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    caption: {
      name: 'caption',
      control: { type: 'text' },
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { Figure, FigureCaption, Image },
    template: `<Figure v-bind="$props"><slot></slot><FigureCaption v-html="args.caption"></FigureCaption></Figure>`,
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
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Figure',
  component: Figure,
  components: { Figure, FigureCaption, Image },
  args: {
    slot: `<Image
        src="example/photo-nijntje-vuelta.jpg"
        width="2048"
        height="1536"
        :photo="true"
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />`,
    caption: `Fotograaf: Gemeente Utrecht<br />
              Titel: Nijntje Vuelta<br />
              Locatie: Stadsplateau<br />
              Geplaatst: 17 augustus 2022<br />
              <Link
                title='&apos;Nijntje / Vuelta&apos; op Flickr'
                external
                href='https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/'>
                Bron: Flickr
              </Link>`,
  },
});
