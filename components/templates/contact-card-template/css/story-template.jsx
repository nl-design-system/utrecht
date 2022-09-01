/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const ContactCardTemplate = () => (
  <div className="utrecht-contact-card">
    <h2 className="utrecht-heading-2">Hulp en contact</h2>
    <div className="utrecht-contact-card__content">
      <div className="utrecht-contact-card__section">
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-contact-card__telephone utrecht-paragraph">
          <a
            href="tel:14-030"
            className="utrecht-link utrecht-link--telephone"
            title="Telefoonnummer van gemeente Utrecht"
          >
            14 030
          </a>
        </p>
        <p className="utrecht-paragraph">Maandag t/m vrijdag 8.30 – 17.30 uur</p>
      </div>
      <div className="utrecht-contact-card__section">
        <h3 className="utrecht-heading-3">E-mail</h3>
        <p className="utrecht-paragraph">
          <a
            className="utrecht-link"
            href="https://www.utrecht.nl/reactieformulier"
            title="Algemeen reactieformulier van de gemeente Utrecht"
          >
            reactieformulier
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ContactCardTemplate;
