import { Meta, StoryObj } from '@storybook/react-vite';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
  ButtonLink,
  FormFieldErrorMessage,
  FormFieldTextarea,
  FormFieldTextbox,
  Heading1,
  Heading2,
  Link,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronLeft, UtrechtIconCross } from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario A/Stap 3',
  id: 'klachtenformulier-form-pages-stap-3A',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args: any) => {
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
          <FormFieldErrorMessage role="alert">
            Let op, u heeft {characterCount - MAX_CHARACTERS} tekens te veel ingevoerd.
          </FormFieldErrorMessage>
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
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeader>
            <Logo>
              <LogoImage />
            </Logo>
          </PageHeader>
          <PageContent style={{ '--utrecht-space-around': 1 } as any}>
            <BreadcrumbNav>
              <BreadcrumbNavLink href={urls.scenarioAPage2}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronLeft />
                </BreadcrumbNavSeparator>
                Terug
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Klacht over de gemeente</Heading1>
                <form>
                  <Heading2>Uw Klacht</Heading2>
                  <Paragraph>
                    Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.
                    <br />
                    Vul alles in. Als iets niet verplicht is, staat dat erbij.
                  </Paragraph>
                  {/* Dynamische FormFieldTextarea met aangepaste karaktertelling */}
                  <div ref={complaintFieldContainerRef}>
                    <FormFieldTextarea
                      label="Wat is uw klacht?"
                      name="klacht"
                      rows={5}
                      onChange={handleInputChange}
                      status={getStatusMessage()} // Gebruik de aangepaste statusfunctie
                      errorMessage={errorMessage}
                      invalid={Boolean(errorMessage)}
                    />
                  </div>
                  <FormFieldTextbox
                    label={
                      <>
                        Datum <span className="utrecht-notbold">(niet verplicht)</span>
                      </>
                    }
                    name="datum"
                    description="Bijvoorbeeld: 23 januari of 2 dagen geleden"
                  />
                  <FormFieldTextbox
                    label={
                      <>
                        Tijd <span className="utrecht-notbold">(niet verplicht)</span>
                      </>
                    }
                    name="tijd"
                    description="Bijvoorbeeld: 2 uur of 14:00"
                  />
                  <FormFieldTextarea
                    label={
                      <>
                        Plek <span className="utrecht-notbold">(niet verplicht)</span>
                      </>
                    }
                    name="plek"
                    rows={3}
                  />
                  <Heading2>
                    Bestand toevoegen <span className="utrecht-notbold">(niet verplicht)</span>
                  </Heading2>
                  <Paragraph>Bijvoorbeeld: een foto van de situatie.</Paragraph>
                  <UnorderedList>
                    <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
                    <UnorderedListItem>U mag maximaal 10 MB aan bestanden toevoegen.</UnorderedListItem>
                    <UnorderedListItem>
                      Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
                    </UnorderedListItem>
                  </UnorderedList>
                  <ButtonGroup direction="column">
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      multiple
                    />
                    <Button appearance="secondary-action-button" type="button" onClick={triggerFileUpload}>
                      Bestand toevoegen
                    </Button>
                    {selectedFiles && (
                      <div>
                        <p>Geselecteerde bestanden:</p>
                        <UnorderedList>
                          {Array.from(selectedFiles).map((file, index) => (
                            <UnorderedListItem key={index}>{file.name}</UnorderedListItem>
                          ))}
                        </UnorderedList>
                      </div>
                    )}

                    <ButtonLink appearance="primary-action-button" href={urls.scenarioAPage4} onClick={handleSubmit}>
                      Volgende stap
                      <UtrechtIconArrow />
                    </ButtonLink>
                    <Link
                      href="#"
                      className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                      rel="external noopener noreferrer"
                    >
                      <UtrechtIconArrow />
                      Opslaan en later verder gaan
                    </Link>
                    <Link
                      href="#"
                      className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                      rel="external noopener noreferrer"
                    >
                      <UtrechtIconCross />
                      Stoppen met formulier
                    </Link>
                  </ButtonGroup>
                </form>
              </section>
            </main>
          </PageContent>
          <FooterKlachten />
        </Page>
      </Surface>
    );
  },
};
