/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { IndexCharNav, IndexCharNavProps } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/index-char-nav/README.md?raw';
import tokensDefinition from '@utrecht/components/index-char-nav/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';
import '@utrecht/components/index-char-nav/css/index.scss';

const greekAlphabet = 'Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω';
const latinAlphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
const ukranianAlphabet = 'А	Б	В	Г	Ґ	Д	Е	Є	Ж	З	И І	Ї	Й	К	Л	М	Н	О	П	Р	С Т	У	Ф	Х	Ц	Ч	Ш	Щ	Ь	Ю	Я';

interface IndexCharNavStoryProps extends IndexCharNavProps {
  characters: any[] | string;
  availability?: string | 'none' | 'mixed' | 'all';
}

const IndexCharNavStory = ({ characters, availability, ...restProps }: IndexCharNavStoryProps) => {
  let charactersData =
    typeof characters === 'string'
      ? characters
          .trim()
          .split(/\s+/g)
          .map((char) => ({
            char,
            href: `./${char.toLocaleLowerCase()}/`,
          }))
      : characters;

  if (availability === 'none') {
    charactersData = charactersData.map(({ ...props }) => ({
      ...props,
      disabled: true,
    }));
  } else if (availability === 'mixed') {
    charactersData = charactersData.map(({ ...props }, index) => ({
      ...props,
      disabled: index % 3 === 0,
    }));
  }

  return <IndexCharNav characters={charactersData} {...restProps} />;
};

const meta = {
  title: 'CSS Component/Index character navigation',
  id: 'css-index-char-nav',
  component: IndexCharNavStory,
  argTypes: {
    availability: {
      control: { type: 'radio' },
      options: {
        all: 'all',
        none: 'none',
        mixed: 'mixed',
      },
    },
    currentChar: {
      control: 'text',
      description: 'The current character.',
    },
    characters: {
      control: 'text',
      description: 'Space separated list of index characters.',
    },
    component: {
      options: ['link', 'button'],
      control: { type: 'radio' },
      description: 'The component to use for the navigation.',
    },
  },
  args: {
    availability: 'all',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-index-char-nav',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof IndexCharNavStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    characters: latinAlphabet,
    component: 'link',
  },
  name: 'Link',
};

export const LinkCurrent: Story = {
  args: {
    characters: latinAlphabet,
    component: 'link',
    currentChar: 'A',
  },
  name: 'Current page',
};

export const LinkDisabled: Story = {
  args: {
    availability: 'none',
    characters: latinAlphabet,
    component: 'link',
  },
  name: 'Disabled link',
};

export const LinkMixed: Story = {
  args: {
    availability: 'mixed',
    characters: latinAlphabet,
    component: 'link',
  },
  name: 'Links with mixed availability',
};

export const Button: Story = {
  args: {
    characters: latinAlphabet,
    component: 'button',
    onLinkClick: (char) => char,
  },
  name: 'Button',
};

export const ButtonPressed: Story = {
  args: {
    currentChar: 'A',
    characters: latinAlphabet,
    component: 'button',
  },
  name: 'Pressed button',
};

export const ButtonMixed: Story = {
  args: {
    availability: 'mixed',
    characters: latinAlphabet,
    component: 'button',
    onLinkClick: (char) => char,
  },
  name: 'Buttons with mixed availability',
};

export const ButtonDisabled: Story = {
  args: {
    availability: 'none',
    characters: latinAlphabet,
    component: 'button',
  },
  name: 'Disabled button',
};

export const Greek: Story = {
  args: {
    characters: greekAlphabet,
    component: 'button',
  },
  decorators: [(Story) => <div lang="el">{Story()}</div>],
  name: 'Greek index characters',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Ukranian: Story = {
  args: {
    characters: ukranianAlphabet,
    component: 'button',
  },
  decorators: [(Story) => <div lang="uk">{Story()}</div>],
  name: 'Ukranian index characters',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const DesignTokens = designTokenStory(meta);
