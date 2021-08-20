import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-contact-card-template",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class ContactCardTemplate {
  render() {
    return (
      <div class="utrecht-contact-card">
        <utrecht-heading-2>Hulp en contact</utrecht-heading-2>
        <div class="utrecht-contact-card__content">
          <div class="utrecht-contact-card__section">
            <utrecht-heading-3>Telefoon</utrecht-heading-3>
            <utrecht-paragraph class="utrecht-contact-card__telephone">
              <a
                href="tel:14-030"
                class="utrecht-link utrecht-link--telephone"
                title="Telefoonnummer van gemeente Utrecht"
              >
                14 030
              </a>
            </utrecht-paragraph>
            <utrecht-paragraph>Maandag t/m vrijdag 8.30 – 17.30 uur</utrecht-paragraph>
          </div>
          <div class="utrecht-contact-card__section">
            <utrecht-heading-3>E-mail</utrecht-heading-3>
            <utrecht-paragraph>
              <a
                class="utrecht-link"
                href="https://www.utrecht.nl/reactieformulier"
                title="Algemeen reactieformulier van de gemeente Utrecht"
              >
                reactieformulier
              </a>
            </utrecht-paragraph>
          </div>
        </div>
      </div>
    );
  }
}
