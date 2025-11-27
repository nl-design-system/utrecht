import {
  Button,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldTextarea,
  FormLabel,
  Heading2,
  Paragraph,
  RadioButton,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';
import React, { useState } from 'react';

const KTOvervolg: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [satisfactionScore, setSatisfactionScore] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setSatisfactionScore('');
    setFeedbackText('');
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Hier kun je de data naar een API sturen
    console.log({
      gevonden: selectedOption === '1' ? 'Ja' : 'Nee',
      tevredenheid: satisfactionScore,
      feedback: feedbackText,
    });
  };

  return (
    <>
      <Heading2>Geef uw mening</Heading2>
      <Separator style={{ borderColor: '#D6E5F5', borderWidth: '2px' }} />

      {!isSubmitted ? (
        <>
          <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
            <FieldsetLegend>Hebt u gevonden wat u zocht op deze pagina?</FieldsetLegend>
            <FormField type="radio">
              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel htmlFor="800b7f3f-5048-4dcc-8f23-d04fa6ca4199" type="radio">
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="800b7f3f-5048-4dcc-8f23-d04fa6ca4199"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="1"
                    checked={selectedOption === '1'}
                    onChange={() => handleOptionChange('1')}
                  />
                  Ja
                </FormLabel>
              </Paragraph>
            </FormField>
            <FormField type="radio">
              <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
                <FormLabel htmlFor="fbc03e63-42c2-46e3-9acc-183fa64c6dcd" type="radio">
                  <RadioButton
                    className="utrecht-form-field__input"
                    id="fbc03e63-42c2-46e3-9acc-183fa64c6dcd"
                    name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                    value="2"
                    checked={selectedOption === '2'}
                    onChange={() => handleOptionChange('2')}
                  />
                  Nee
                </FormLabel>
              </Paragraph>
            </FormField>
          </Fieldset>

          {/* Toon de vervolgvragen voor zowel Ja als Nee */}
          {(selectedOption === '1' || selectedOption === '2') && (
            <>
              {/* Feedback textarea */}
              <div style={{ marginTop: '24px' }}>
                <FormFieldTextarea
                  label="Hebt u tips voor verbetering van deze pagina?"
                  name="feedback"
                  a
                  description="Laat hier geen persoonsgegevens (bijvoorbeeld naam, telefoonnummer of e-mailadres) achter."
                  rows={5}
                />
              </div>
              {/* Tevredenheidschaal */}
              <Fieldset role="radiogroup" style={{ marginTop: '24px' }}>
                <FieldsetLegend>Hoe tevreden bent u over deze pagina?</FieldsetLegend>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#666' }}>heel ontevreden</span>
                  <span style={{ fontSize: '14px', color: '#666' }}>heel tevreden</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <FormField key={num} type="radio" style={{ margin: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <RadioButton
                          className="utrecht-form-field__input"
                          id={`satisfaction-${num}`}
                          name="satisfaction"
                          value={num.toString()}
                          checked={satisfactionScore === num.toString()}
                          onChange={() => setSatisfactionScore(num.toString())}
                          aria-label={`Score ${num} van 10`}
                        />
                        <label
                          htmlFor={`satisfaction-${num}`}
                          style={{
                            fontSize: '14px',
                            cursor: 'pointer',
                            marginLeft: '2px',
                          }}
                        >
                          {num}
                        </label>
                      </div>
                    </FormField>
                  ))}
                </div>
              </Fieldset>
            </>
          )}

          {/* Verzendknop - alleen tonen als er een optie is geselecteerd */}
          {selectedOption && (
            <div style={{ marginTop: '24px' }}>
              <Button appearance="primary-action-button" onClick={handleSubmit}>
                Verstuur uw reactie
              </Button>
            </div>
          )}
        </>
      ) : (
        /* Bedankbericht na verzending */
        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f0f7ff', borderRadius: '4px' }}>
          <Paragraph>
            <strong>Bedankt voor uw feedback!</strong>
          </Paragraph>
          <Paragraph>We gebruiken uw input om onze website te verbeteren.</Paragraph>
        </div>
      )}

      <Separator style={{ borderColor: '#D6E5F5', borderWidth: '2px', marginTop: '24px' }} />
    </>
  );
};

export default KTOvervolg;
