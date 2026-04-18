import { Meta, StoryObj } from '@storybook/react-vite';
// import tokens from '@utrecht/design-tokens/dist/list.mjs';
import {
  IconCalendar,
  IconCheck,
  IconCircleX,
  IconClearAll,
  IconCopy,
  IconEye,
  IconEyeClosed,
  IconHourglass,
  IconSearch,
} from '@tabler/icons-react';
import { Button, ColorSample, DataBadge, Icon, Select, SelectOption } from '@utrecht/component-library-react';
import readme from '@utrecht/textbox-css/README.md?raw';
import tokensDefinition from '@utrecht/textbox-css/dist/tokens.mjs';
import { useArgs } from 'storybook/preview-api';
import { designTokenStory } from './util.js';
import { Textbox2 } from '../../../components-react/textbox-react/src/index.js';
import '@utrecht/button-css/src/index.scss';
import '@utrecht/icon-css/src/index.scss';
import '@utrecht/textbox-css/src/index.scss';
import '@utrecht/data-badge-css/src/index.scss';
import '@utrecht/select-css/src/index.scss';
import './TextboxContainer.css';

const meta = {
  title: 'React Component/TextboxContainer',
  id: 'react-textbox-container',
  component: Textbox2,
  argTypes: {
    autoComplete: {
      description: 'Autocomplete',
      control: 'select',
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      description: 'Invalid. For this component you should use `invalid` instead of `ariaInvalid`.',
      control: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: 'false' },
      },
    },
    minLength: {
      description: 'Set the minimum length of the input text',
      control: 'number',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      description: 'Set the text of the placeholder',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Required',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    spellCheck: {
      description: 'Spellcheck',
      control: { type: 'select' },
      options: ['', 'false', 'true'],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    type: {
      description: 'Type',
      control: 'select',
      options: {
        '': null,
        email: 'email',
        number: 'number',
        password: 'password',
        search: 'search',
        tel: 'tel',
        text: 'text',
        url: 'url',
      },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'Set the value of the text box. In React you should use `defaultValue` instead of `value`.',
      control: 'text',
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    defaultValue: '',
  },
  parameters: {
    // tokensPrefix: 'utrecht-textbox',
    // tokens,
    // tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textbox2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    id: 'e102dee1-46ff-405b-b5c9-721e61bbab10',
    iconStart: 'X',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    disabled: true,
    iconStart: 'X',
    id: '6421297c-fd35-46ba-b6a0-ffa709c51bf7',
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    readOnly: true,
    iconStart: 'X',
    id: 'd46c766d-a90f-4730-a99a-d86738866b54',
  },
};

export const WithLeadingAndTrailing: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    iconStart: <Icon>→</Icon>,
    iconEnd: <Icon>📅</Icon>,
    id: 'b78de0d7-72f6-4f88-adda-1ca7476f028b',
  },
};

export const LabelStart: Story = {
  args: {
    labelStart: 'Voornaam: ',
    id: '7b72c048-2bb1-45e3-8571-11acd399a749',
  },
};

export const LabelStartEnd: Story = {
  args: {
    labelStart: 'Oppervlakte: ',
    labelEnd: 'm2',
    id: '9b96c1ce-fc1b-4992-afe3-3cae9e893ad0',
  },
};

export const DescriptionEnd: Story = {
  args: {
    labelStart: 'Voornaam: ',
    descriptionEnd: '(verplicht)',
    required: true,
    id: '3d383458-43ed-490d-a1de-5886ba0c29c3',
  },
};

export const WithLeadingAndTrailingExpandButton: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    actionsEnd: (
      <Button appearance="subtle-button">
        <Icon>⬇</Icon>
      </Button>
    ),
    id: '3d8283f8-0e7f-4376-8afc-41cb2f69246b',
  },
};

export const WithLeadingAnLeadingLocate: Story = {
  args: {
    defaultValue: '',
    actionsStart: (
      <Button
        appearance="subtle-button"
        aria-label="Use my current location"
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            // TODO: Set Story parameter `value`
            console.log(position.coords.latitude, position.coords.longitude);
          });
        }}
      >
        <Icon>📍</Icon>
      </Button>
    ),
    id: '0be51de3-a129-49af-b0ba-bad821019b3a',
  },
};
export const WithLeadingTrailingCopyButton: Story = {
  args: {
    defaultValue: '4d0fc018-c631-4b98-bcf5-8f2c917c9df1',
    readOnly: true,
    actionsEnd: (
      <Button
        appearance="subtle-button"
        aria-label="Copy value"
        onClick={() => {
          // TODO: Copy value
        }}
      >
        <Icon>
          <IconCopy />
        </Icon>
      </Button>
    ),
    id: '5e8131ac-ce60-4ebc-b7c1-d94655cd3851',
  },
};

