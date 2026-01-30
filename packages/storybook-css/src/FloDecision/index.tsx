import { loadFloClientScript } from '@utrecht/flo-legal-decision-tree-client';
import React, { useEffect, useState } from 'react';
import afvalBeslisboomRegelhulpData from './afval-beslisboom-regelhulp.json';
import { encodeHtmlEntities } from './encodeHtmlEntities';
import voorbeeldToelichtingenData from './voorbeeld-toelichtingen-data.json';
import '@utrecht/flolegal-decision-tree-css/dist/index.css';
import '@utrecht/flo-legal-decision-tree-client/dist/assets/flo-client-styles.css';

export const dataSources = {
  'Afval beslisboom Regelhulp': afvalBeslisboomRegelhulpData,
  'Voorbeeld Toelichting': voorbeeldToelichtingenData,
};

export type DataSourceType = keyof typeof dataSources | object;
export type DataSourceContent = (typeof dataSources)[keyof typeof dataSources]['content'] | undefined;
interface FloDecisionProps {
  outcomesHeader?: string;
  checkData?: DataSourceContent;
  outcomesHeaderLevel?: number;
  showOutcomes?: boolean;
  loadingText?: string;
  nonce?: string;
}

export const FloDecision = ({
  checkData,
  outcomesHeader,
  outcomesHeaderLevel,
  showOutcomes = false,
  loadingText,
}: FloDecisionProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const basePath = window.location.pathname.startsWith('/utrecht/storybook-css/')
      ? '/utrecht/storybook-css/'
      : window.location.pathname.startsWith('/storybook-css/')
      ? '/storybook-css/'
      : undefined;
    loadFloClientScript(basePath).then(() => setReady(true));
  }, []);

  if (!ready) return loadingText && <div>{loadingText}</div>;

  const encodedData = checkData ? encodeHtmlEntities(JSON.stringify(checkData)) : undefined;
  const floDecisionContent = `<flo-decision 
  data-check-data="${encodedData}"
    data-show-outcomes="${showOutcomes}"
    data-outcomes-header="${outcomesHeader}"
    data-outcomes-header-level="${outcomesHeaderLevel ?? 2}"
    data-question-display-type="one-by-one-manually"
    data-unanswered-alert-message="Geef antwoord op deze vraag."
    data-use-restart-button="true"
    data-previous-button-text="Terug"
  ></flo-decision>`;

  return (
    <div
      className="utrecht-html utrecht-flolegal-decision-tree-container utrecht-richtext"
      dangerouslySetInnerHTML={{ __html: floDecisionContent }}
    />
  );
};
