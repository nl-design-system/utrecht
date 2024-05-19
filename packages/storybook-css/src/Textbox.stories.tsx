/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Textbox } from '@utrecht/component-library-react';
import type { TextboxProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/textbox/README.md?raw';
import achternaamDocs from '@utrecht/components/textbox/_achternaam.md?raw';
import emailDocs from '@utrecht/components/textbox/_email.md?raw';
import houseletterDocs from '@utrecht/components/textbox/_huisletter.md?raw';
import housenumberDocs from '@utrecht/components/textbox/_huisnummer.md?raw';
import houseSuffixDocs from '@utrecht/components/textbox/_huistoevoeging.md?raw';
import IbanDocs from '@utrecht/components/textbox/_iban.md?raw';
import choosePasswordDocs from '@utrecht/components/textbox/_kiesWachtwoord.md?raw';
import naamDocs from '@utrecht/components/textbox/_naam.md?raw';
import organisationDocs from '@utrecht/components/textbox/_organisatie.md?raw';
import postcodeDocs from '@utrecht/components/textbox/_postcode.md?raw';
import requiredDocs from '@utrecht/components/textbox/_required.md?raw';
import streetnameDocs from '@utrecht/components/textbox/_streetname.md?raw';
import voornaamDocs from '@utrecht/components/textbox/_voornaam.md?raw';
import namePrefixDocs from '@utrecht/components/textbox/_voorvoegsel.md?raw';
import passwordForAuthentificationDocs from '@utrecht/components/textbox/_wachtwoordVoorAuthentificatie.md?raw';
import websiteDocs from '@utrecht/components/textbox/_website.md?raw';
import placeOfResidenceDocs from '@utrecht/components/textbox/_woonplaats.md?raw';
import tokensDefinition from '@utrecht/components/textbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface TextboxStoryProps extends TextboxProps {
  focus?: boolean;
  focusVisible?: boolean;
  placeholderDir?: string;
}

const TextboxStory = ({ value, focus, focusVisible, ...args }: TextboxStoryProps) => (
  <Textbox
    className={clsx({
      'utrecht-textarea--focus': focus,
      'utrecht-textarea--focus-visible': focusVisible,
    })}
    defaultValue={value}
    {...args}
  />
);

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
      options: {
        '': null,
        email: 'email',
        number: 'number',
        password: 'number',
        search: 'search',
        tel: 'tel',
        text: 'text',
        url: 'url',
      },
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
    value: '',
    type: null,
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
} satisfies Meta<typeof TextboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const AutocompleteNaam: Story = {
  name: 'Naam',
  args: {
    autoComplete: 'name',
    spellCheck: 'false',
    value: 'Sjors van Amerongen',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: naamDocs,
      },
    },
  },
};

export const AutocompleteVoornaam: Story = {
  name: 'Voornaam',
  args: {
    autoComplete: 'given-name',
    spellCheck: 'false',
    value: 'Sjors',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
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
    value: 'van der Meer',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: achternaamDocs,
      },
    },
  },
};

export const AutocompleteVoorvoegsel: Story = {
  name: 'Voorvoegsel',
  args: {
    autoComplete: 'name-prefix',
    spellCheck: 'false',
    value: 'van der',
    className: 'utrecht-textbox--voorvoegsel-size',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: namePrefixDocs,
      },
    },
  },
};

export const AutocompletePostcode: Story = {
  name: 'Postcode',
  args: {
    autoComplete: 'postal-code',
    spellCheck: 'false',
    value: '3521 AZ',
    className: 'utrecht-textbox--postal-code-nl-size',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: postcodeDocs,
      },
    },
  },
};

export const AutocompleteTelefoonnummer: Story = {
  name: 'Telefoonnummer',
  args: {
    autoComplete: 'tel',
    type: 'tel',
    spellCheck: 'false',
    value: '+31 30 286 00 00',
    className: 'utrecht-textbox--tel-size',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `Gebruik de \`autocomplete\` waarde \`tel\` of \`tel-national\`, en \`type="tel"\`.`,
      },
    },
  },
};

