/* @license CC0-1.0 */

import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { IndexCharNav } from '@utrecht/component-library-react';
import readme from '@utrecht/components/index-char-nav/README.md?raw';
import tokensDefinition from '@utrecht/components/index-char-nav/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/index-char-nav/css/index.scss';

const latinAlphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
const greekAlphabet = 'Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω';
const ukranianAlphabet = 'А	Б	В	Г	Ґ	Д	Е	Є	Ж	З	И І	Ї	Й	К	Л	М	Н	О	П	Р	С Т	У	Ф	Х	Ц	Ч	Ш	Щ	Ь	Ю	Я';

const createCharacters = (str: string) =>
  str
    .trim()
    .split(/\s+/g)
    .map((char) => ({
      char,
      href: `./${char.toLocaleLowerCase()}/`,
    }));

const latinCharacters = createCharacters(latinAlphabet);
const greekCharacters = createCharacters(greekAlphabet);
const ukranianCharacters = createCharacters(ukranianAlphabet);

const noAvailability = (characters: any[]) =>
  characters.map(({ ...props }) => ({
    ...props,
    disabled: true,
  }));

const mixedAvailability = (characters: any[]) =>
  characters.map(({ ...props }, index) => ({
    ...props,
    disabled: index % 3 === 0,
  }));

const meta = {
  title: 'React Component/Index character navigation',
  id: 'react-index-char-nav',
  component: IndexCharNav,
  argTypes: {
    onLinkClick: {
      control: null,
      description: 'Function to handle character click and return the navigation URL.',
    },
    currentChar: {
      control: 'text',
      description: 'The current character.',
    },
    characters: {
      control: { type: 'radio' },
      description: 'The characters with data for each character.',
      options: {
        [latinAlphabet]: latinCharacters,
        [greekAlphabet]: greekCharacters,
        [ukranianAlphabet]: ukranianCharacters,
      },
    },
    component: {
      options: ['link', 'button'],
      control: { type: 'radio' },
      description: 'The component to use for the navigation.',
    },
    Link: {
      control: null, // This control won't be shown as it's a component
      description: 'Custom component to use for navigation.',
    },
  },
  args: {
    onLinkClick: (char: string) => char,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-index-char-nav',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof IndexCharNav>;

export default meta;

type Story = StoryObj<typeof meta>;

const DemoLinkComponent = forwardRef((props: PropsWithChildren<any>, ref: ForwardedRef<any>) => {
  return <a ref={ref} {...props} />;
});

DemoLinkComponent.displayName = 'DemoLinkComponent';

export const Default: Story = {
  args: {
    characters: latinCharacters,
    component: 'link',
  },
  name: 'Link',
};

export const LinkCurrent: Story = {
  args: {
    characters: latinCharacters,
    component: 'link',
    currentChar: 'A',
  },
  name: 'Current page',
};

export const LinkDisabled: Story = {
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'link',
  },
  name: 'Disabled link',
};

export const LinkMixed: Story = {
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'link',
  },
  name: 'Links with mixed availability',
};

export const Button: Story = {
  args: {
    characters: latinCharacters,
    component: 'button',
    onLinkClick: (char) => char,
  },
  name: 'Button',
};

export const ButtonPressed: Story = {
  args: {
    currentChar: 'A',
    characters: latinCharacters,
    component: 'button',
  },
  name: 'Pressed button',
};

export const ButtonMixed: Story = {
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'button',
    onLinkClick: (char) => char,
  },
  name: 'Buttons with mixed availability',
};

export const ButtonDisabled: Story = {
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'button',
  },
  name: 'Disabled button',
};

export const CustomLink: Story = {
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent,
  },
  name: 'Custom Link component',
};

export const CustomLinkCurrentChar: Story = {
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent,
    currentChar: 'A',
  },
  name: 'Custom Link component with current char',
};

export const CustomLinkDisabled: Story = {
  args: {
    characters: noAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent,
  },
  name: 'Custom disabled Link component',
};

export const CustomLinkMixed: Story = {
  args: {
    characters: mixedAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent,
  },
  name: 'Custom Link component with mixed availability',
};

export const DesignTokens = designTokenStory(meta);
