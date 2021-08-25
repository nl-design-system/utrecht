import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-content-page-template",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class ContentPageTemplate {
  render() {
    return (
      <div class="utrecht-content-page">
        <slot></slot>
        <header class="utrecht-page-header">
          <utrecht-logo></utrecht-logo>
        </header>
        <nav class="topnav">
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="/">
                Home
              </a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="/about">
                About
              </a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="/login">
                Login
              </a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <slot />
        </main>
        <utrecht-page-footer>
          <address class="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
            <h2 class="utrecht-heading-2 utrecht-heading-2--reset-h2">Gemeente Utrecht</h2>
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
        </utrecht-page-footer>
      </div>
    );
  }
}
