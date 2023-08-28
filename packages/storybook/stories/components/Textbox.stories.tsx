/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Textbox, TextboxProps } from '@utrecht/component-library-react/src/css-module/Textbox';
import readme from '@utrecht/components/textbox/README.md?raw';
import tokensDefinition from '@utrecht/components/textbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import achternaamDocs from './docs/autocomplete/_achternaam.md?raw';
import houseletterDocs from './docs/autocomplete/_huisletter.md?raw';
import housenumberDocs from './docs/autocomplete/_huisnummer.md?raw';
import houseSuffixDocs from './docs/autocomplete/_huistoevoeging.md?raw';
import choosePasswordDocs from './docs/autocomplete/_kiesWachtwoord.md?raw';
import naamDocs from './docs/autocomplete/_naam.md?raw';
import organisationDocs from './docs/autocomplete/_organisatie.md?raw';
import postcodeDocs from './docs/autocomplete/_postcode.md?raw';
import voornaamDocs from './docs/autocomplete/_voornaam.md?raw';
import namePrefixDocs from './docs/autocomplete/_voorvoegsel.md?raw';
import passwordForAuthentificationDocs from './docs/autocomplete/_wachtwoordVoorAuthentificatie.md?raw';
import websiteDocs from './docs/autocomplete/_website.md?raw';
import placeOfResidenceDocs from './docs/autocomplete/_woonplaats.md?raw';
import requiredDocs from './docs/state/_required.md?raw';
import { designTokenStory } from './util';

interface TextboxStoryProps extends TextboxProps {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  children?: any;
}

const TextboxStory = ({ children, focus, focusVisible, ...args }: TextboxStoryProps) => {
  const classNames = {
    'utrecht-textarea--focus': focus,
    'utrecht-textarea--focus-visible': focusVisible,
  };

  return <Textbox className={clsx(classNames)} defaultValue={children} {...args} />;
};

const meta = {
  title: 'CSS Component/Textbox',
  id: 'css-textbox',
  component: TextboxStory,
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
    },
    dir: {
      description: 'Direction',
      control: 'select',
      options: ['', 'auto', 'ltr', 'rtl'],
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    minLength: {
      description: 'Set the minimum length of the input text',
      control: 'number',
    },
    placeholder: {
      description: 'Set the text of the placeholder',
      control: 'text',
    },
    placeholderDir: {
      description: 'Placeholder direction',
      control: 'select',
      options: ['', 'auto', 'ltr', 'rtl'],
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    spellCheck: {
      description: 'Spellcheck',
      control: { type: 'select' },
      options: ['', 'false', 'true'],
    },
    type: {
      description: 'Type',
      control: 'select',
      options: ['', 'email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
    value: {
      description: 'Set the value of the text box',
      control: 'text',
    },
  },
  args: {
    dir: 'auto',
    disabled: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    readOnly: false,
    required: false,
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AutocompleteNaam: Story = {
  name: 'Naam',
  args: {
    autoComplete: 'name',
    spellCheck: 'false',
    defaultValue: 'Sjors van Amerongen',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: naamDocs,
      },
    },
  },
};

export const AutocompleteVoornaam: Story = {
  name: 'Voornaam',
  args: {
    ...Default.args,
    autoComplete: 'given-name',
    spellCheck: 'false',
    defaultValue: 'Sjors',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: voornaamDocs,
      },
    },
  },
};

export const AutocompleteAchternaam: Story = {
  name: 'Achternaam',
  args: {
    autoComplete: 'family-name',
    spellCheck: 'false',
    defaultValue: 'van der Meer',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: achternaamDocs,
      },
    },
  },
};

export const AutocompleteVoorvoegsel: Story = {
  name: 'Voorvoegsel',
  args: {
    ...Default.args,
    autoComplete: 'name-prefix',
    spellCheck: 'false',
    defaultValue: 'van der',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: namePrefixDocs,
      },
    },
  },
};