export const AutocompleteTelefoonnummerNational: Story = {
  name: 'Telefoonnummer (in Nederland)',
  args: {
    autoComplete: 'tel-national',
    type: 'tel',
    spellCheck: 'false',
    value: '030 286 00 00',
    className: 'utrecht-textbox--tel-nl-size',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `Gebruik de \`autocomplete\` waarde \`tel-national\` en \`type="tel"\`.`,
      },
    },
  },
};

export const AutocompleteEmailadres: Story = {
  name: 'E-mailadres',
  args: {
    autoComplete: 'email',
    type: 'email',
    spellCheck: 'false',
    value: 'info@example.fi',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: emailDocs,
      },
    },
  },
};

export const AutocompleteWebsite: Story = {
  name: 'Website',
  args: {
    autoComplete: 'url',
    type: 'url',
    spellCheck: 'false',
    value: 'https://example.fi',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
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
    value: 'warn7cavil@flicker8MIGHTY',
    type: 'password',
    spellCheck: 'false',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: passwordForAuthentificationDocs,
      },
    },
  },
};

export const AutocompleteWachtwoordKiezen: Story = {
  name: 'Wachtwoord kiezen',
  args: {
    autoComplete: 'new-password',
    type: 'password',
    spellCheck: 'false',
    value: 'hypnotic*exhaust_sees9SHADE',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: choosePasswordDocs,
      },
    },
  },
};

export const AutocompleteOrganisatienaamInNederland: Story = {
  name: 'Organisatienaam',
  args: {
    autoComplete: 'organization',
    value: 'Kamer van Koophandel',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: organisationDocs,
      },
    },
  },
};

export const AutocompleteHuisnummerInNederland: Story = {
  name: 'Huisnummer (in Nederland)',
  args: {
    inputMode: 'numeric',
    maxLength: 5,
    min: 1,
    max: 99999,
    pattern: '[0-9]+',
    value: '42',
    className: 'utrecht-textbox--house-number-size',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: housenumberDocs,
      },
    },
  },
};

export const AutocompleteHuisletterInNederland: Story = {
  name: 'Huisletter (in Nederland)',
  args: {
    maxLength: 1,
    pattern: '[A-Za-z]+',
    value: 'Q',
    className: 'utrecht-textbox--house-letter-size',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: houseletterDocs,
      },
    },
  },
};

export const AutocompleteHuistoevoegingInNederland: Story = {
  name: 'Huistoevoeging (in Nederland)',
  args: {
    maxLength: 4,
    pattern: '[A-Za-z0-9]{0,4}',
    value: 'AA08',
    className: 'utrecht-textbox--house-addition-size',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: houseSuffixDocs,
      },
    },
  },
};

export const AutocompleteWoonplaatsInNederland: Story = {
  name: 'Woonplaats (in Nederland)',
  args: {
    value: 'Westerhaar-Vriezenveensewijk',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: placeOfResidenceDocs,
      },
    },
  },
};

export const StraatnaamInNederland: Story = {
  name: 'Straatnaam (in Nederland)',
  args: {
    value: 'Laan van de landinrichtingscommissie Duiven-Westervoort',
    minLength: 1,
    maxLength: 200,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: streetnameDocs,
      },
    },
  },
};

export const Iban: Story = {
  name: 'IBAN (Internationaal)',
  args: {
    value: 'NL02 ABNA 0123 4567 89',
    className: 'utrecht-textbox--iban-size',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: IbanDocs,
      },
    },
  },
};
export const IbanNederland: Story = {
  name: 'IBAN (in Nederland)',
  args: {
    value: 'NL02 ABNA 0123 4567 89',
    className: 'utrecht-textbox--iban-nl-size',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: IbanDocs,
      },
    },
  },
};

export const DisabledState: Story = {
  name: 'Disabled',
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const InvalidState: Story = {
  name: 'Invalid',
  args: {
    ...Default.args,
    invalid: true,
  },
};

export const ReadonlyState: Story = {
  name: 'Read-only',
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const RequiredState: Story = {
  name: 'Required',
  args: {
    ...Default.args,
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: requiredDocs,
      },
    },
  },
};

export const FocusState: Story = {
  name: 'Focus-visible',
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
};

export const DesignTokens = designTokenStory(meta);