export const WithLeadingAndTrailingVeryLong: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    textEnd:
      'The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog The Quick Brown Fox Jumps Over The Lazy Dog.',
    id: '48acd310-4c31-42a6-959d-930b8774d61a',
  },
};

export const WithTrailingSubtleButton: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    actionsEnd: (
      <Button appearance="subtle-button" aria-haspopup="dialog" aria-label="Open/sluit kalender">
        <Icon>
          <IconCalendar />
        </Icon>
      </Button>
    ),
    id: '335fa207-2ded-42fd-bde4-1c622104397b',
  },
};

export const WithLeadingButton: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    actionsStart: <button>Calendar</button>,
    id: '49adfe67-55d2-4ed5-96d2-c95c0b041dfe',
  },
};

export const WithJustText: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    labelEnd: 'mL per hour',
    id: 'b9d2cc90-ee47-490e-94e8-cdb17ed789ad',
  },
};

export const WithMaxLength: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    labelStart: 'NL (+31)',
    className: 'utrecht-textbox--house-number-size',
    id: '9ce3cdfc-d7bd-47e4-ac68-0db87592362c',
  },
};

export const WitTrailingSelect: Story = {
  args: {
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    type: 'number',
    actionsEnd: (
      <Select>
        <SelectOption></SelectOption>
        <SelectOption>px</SelectOption>
        <SelectOption>rem</SelectOption>
      </Select>
    ),
    className: 'utrecht-textbox--house-number-size',
    id: '415f32ad-a07a-4b22-8b94-755da5ba4a65',
  },
};

export const Search: Story = {
  args: {
    iconStart: (
      <Icon>
        <IconSearch />
      </Icon>
    ),
    actionsEnd: (
      <Button appearance="subtle-button">
        <Icon>
          <IconCircleX />
        </Icon>
      </Button>
    ),
    type: 'search',
    placeholder: 'Zoeken...',
    id: '527c89b3-9e11-4ce6-a316-e975d1634774',
  },
};

export const SubmitSearch: Story = {
  args: {
    iconStart: (
      <Icon>
        <IconSearch />
      </Icon>
    ),
    actionsEnd: <Button appearance="primary-action-button">Zoeken</Button>,
    type: 'search',
    placeholder: 'Zoeken...',
    id: '527c89b3-9e11-4ce6-a316-e975d1634774',
  },
};

export const SearchKeyboard: Story = {
  args: {
    iconStart: (
      <Icon>
        <IconSearch />
      </Icon>
    ),
    descriptionEnd: (
      <DataBadge aria-label="Sneltoets: Command+K">
        <span>⌘</span>
        <span>F</span>
      </DataBadge>
    ),
    type: 'search',
    placeholder: 'Zoeken...',
    id: '527c89b3-9e11-4ce6-a316-e975d1634774',
  },
};

export const PostalCode: Story = {
  args: {
    descriptionEnd: '(verplicht)',
    type: 'text',
    autoComplete: 'postal-code',
    id: '82009faf-c78f-4d95-95bd-836fcb2f0f57',
  },
};

export const ShowPassword: Story = {
  args: {
    actionsEnd: (
      <Button appearance="subtle-button" aria-label="Show password">
        <Icon>
          <IconEyeClosed />
        </Icon>
      </Button>
    ),
    type: 'password',
    value: '$ecret2024',
    autoComplete: 'password',
    id: '5d2b4df8-f1ae-4091-98c3-a336ddd124f8',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const onClick = (evt) => {
      updateArgs({
        type: updatedArgs.type === 'password' ? 'text' : 'password',
      });
    };

    const actionsEnd =
      updatedArgs.type === 'password' ? (
        <Button appearance="subtle-button" aria-label="Show password" onClick={onClick}>
          <Icon>
            <IconEye />
          </Icon>
          Show
        </Button>
      ) : (
        <Button appearance="subtle-button" aria-label="Hide password" onClick={onClick}>
          <Icon>
            <IconEyeClosed />
          </Icon>
          Hide
        </Button>
      );

    return <Textbox2 {...args} {...updatedArgs} actionsEnd={actionsEnd} />;
  },
};

