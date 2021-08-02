import { NgModule } from '@angular/core';
import {
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtDocument,
  UtrechtHeading,
  UtrechtHtmlContent,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
  UtrechtPageFooter,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
} from './directives/proxies';

// This array is maintained manually, so it might miss the latest components.

const components = [
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtDocument,
  UtrechtHeading,
  UtrechtHtmlContent,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
  UtrechtPageFooter,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [],
  providers: [],
})
export class UtrechtWebComponentsModule {}
