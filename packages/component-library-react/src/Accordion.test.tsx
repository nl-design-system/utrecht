import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { act } from 'react';
import { AccordionProvider } from './Accordion';

describe('with reactive components in body', () => {
  it('does something', () => {
    let setStateCheckboxOuter, stateCheckboxOuter;
    const Checkbox = () => {
      const [stateCheckbox, setStateCheckbox] = React.useState(false);
      stateCheckboxOuter = stateCheckbox;
      setStateCheckboxOuter = setStateCheckbox;
      return (
        <input
          type="checkbox"
          defaultChecked={stateCheckbox}
          id="state-checkbox"
          role="checkbox"
          onChange={() => setStateCheckbox((checked) => !checked)}
        />
      );
    };
    render(
      <AccordionProvider
        sections={[
          {
            label: 'Accordion section',
            expanded: true,
            body: <Checkbox />,
          },
        ]}
      />,
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    expect(screen.getByRole('checkbox')).not.toBeChecked();

    act(() => {
      fireEvent.click(screen.getByRole('checkbox'));
    });

    expect(screen.getByRole('checkbox')).toBeChecked();

    console.log('should be false', setStateCheckboxOuter);
    if (setStateCheckboxOuter) {
      act(() => {
        setStateCheckboxOuter(false);
      });
    }

    expect(stateCheckboxOuter).toBe(false);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});

xdescribe('AccordionProvider', () => {
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
