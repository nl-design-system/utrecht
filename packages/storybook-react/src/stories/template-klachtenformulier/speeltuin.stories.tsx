import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
  ButtonLink,
  FormField,
  FormFieldTextarea,
  FormFieldTextbox,
  Heading1,
  Heading2,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconCross,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import FooterKlachten from './FooterKlachtenFormulier';

const meta = {
  title: 'Template/Klachtenformulier/Speeltuin',
  id: 'template-klachten-speeltuin',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => {
    const MAX_CHARACTERS = 10;
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharacterCount(event.target.value.length);
    };

    // Statusbericht genereren op basis van karakteraantal
    const getStatusMessage = () => {
      if (characterCount > MAX_CHARACTERS) {
        return (
          <span className="utrecht-klachten-error-message">
            Let op, u heeft {characterCount - MAX_CHARACTERS} tekens te veel ingevoerd.
          </span>
        );
      }
      return `U heeft nog ${MAX_CHARACTERS - characterCount} tekens over.`;
    };

    return (
      <Page {...args}>
        <PageHeader>
          <nav>
            <Logo>
              <LogoImage />
            </Logo>
          </nav>
        </PageHeader>
        <PageContent style={{ '--utrecht-space-around': 1 } as any}>
          <BreadcrumbNav>
            <BreadcrumbNavLink href="#">
              <BreadcrumbNavSeparator>
                <UtrechtIconChevronLeft />
              </BreadcrumbNavSeparator>
              Terug
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <Heading1>
            <Paragraph lead></Paragraph>
            Speeltuin voor React componenten
          </Heading1>
          <section>
            <Heading2>Uw klacht</Heading2>
            <Paragraph>
              Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.
              <br />
              Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
            </Paragraph>
          </section>
          <Heading2>Klachten formulier</Heading2>
          <section>
            <Heading2>Contact gegevens</Heading2>

            <form>
              {/* Dynamische FormFieldTextarea met aangepaste karaktertelling */}
              <FormFieldTextarea
                label="Wat is uw klacht?"
                name="klacht"
                rows={5}
                onChange={handleInputChange}
                status={getStatusMessage()} // Gebruik de aangepaste statusfunctie
              />
              <br />
              <FormFieldTextarea label="Wat was de locatie?" name="locatie" rows={4} />
              <br />
              <FormField>
                <Textbox required id="email" aria-labelledby="email-label" aria-describedby="email-desc" />
                <UtrechtFormFieldDescription id="email-desc">
                  Vragen met een * zijn verplicht.
                </UtrechtFormFieldDescription>
              </FormField>
              <ButtonLink appearance="primary-action-button" href="https://www.nu.nl">
                Volgende stap
              </ButtonLink>
            </form>
          </section>
          <ButtonGroup direction="column">
            <Button appearance="primary-action-button">
              Volgende stap <UtrechtIconArrow />
            </Button>
            <Button appearance="subtle-button">
              <UtrechtIconArrow /> Opslaan en later verder
            </Button>
            <Button appearance="subtle-button">
              <UtrechtIconCross /> Stoppen met formulier
            </Button>
          </ButtonGroup>
        </PageContent>
        <FooterKlachten />
      </Page>
    );
  },
};
