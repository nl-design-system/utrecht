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
} from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Stap 3',
  id: 'klachtenformulier-form-pages-stap-3B',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => {
    const MAX_CHARACTERS = 1000;
    const [characterCount, setCharacterCount] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Maak een ref voor de div om de textarea heen
    const complaintFieldContainerRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setCharacterCount(value.length);

      if (value.trim() === '') {
        setErrorMessage('Uw klacht mag niet leeg zijn. Vul een klacht in.');
      } else {
        setErrorMessage(null); // Verwijder foutmelding als invoer geldig is
      }
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

    const handleSubmit = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (characterCount === 0 || characterCount > MAX_CHARACTERS) {
        event.preventDefault(); // Navigatie voorkomen als er een fout is
        if (characterCount === 0) {
          setErrorMessage('Uw klacht mag niet leeg zijn. Vul een klacht in.');
        } else if (characterCount > MAX_CHARACTERS) {
          setErrorMessage(`Uw klacht is te lang. U heeft ${characterCount - MAX_CHARACTERS} tekens te veel.`);
        }

        // Scroll naar de div met de foutmelding
        complaintFieldContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
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
            <Paragraph>
              Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.
              <br />
              Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
            </Paragraph>
            {/* Dynamische FormFieldTextarea met aangepaste karaktertelling */}
            {/* Dynamische FormFieldTextarea met aangepaste karaktertelling */}
            <div ref={complaintFieldContainerRef}>
              <FormFieldTextarea
                label="Wat is uw klacht?"
                name="klacht"
                rows={5}
                description="Beschrijf bijvoorbeeld; locatie, datum en tijd. Misschien ook afdeling of medewerker, als dit van toepassing is."
                onChange={handleInputChange}
                status={getStatusMessage()} // Gebruik de aangepaste statusfunctie
                errorMessage={errorMessage}
                invalid={Boolean(errorMessage)}
              />
            </div>
            <Heading2>
              Bestand toevoegen <span className="utrecht-notbold">(niet verplicht)</span>
            </Heading2>
            <Paragraph>Bijvoorbeeld: een foto van de situatie die de klacht duidelijker maakt</Paragraph>
            <UnorderedList>
              <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
              <UnorderedListItem>U mag maximaal 10 MB aan bestanden toevoegen.</UnorderedListItem>
              <UnorderedListItem>
                Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
              </UnorderedListItem>
            </UnorderedList>
            <ButtonGroup direction="column">
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
              <ButtonLink
                appearance="primary-action-button"
                href="http://localhost:6008/iframe.html?args=&id=klachtenformulier-form-pages-stap-4--one&viewMode=story"
                onClick={handleSubmit}
              >
                Volgende stap
              </ButtonLink>
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
          </section>
        </PageContent>
        <FooterKlachten />
      </Page>
    );
  },
};
