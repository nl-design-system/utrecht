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
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Speeltuin',
  id: 'template-klachten-speeltuin-B',
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
              <FormFieldTextbox
                label={
                  <>
                    Datum <span className="utrecht-notbold">(niet verplicht)</span>
                  </>
                }
                name="datum"
                description="Bijvoorbeeld: 23 januari of 2 dagen geleden"
              />
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
            <a
              href="#"
              className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
              rel="external noopener noreferrer"
            >
              <UtrechtIconArrow />
              Opslaan en later verder gaan
            </a>
            <a
              href="#"
              className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
              rel="external noopener noreferrer"
            >
              <UtrechtIconCross />
              Stoppen met formulier
            </a>
          </ButtonGroup>
        </PageContent>
        <FooterKlachten />
      </Page>
    );
  },
};
