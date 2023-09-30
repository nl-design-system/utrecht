import { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  Button,
  ButtonGroup,
  FormFieldDescription,
  Paragraph,
} from '@utrecht/component-library-react/dist/css-module';
import { AlertType } from '@utrecht/component-library-react/src/Alert';
import { ButtonProps } from '@utrecht/component-library-react/src/Button';
import readme from '@utrecht/components/button/docs/with-description.md?raw';
import React from 'react';

interface ButtonWithDescriptionStoryProps extends ButtonProps {
  id: string;
  description: string;
  small?: boolean;
  alertType?: AlertType;
  status?: 'warning' | 'invalid' | 'valid';
  textContent: string;
}

const ButtonWithDescriptionStory = ({
  id,
  description,
  small,
  status,
  alertType,
  textContent,
  ...restProps
}: ButtonWithDescriptionStoryProps) => {
  const descriptionId = description ? `${id}-description` : id;
  return (
    <div style={{ ['--utrecht-space-around']: 1 }}>
      {!!(description && !alertType) && (
        <FormFieldDescription
          id={descriptionId}
          warning={status === 'warning'}
          invalid={status === 'invalid'}
          valid={status === 'valid'}
        >
          <Paragraph small={small}>{description}</Paragraph>
        </FormFieldDescription>
      )}
      <ButtonGroup>
        <Button {...restProps} aria-describedby={descriptionId}>
          {textContent}
        </Button>
      </ButtonGroup>
      {description && alertType ? (
        <Alert type={alertType}>
          <Paragraph id={descriptionId}>{description}</Paragraph>
        </Alert>
      ) : (
        false
      )}
    </div>
  );
};

const meta = {
  title: 'CSS Component/Button/With Description',
  id: 'css-button-with-description',
  component: ButtonWithDescriptionStory,
  args: {
    id: '4f426303-538c-42fe-9eaa-04c4175bde17',
    appearance: 'primary-action-button',
    textContent: 'Doorgaan naar iDEAL',
    type: 'submit',
    small: true,
    description: `Als je op 'Doorgaan naar iDEAL' klikt, ga je ermee akkoord dat de verkoopvoorwaarden gelden voor je bestelling en we een factuur naar je e-mailadres sturen.`,
    status: undefined,
  },
  argTypes: {
    id: { control: 'text' },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    textContent: {
      description: 'Button text',
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    small: { control: 'boolean' },
    description: { control: 'text' },
    status: { control: { type: 'select' }, options: ['', 'warning', 'invalid', 'valid'] },
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonWithDescriptionStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionWithDisclamer: Story = {};

export const DescriptionWithValidationMessage: Story = {
  args: {
    id: 'b4f338f9-cc8a-4d20-bbd2-542439d124fd',
    appearance: 'primary-action-button',
    textContent: 'Verzenden',
    type: 'submit',
    status: 'invalid',
    description: `Vul eerst de verplichten velden in: Naam en E-mailadres.`,
  },
};

export const DescriptionWithErrorMessage: Story = {
  args: {
    id: '64cd1500-a938-49b0-9644-de410b8a1d02',
    appearance: 'primary-action-button',
    textContent: 'Opslaan en later verder gaan',
    type: 'submit',
    alertType: 'error',
    description: `Opslaan is niet gelukt omdat geen contact gemaakt kan worden met de server. Wacht even en probeer het nog een keer.`,
  },
};