export const NewPassword: Story = {
  args: {
    descriptionEnd: 'zeer\u00A0veilig',
    type: 'password',
    value: 'Fi*sHTsAD6.wiH8_o4QAAitqMvthyjiV',
    autoComplete: 'new-password',
    id: '3e643ebf-7ada-4a68-af66-f83ce5f09fa4',
  },
};

export const SelectStart: Story = {
  args: {
    actionsStart: (
      <Select aria-label="Search type">
        <SelectOption>All</SelectOption>
        <SelectOption>Movies</SelectOption>
        <SelectOption>TV Episodes</SelectOption>
        <SelectOption>Actors</SelectOption>
      </Select>
    ),
    type: 'search',
    defaultValue: 'Pitt',
    id: '8a7cae44-f801-402b-a8a2-738d1edbf536',
  },
};

export const SelectStartPhone: Story = {
  args: {
    actionsStart: (
      <Select aria-label="Contact">
        <SelectOption value="home phone">Home</SelectOption>
        <SelectOption value="work phone">Work</SelectOption>
        <SelectOption value="phone">Other</SelectOption>
      </Select>
    ),
    type: 'text',
    defaultValue: '',
    autoComplete: 'phone',
    id: '482977b2-55d9-4fe3-b586-ba3241d2033c',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const actionsStart = (
      <Select
        aria-label="Contact"
        onChange={(evt) => {
          updateArgs({
            autoComplete: evt.target.value,
          });
        }}
      >
        <SelectOption value="home phone">Home</SelectOption>
        <SelectOption value="work phone">Work</SelectOption>
        <SelectOption value="mobile phone">Mobile</SelectOption>
        <SelectOption value="phone">Other</SelectOption>
      </Select>
    );

    return <Textbox2 {...args} {...updatedArgs} actionsStart={actionsStart} />;
  },
};

export const BusyStatus: Story = {
  args: {
    iconEnd: (
      <Icon style={{ animation: 'example-spin 2s linear infinite' }}>
        <IconHourglass />
      </Icon>
    ),
    type: 'text',
    defaultValue: '',
    autoComplete: 'username',
    id: '81be1af9-50c0-4e8d-bd35-5a9da396d772',
    busy: false,
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const busy = updatedArgs.busy;

    const busyText = 'Bezig met controleren';
    const successText = 'Gebruikersnaam is nog beschikbaar';
    const iconEnd = (
      <span role="alert">
        {busy ? (
          <Icon style={{ animation: 'example-spin 2s linear infinite' }} aria-label={busyText}>
            <IconHourglass />
          </Icon>
        ) : (
          <Icon aria-label={successText}>
            <IconCheck />
          </Icon>
        )}
      </span>
    );

    return (
      <Textbox2
        {...args}
        {...updatedArgs}
        iconEnd={iconEnd}
        onInput={(evt) => {
          updateArgs({ busy: true });

          setTimeout(() => {
            updateArgs({ busy: false });
          }, 1000);
        }}
      />
    );
  },
};

// export const DesignTokens = designTokenStory(meta);

export const ColorPicker: Story = {
  args: {
    actionsStart: (
      <Button appearance="subtle-button">
        <ColorSample value="#007dad"></ColorSample>
      </Button>
    ),
    type: 'text',
    defaultValue: '#007dad',
    currentValue: '#007dad',
    id: 'd7dca59e-a66d-4341-9b92-6021e2dcd3e0',
  },
  render: function Render(args) {
    const [updatedArgs, updateArgs] = useArgs();

    const { currentValue, ...otherArgs } = updatedArgs;
    const actionsStart = (
      <Button appearance="subtle-button">
        <ColorSample color={currentValue} style={{ color: currentValue }}></ColorSample>
      </Button>
    );

    return (
      <Textbox2
        {...args}
        {...otherArgs}
        actionsStart={actionsStart}
        onInput={(evt) => {
          console.log(evt.target.value);
          updateArgs({
            currentValue: evt.target.value,
          });
        }}
      />
    );
  },
};
