import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
  ButtonLink,
  FormFieldTextarea,
  FormFieldTextbox,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtBreadcrumbNav,
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconCross,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwHuis,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import './index.css';
import FooterKlachten from './FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Template/Klachtenformulier/Stap 3B',
  id: 'klachtenformulier-form-pages-stap-3b',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => {
    const MAX_CHARACTERS = 1000;
    const [characterCount, setCharacterCount] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharacterCount(event.target.value.length);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFiles(event.target.files);
    };

    const triggerFileUpload = () => {
      document.getElementById('fileInput')?.click();
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
          <Heading1>Klacht over de gemeente</Heading1>
          <section>
            <Heading2>Uw Klacht</Heading2>
            <Paragraph>Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.</Paragraph>
            <Paragraph>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</Paragraph>
            {/* Dynamische FormFieldTextarea met aangepaste karaktertelling */}
            <FormFieldTextarea
              label="Wat is uw klacht?"
              name="klacht"
              rows={5}
              onChange={handleInputChange}
              status={getStatusMessage()} // Gebruik de aangepaste statusfunctie
            />
            <br />
            <FormLabel>Bestand toevoegen (niet verplicht)</FormLabel>
            <Paragraph>Bijvoorbeeld: een foto van de situatie die de klacht duidelijker maakt</Paragraph>
            <UnorderedList>
              <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
              <UnorderedListItem>U mag maximaal 10 MB aan bestanden toevoegen.</UnorderedListItem>
              <UnorderedListItem>
                Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
              </UnorderedListItem>
            </UnorderedList>
            <br />
            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} multiple />
            <Button appearance="secondary-action-button" type="button" onClick={triggerFileUpload}>
              Bestand toevoegen
            </Button>
            {selectedFiles && (
              <div>
                <p>Geselecteerde bestanden:</p>
                <ul>
                  {Array.from(selectedFiles).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <br />
            <br />
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
          </section>
        </PageContent>
        <FooterKlachten />
      </Page>
    );
  },
};
