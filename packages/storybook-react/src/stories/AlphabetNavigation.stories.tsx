/* @license CC0-1.0 */

import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { AlphabetNavigation, AlphabetNavigationProps } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/alphabet-navigation/README.md?raw';
import tokensDefinition from '@utrecht/components/alphabet-navigation/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alphabet-navigation/css/index.scss';

const meta = {
  title: 'React Component/Alphabet Navigation',
  id: 'react-alphabet-navigation',
  argTypes: {
    pathname: {
      control: 'text',
      description: 'The URL to navigate to when a letter is clicked.',
      defaultValue: 'letter',
    },
    handleLetterClick: {
      control: null,
      description: 'Function to handle letter click and return the navigation URL.',
    },
    currentLetter: {
      control: 'text',
      description: 'The current letter.',
    },
    alphabet: {
      control: 'object',
      description: 'The alphabet with availability for each letter.',
    },
    component: {
      options: ['link', 'button'],
      control: { type: 'radio' },
      description: 'The component to use for the navigation.',
    },
    customLinkComponent: {
      control: null, // This control won't be shown as it's a component
      description: 'Custom component to use for navigation.',
    },
  },
  args: {},
  render: (props: AlphabetNavigationProps) => {
    return <AlphabetNavigation {...props} />;
  },

  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-alphabet-navigation',
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
} satisfies Meta<AlphabetNavigationProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const createAlphabetArray = (): string[] => {
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  return alphabet;
};

const DemoLinkComponent = forwardRef((props: PropsWithChildren<any>, ref: ForwardedRef<any>) => {
  return <a ref={ref} {...props} />;
});
DemoLinkComponent.displayName = 'DemoLinkComponent';

export const LinkDefault: Story = {
  args: {
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: Math.random() < 0.5 })),
    component: 'link',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const LinkCurrentLetter: Story = {
  args: {
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'link',
    currentLetter: 'A',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const LinkUnavailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: false })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const LinkAvailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const CustomLink: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: Math.random() < 0.5 })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    customLinkComponent: DemoLinkComponent,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const CustomLinkCurrentLetter: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    customLinkComponent: DemoLinkComponent,
    currentLetter: 'A',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const CustomLinkAvailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    customLinkComponent: DemoLinkComponent,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const CustomLinkUnavailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: false })),
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    customLinkComponent: DemoLinkComponent,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const ButtonDefault: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: Math.random() < 0.5 })),
    component: 'button',
    handleLetterClick: (selectedLetter) => selectedLetter,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const ButtonCurrentLetter: Story = {
  args: {
    currentLetter: 'A',
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
};

export const ButtonAvailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: true })),
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
};

export const ButtonUnavailable: Story = {
  args: {
    alphabet: createAlphabetArray().map((letter: string) => ({ letter, availability: false })),
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
};

export const FocusLink: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const FocusVisibleLink: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const FocusLinkCurrentLetter: Story = {
  args: {
    currentLetter: 'A',
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const ActiveLink: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { active: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const ActiveLinkCurrentLetter: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    currentLetter: 'A',
  },
  parameters: {
    pseudo: { active: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const HoverLink: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { hover: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const HoverLinkCurrentLetter: Story = {
  args: {
    currentLetter: 'A',
    alphabet: [{ letter: 'A', availability: true }],
    component: 'link',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { hover: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const FocusButton: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const FocusVisibleButton: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const FocusButtonCurrentLetter: Story = {
  args: {
    currentLetter: 'A',
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { focus: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const ActiveButton: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { active: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const ActiveButtonCurrentLetter: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
    currentLetter: 'A',
  },
  parameters: {
    pseudo: { active: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const HoverButton: Story = {
  args: {
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { hover: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const HoverButtonCurrentLetter: Story = {
  args: {
    currentLetter: 'A',
    alphabet: [{ letter: 'A', availability: true }],
    component: 'button',
    handleLetterClick: (selectedLetter: string) => selectedLetter,
  },
  parameters: {
    pseudo: { hover: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
