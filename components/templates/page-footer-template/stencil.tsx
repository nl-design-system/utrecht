import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-page-footer-template",
  styleUrl: "stencil.scss",
  shadow: false,
})
export class PageFooterTemplate {
  render() {
    return (
      <utrecht-page-footer>
        <h2 class="utrecht-heading-2 utrecht-heading-2--reset-h2">Gemeente Utrecht</h2>
        <address class="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
          <section>
            <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Telefoon</h3>
            <p class="utrecht-paragraph utrecht-paragraph--distanced">
              <a href="tel:+31302860000" class="utrecht-link utrecht-link--telephone">
                14 030
              </a>
            </p>
          </section>
          <section>
            <h3 class="utrecht-heading-3 utrecht-heading-3--distanced">Adres</h3>
            <p class="utrecht-paragraph utrecht-paragraph--distanced">
              <strong>Stadskantoor</strong>
              <br />
              Stadsplateau 1<br />
              3521AZ
            </p>
          </section>
        </address>
        <div class="utrecht-page-footer__navigation">
          <ul class="utrecht-link-list utrecht-link-list--chevron">
            <li class="utrecht-link-list__item">
              <a href="/contact/" class="utrecht-link">
                Meer contactinformatie
              </a>
            </li>
            <li class="utrecht-link-list__item">
              <a href="/over-deze-website" class="utrecht-link">
                Over deze website
              </a>
            </li>
          </ul>
        </div>
        <div class="utrecht-page-footer__social">
          <p>
            <a
              href="https://www.facebook.com/GemeenteUtrecht"
              class="utrecht-link-social utrecht-link-social--distanced"
            >
              <utrecht-icon-facebook class="utrecht-link-social__icon"></utrecht-icon-facebook>
            </a>
            <a
              href="https://www.instagram.com/GemeenteUtrecht/"
              class="utrecht-link-social utrecht-link-social--distanced"
            >
              <utrecht-icon-instagram class="utrecht-link-social__icon"></utrecht-icon-instagram>
            </a>
            <a
              href="https://nl.linkedin.com/company/gemeente-utrecht"
              class="utrecht-link-social utrecht-link-social--distanced"
            >
              <utrecht-icon-linkedin class="utrecht-link-social__icon"></utrecht-icon-linkedin>
            </a>
            <a href="https://twitter.com/gemeenteutrecht" class="utrecht-link-social utrecht-link-social--distanced">
              <utrecht-icon-twitter class="utrecht-link-social__icon"></utrecht-icon-twitter>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=31624927665"
              class="utrecht-link-social utrecht-link-social--distanced"
            >
              <utrecht-icon-whatsapp class="utrecht-link-social__icon"></utrecht-icon-whatsapp>
            </a>
          </p>
        </div>
      </utrecht-page-footer>
    );
  }
}
