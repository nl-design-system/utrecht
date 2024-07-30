import { render, screen } from '@testing-library/react';
import { AccordionProvider } from './Accordion';
import '@testing-library/jest-dom';

describe('AccordionProvider', () => {
  const accordionHeading = 'Frequently Asked Questions';
  const sectionContent = 'Roughly 39 kilometers per hour.';
  const sectionHeading = 'What Is the Airspeed Velocity of an Unladen Swallow?';

  for (var headingNumber = 1; headingNumber <= 6; headingNumber++) {
    const headingLevel = headingNumber;
    describe('without accordion heading', () => {
      describe(`with headingLevel ${headingLevel}`, () => {
        it(`it renders an <h${headingLevel}> element for accordion sections`, () => {
          render(
            <AccordionProvider
              sections={[
                {
                  body: sectionContent,
                  label: sectionHeading,
                },
              ]}
              headingLevel={headingLevel}
            />,
          );

          const heading = screen.getByRole('heading', {
            name: sectionHeading,
            level: headingLevel,
          });

          expect(heading).toBeInTheDocument();
        });
      });
    });

    describe('with accordion heading', () => {
      describe(`with headingLevel ${headingLevel}`, () => {
        it(`it renders an <h${headingLevel}> element for the accordion`, () => {
          render(
            <AccordionProvider
              heading={accordionHeading}
              headingLevel={headingLevel}
              sections={[
                {
                  body: sectionContent,
                  label: sectionHeading,
                },
              ]}
            />,
          );

          const heading = screen.getByRole('heading', {
            name: accordionHeading,
            level: headingLevel,
          });

          expect(heading).toBeInTheDocument();
        });
      });
    });
  }
  describe('without accordion heading', () => {
    describe(`with headingLevel 7`, () => {
      it(`it renders an <p> element for accordion sections`, () => {
        render(
          <AccordionProvider
            sections={[
              {
                body: sectionContent,
                label: sectionHeading,
              },
            ]}
            headingLevel={7}
          />,
        );

        const paragraph = screen.getByText(sectionHeading);

        expect(paragraph.closest('p')).toBeInTheDocument();
      });
    });
  });
});
