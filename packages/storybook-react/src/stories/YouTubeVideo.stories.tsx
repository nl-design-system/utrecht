import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import tokensDefinition from '@utrecht/youtube-video-css/dist/tokens.mjs';
import readme from '@utrecht/youtube-video-react/README.md?raw';
import { YouTubeVideo } from '@utrecht/youtube-video-react/dist/css.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/YouTube Video',
  id: 'react-youtube-video',
  component: YouTubeVideo,
  args: {},
  argTypes: {
    src: { description: '', control: 'text', defaultValue: { summary: '', required: true } },
    height: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    width: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    autoplay: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    cc_lang_pref: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    cc_load_policy: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    color: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    controls: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    disablekb: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    enablejsapi: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    end: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    fs: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    hl: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    iv_load_policy: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    list: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    listType: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    loop: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    origin: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    playlist: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    playsinline: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    rel: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    start: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
    widget_referrer: { description: '', control: 'text', defaultValue: { summary: '', required: false } },
  },
  parameters: {
    tokensPrefix: 'utrecht-youtube-video',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof YouTubeVideo>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    src: 'https://www.youtube.com/embed/WgA8flJjCZ0',
    title: 'Onderzoek taalswitch. Webcomponenten voor portalen. Alt-teksten richtlijnen',
  },
};

export const Width: Story = {
  name: 'Width',
  args: {
    ...Default.args,
    width: 250,
  },
};

export const Height: Story = {
  name: 'Height',
  args: {
    ...Default.args,
    height: 250,
  },
};

export const WidthHeight: Story = {
  name: 'Width and height',
  args: {
    ...Default.args,
    width: 250,
    height: 250,
  },
};

export const DesignTokens = designTokenStory(meta);
