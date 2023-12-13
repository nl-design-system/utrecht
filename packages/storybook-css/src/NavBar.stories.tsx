/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter, Icon, NavBar, NavList, NavListLink } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/nav-bar/README.md?raw';
import tokensDefinition from '@utrecht/components/nav-bar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Navigation bar',
  id: 'css-nav-bar',
  component: NavBar,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: {
        '': undefined,
        center: 'center',
      },
    },
    children: {
      description: 'Content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-nav-bar',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
      </NavList>
    ),
  },
  name: 'Navigation bar with navigation list',
};

// GitHub Icons are MIT license
// https://github.com/primer/octicons
const OcticonCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const OcticonIssueOpened = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M3.75 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z" />
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-5.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 1 0 0-11.5Z" />
  </svg>
);

const OcticonGitPullRequest = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
  </svg>
);

const OcticonDiscussions = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z" />
  </svg>
);

const OcticonPlay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z" />
  </svg>
);

const OcticonTable = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z" />
  </svg>
);

const OcticonBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
  </svg>
);

const OcticonShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);

const OcticonGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z" />
  </svg>
);

const OcticonGear = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z" />
  </svg>
);

export const IconAndBadge: Story = {
  args: {
    children: (
      <NavList
        style={{
          '--utrecht-icon-inset-block-start': '0.2em',
        }}
      >
        <NavListLink href="#">
          <Icon>
            <OcticonCode />
          </Icon>
          Code
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonIssueOpened />
          </Icon>
          Issues <BadgeCounter>121</BadgeCounter>
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonGitPullRequest />
          </Icon>
          Pull requests <BadgeCounter>69</BadgeCounter>
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonDiscussions />
          </Icon>
          Discussions
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonPlay />
          </Icon>
          Actions
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonTable />
          </Icon>
          Projects <BadgeCounter>2</BadgeCounter>
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonBook />
          </Icon>
          Wiki
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonShield />
          </Icon>
          Security <BadgeCounter>5</BadgeCounter>
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonGraph />
          </Icon>
          Insights
        </NavListLink>
        <NavListLink href="#">
          <Icon>
            <OcticonGear />
          </Icon>
          Settings
        </NavListLink>
      </NavList>
    ),
  },
  name: 'Navigation bar with icons and counter badges',
};

export const Center: Story = {
  args: {
    children: (
      <NavList appearance="center">
        <NavListLink href="#" center>
          Wonen en leven
        </NavListLink>
        <NavListLink href="#" center>
          Werk en inkomen
        </NavListLink>
        <NavListLink href="#" center>
          Ondernemen
        </NavListLink>
        <NavListLink href="#" center>
          Bestuur en organisatie
        </NavListLink>
      </NavList>
    ),
  },
  name: 'Center appearance',
};

export const WrapItems: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
      </NavList>
    ),
  },
  name: 'Wrap many items',
};

export const WrapText: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven lorem ipsum dolor sit amet</NavListLink>
        <NavListLink href="#">Werk en inkomen lorem ipsum dolor sit amet, consectetur adipiscing elit</NavListLink>
        <NavListLink href="#">Ondernemen lorem ipsum dolor sit amet</NavListLink>
        <NavListLink href="#">
          Bestuur en organisatie lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </NavListLink>
      </NavList>
    ),
  },
  name: 'Wrap long text in items',
};

export const DesignTokens = designTokenStory(meta);
