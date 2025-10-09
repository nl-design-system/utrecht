import {
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Paragraph,
  RadioButton,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const HoofdNavigatie: React.FC = () => {
  return (
    <>
      <nav className="utrecht-navigation" aria-label="Hoofdmenu">
        <ul className="utrecht-navigation__list" id="menu">
          <li className="utrecht-navigation__item">
            <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
              Wonen en leven
            </a>
          </li>
          <li className="utrecht-navigation__item">
            <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
              Zorg en onderwijs
            </a>
          </li>
          <li className="utrecht-navigation__item">
            <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
              Werk en inkomen
            </a>
          </li>
          <li className="utrecht-navigation__item">
            <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
              Ondernemen
            </a>
          </li>
          <li className="utrecht-navigation__item">
            <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
              Bestuur en organisatie
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HoofdNavigatie;
