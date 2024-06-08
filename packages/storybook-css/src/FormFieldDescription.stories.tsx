/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { FormFieldDescription, Paragraph } from '@utrecht/component-library-react';
import type { FormFieldDescriptionProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-field-description-css/README.md?raw';
import tokensDefinition from '@utrecht/form-field-description-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface FormFieldDescriptionStoryProps extends FormFieldDescriptionProps {
  status: string | 'warning' | 'invalid' | 'valid';
}

const FormFieldDescriptionStory = ({ status, ...restProps }: FormFieldDescriptionStoryProps) => (
  <FormFieldDescription
    warning={status === 'warning'}
    valid={status === 'valid'}
    invalid={status === 'invalid'}
    {...restProps}
  />
);

const meta = {
  title: 'CSS Component/Form field description',
  id: 'css-form-field-description',
  component: FormFieldDescriptionStory,
  argTypes: {
    id: {
      description: 'Unique identifier to associate it with a form input',
      control: 'text',
    },
    children: {
      description: 'Set the content of the description',
      control: 'text',
    },
    status: {
      control: 'select',
      description: 'Status',
      options: ['', 'invalid', 'valid'],
    },
  },
  args: {
    id: null,
    children: '',
    status: '',
    distanced: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-form-field-description',
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
} satisfies Meta<typeof FormFieldDescriptionStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '0427f759-009c-43ad-8e1c-3d7b9982a133',
    children: <Paragraph>Your password must contain at least 16 characters.</Paragraph>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Combined with the form label, provide an additional and more detailed description of the form field.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    id: '8cda724s-1512-4221-999e-9e0f6e10675',
    children: 'This is a required field and must not be left empty.',
    status: 'invalid',
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story:
          'Describe that or why the form input is invalid, and possibly instructions on how to remedy the situation.',
      },
    },
  },
};

export const Valid: Story = {
  args: {
    id: '6fda501a-1512-4310-800d-7e4b5d305823',
    children: 'This is very safe password!',
    status: 'valid',
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Describe that or why the form input is valid.',
      },
    },
  },
};

export const Example: Story = {
  args: {
    id: '134f072c-60ae-42c7-9bdf-b3fdbc876d6e',
    children: (
      <Paragraph>
        {`Een tussenvoegsel het begin van sommige achternamen. Bijvoorbeeld: "van der" in "van der Meer" of "de" in "de Boer".`}
      </Paragraph>
    ),
  },
  name: 'Geef een voorbeeld',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `
Als je weet dat gebruikers het moeilijk vinden een veld goed in te vullen, dan kun je ze helpen door gelijk een voorbeeld te geven.

Je kunt testen met gebruikers om te weten welke velden beter een voorbeeld kunnen hebben. Je kunt ook automatisch gebruikersstatistieken verzamelen om te meten welke formuliervelden vaak niet juist worden ingevuld.`,
      },
    },
  },
};

export const Effect: Story = {
  args: {
    id: 'b0af2c99-baae-444f-943e-1d9e29520e22',
    children: (
      <Paragraph>
        Je kunt deze gegevens nog aanpassen tot 2 dagen voor de conferentie, dus tot 14 november om 17:00.
      </Paragraph>
    ),
  },
  name: 'Effect uitleggen',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `
Gebruik de extra beschrijving om duidelijk te maken waar de gegevens voor gebruikt gaan worden.

Het is belangrijk om effecten te noemen, wanneer de gebruiker niet achteraf makkelijk de gegevens kan aanpassen — bijvoorbeeld als de invoer leidt tot effecten in de echte wereld.
    `,
      },
    },
  },
};

export const EffectReverse: Story = {
  args: {
    id: 'b0af2c99-baae-444f-943e-1d9e29520e22',
    children: (
      <Paragraph>
        Je kunt deze gegevens nog aanpassen tot 2 dagen voor de conferentie, dus tot 14 november om 17:00.
      </Paragraph>
    ),
  },
  name: 'Uitleggen wanneer effect niet meer omkeerbaar is',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `Wanneer de gegevens achteraf aanpassen niet altijd mogelijk is, leg dan uit wat de mogelijkheden zijn. ([WCAG eis 3.3.6](https://www.w3.org/TR/WCAG21/#error-prevention-all))`,
      },
    },
  },
};

export const Necessity: Story = {
  args: {
    id: '596d527a-2ab8-4501-b5ce-e269ac442c37',
    children: (
      <Paragraph>
        We bellen je op dit telefoonnummer wanneer op het laatste moment de afspraak afgezegd moet worden. Je kunt ook
        kiezen voor een sms-bericht.
      </Paragraph>
    ),
  },
  name: 'Noodzaak uitleggen',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: `
Het is belangrijk uit te leggen waarom de gegevens nodig zijn. Als de gegevens niet nodig zijn, dan kun je er beter niet om vragen.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