export const AutocompletePostcode: Story = {
  name: 'Postcode',
  args: {
    ...Default.args,
    autoComplete: 'postal-code',
    spellCheck: 'false',
    defaultValue: '3521 AZ',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: postcodeDocs,
      },
    },
  },
};

export const AutocompleteTelefoonnummer: Story = {
  name: 'Telefoonnummer',
  args: {
    ...Default.args,
    autoComplete: 'tel',
    type: 'tel',
    spellCheck: 'false',
    defaultValue: '+31 30 286 00 00',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `Gebruik de \`autocomplete\` waarde \`tel\` of \`tel-national\`, en \`type="tel"\`.`,
      },
    },
  },
};

export const AutocompleteEmailadres: Story = {
  name: 'E-mailadres',
  args: {
    ...Default.args,
    autoComplete: 'email',
    type: 'email',
    spellCheck: 'false',
    defaultValue: 'info@example.fi',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `Gebruik de \`autocomplete\` waarde \`email\`, \`type="email"\` en de \`utrecht-textbox--url\` _class name_.`,
      },
    },
  },
};

export const AutocompleteWebsite: Story = {
  name: 'Website',
  args: {
    ...Default.args,
    autoComplete: 'url',
    type: 'url',
    spellCheck: 'false',
    defaultValue: 'https://example.fi',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: websiteDocs,
      },
    },
  },
};

export const AutocompleteWachtwoordVoorAuthenticatie: Story = {
  name: 'Wachtwoord',
  args: {
    autoComplete: 'current-password',
    type: 'password',
    spellCheck: 'false',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: passwordForAuthentificationDocs,
      },
    },
  },
};

export const AutocompleteWachtwoordKiezen: Story = {
  name: 'Wachtwoord kiezen',
  args: {
    ...Default.args,
    autoComplete: 'new-password',
    type: 'password',
    spellCheck: 'false',
    defaultValue: undefined,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: choosePasswordDocs,
      },
    },
  },
};

export const AutocompleteOrganisatienaamInNederland: Story = {
  name: 'Organisatienaam',
  args: {
    ...Default.args,
    autoComplete: 'organization',
    defaultValue: undefined,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: organisationDocs,
      },
    },
  },
};

export const AutocompleteHuisnummerInNederland: Story = {
  name: 'Huisnummer (in Nederland)',
  args: {
    ...Default.args,
    inputMode: 'numeric',
    maxLength: 5,
    min: 1,
    max: 99999,
    pattern: '[0-9]+',
    defaultValue: undefined,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: housenumberDocs,
      },
    },
  },
};

export const AutocompleteHuisletterInNederland: Story = {
  name: 'Huisletter (in Nederland)',
  args: {
    ...Default.args,
    maxLength: 1,
    pattern: '[A-Za-z]+',
    defaultValue: undefined,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: houseletterDocs,
      },
    },
  },
};

export const AutocompleteHuistoevoegingInNederland: Story = {
  name: 'Huistoevoeging (in Nederland)',
  args: {
    ...Default.args,
    maxLength: 4,
    pattern: '[A-Za-z0-9]{0,4}',
    defaultValue: undefined,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: houseSuffixDocs,
      },
    },
  },
};

export const AutocompleteWoonplaatsInNederland: Story = {
  name: 'Woonplaats (in Nederland)',
  args: {
    ...Default.args,
    defaultValue: undefined,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: placeOfResidenceDocs,
      },
    },
  },
};

export const DisabledState: Story = {
  name: 'Disabled Textbox',
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const InvalidState: Story = {
  name: 'Invalid Textbox',
  args: {
    ...Default.args,
    invalid: true,
  },
};

export const ReadonlyState: Story = {
  name: 'Read-only Textbox',
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const RequiredState: Story = {
  name: 'Required Textbox',
  args: {
    ...Default.args,
    required: true,
  },
  parameters: {
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: requiredDocs,
      },
    },
  },
};

export const FocusState: Story = {
  name: 'Focussed Textbox',
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
};

export const DesignTokens = designTokenStory(meta);
