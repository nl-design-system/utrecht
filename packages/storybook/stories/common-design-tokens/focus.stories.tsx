/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/common/focus/README.md?raw';
import tokensDefinition from '@utrecht/components/common/focus/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from '../../src/design-token-story';

interface FocusExampleProps {
  focus?: boolean;
  focusVisible?: boolean;
}

interface FocusStoryProps extends FocusExampleProps {
  implementation: 'css' | 'html';
}

const FocusHTMLExample = (_: FocusExampleProps) => (
  <div className={clsx('utrecht-html')}>
    <div>
      <a href="https://example.com" target="_new">
        example.com
      </a>
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <input type="checkbox" />
    </div>
    <div>
      <input type="radio" />
    </div>
    <div>
      <select>
        <option>Example</option>
      </select>
    </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button type="button">Click me</button>
    </div>
  </div>
);

const FocusCSSExample = ({ focus, focusVisible }: FocusExampleProps) => (
  <div>
    <div>
      <a
        href="https://example.com"
        target="_new"
        className={clsx('utrecht-link', 'utrecht-link--html-a', {
          'utrecht-link--focus': focus,
          'utrecht-link--focus-visible': focusVisible,
        })}
      >
        example.com
      </a>
    </div>
    <div>
      <input
        type="text"
        className={clsx('utrecht-textbox', 'utrecht-textbox--html-input', {
          'utrecht-textbox--focus': focus,
          'utrecht-textbox--focus-visible': focusVisible,
        })}
      />
    </div>
    <div>
      <input
        type="checkbox"
        className={clsx('utrecht-checkbox', 'utrecht-textbox--html-input', {
          'utrecht-checkbox--focus': focus,
          'utrecht-checkbox--focus-visible': focusVisible,
        })}
      />
    </div>
    <div>
      <input
        type="radio"
        className={clsx('utrecht-radio-button', 'utrecht-textbox--html-input', {
          'utrecht-radio-button--focus': focus,
          'utrecht-radio-button--focus-visible': focusVisible,
        })}
      />
    </div>
    <div>
      <select
        className={clsx('utrecht-select', 'utrecht-select--html-select', {
          'utrecht-select--focus': focus,
          'utrecht-select--focus-visible': focusVisible,
        })}
      >
        <option>Example</option>
      </select>
    </div>
    <div>
      <textarea
        className={clsx('utrecht-textarea', 'utrecht-textarea--html-textarea', {
          'utrecht-textarea--focus': focus,
          'utrecht-textarea--focus-visible': focusVisible,
        })}
      ></textarea>
    </div>
    <div>
      <button
        type="button"
        className={clsx('utrecht-button', {
          'utrecht-button--focus': focus,
          'utrecht-button--focus-visible': focusVisible,
        })}
      >
        Click me
      </button>
    </div>
  </div>
);

const FocusStory = ({ implementation, ...args }: FocusStoryProps) => {
  if (implementation === 'html') {
    return FocusHTMLExample({ ...args });
  } else if (implementation === 'css') {
    return FocusCSSExample({ ...args });
  } else {
    return null;
  }
};

const meta = {
  title: 'Utrecht/Design tokens/Focus',
  id: 'design-tokens-focus',
  component: FocusStory,
  parameters: {
    tokensPrefix: 'utrecht-focus',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FocusStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CSSComponentsFocusable: Story = {
  name: 'Focusable CSS components',
  parameters: {
    // These CSS components are already tested separately, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'This example shows a variety of focusable CSS components. You can use this to check if the design is consistent and recognizable.',
      },
    },
  },
  args: {
    focus: false,
    implementation: 'css',
  },
};

export const CSSComponentsFocus: Story = {
  name: 'CSS component with :focus',
  parameters: {
    // These CSS components are already tested separately, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Simulates the `focus` state in a variety of focusable components. You can use this to check if the design is consistent and recognizable.',
      },
    },
  },
  args: {
    focus: true,
    implementation: 'css',
  },
};

export const CSSComponentsFocusVisible: Story = {
  name: 'CSS components with :focus-visible',
  parameters: {
    // These CSS components are already tested separately, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Simulates the `focus-visible` state in a variety of focusable components. You can use this to check if the design is consistent and recognizable.',
      },
    },
  },
  args: {
    focus: true,
    focusVisible: true,
    implementation: 'css',
  },
};

export const HTMLComponents: Story = {
  name: 'Focusable HTML components',
  parameters: {
    // These CSS components are already tested separately, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'This example shows a variety of focusable HTML components. You can use this to check if the design is consistent and recognizable.',
      },
    },
  },
  args: {
    focus: true,
    implementation: 'html',
  },
};

export const DesignTokens = designTokenStory(meta);
