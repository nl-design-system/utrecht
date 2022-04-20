import {
  Step,
  StepExpandedIcon,
  StepHeader,
  StepHeading,
  StepList,
  StepMarker,
  StepSection,
  SubStep,
  SubStepHeading,
  SubStepList,
  SubStepMarker,
} from '@gemeente-denhaag/process-steps';
import React from 'react';

export const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="denhaag-icon"
    focusable="false"
    aria-hidden="true"
    shapeRendering="auto"
  >
    <path
      d="M20.664 5.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z"
      stroke="currentColor"
      strokeWidth="1.75"
    ></path>
  </svg>
);

export const ProcessSteps = () => (
  <StepList>
    <Step checked expanded>
      <StepSection>
        <StepHeader>
          <StepMarker>
            <div>1</div>
          </StepMarker>
          <StepHeading>Deelname aan geluidsonderzoek</StepHeading>
          <StepExpandedIcon />
        </StepHeader>
      </StepSection>
      <SubStepList>
        <SubStep>
          <SubStepMarker />
          <SubStepHeading>Aanmelding ontvangen</SubStepHeading>
        </SubStep>
      </SubStepList>
    </Step>
    <Step current expanded>
      <StepSection>
        <StepHeader>
          <StepMarker>
            <div>2</div>
          </StepMarker>
          <StepHeading>Onderzoek naar geluidsoverlast</StepHeading>
          <StepExpandedIcon />
        </StepHeader>
      </StepSection>
      <SubStepList>
        <SubStep>
          <SubStepMarker />
          <SubStepHeading>Afspraak meten geluidsoverlast gemaakt</SubStepHeading>
        </SubStep>
        <SubStep>
          <SubStepMarker />
          <SubStepHeading>Geluidsoverlast gemeten</SubStepHeading>
        </SubStep>
        <SubStep>
          <SubStepMarker />
          <SubStepHeading>Onderzoek resultaten verwerkt</SubStepHeading>
        </SubStep>
      </SubStepList>
    </Step>
    <Step>
      <StepSection>
        <StepHeader>
          <StepMarker>3</StepMarker>
          <StepHeading>Uitvoeren van maatregelen</StepHeading>
        </StepHeader>
      </StepSection>
    </Step>
    <Step>
      <StepSection>
        <StepHeader>
          <StepMarker>4</StepMarker>
          <StepHeading>Maatregelen zijn uitgevoerd</StepHeading>
        </StepHeader>
      </StepSection>
    </Step>
  </StepList>
);
