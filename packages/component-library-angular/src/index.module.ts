import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtrechtArticle } from './article/component';
import { UtrechtBadgeStatus } from './badge-status/component';
import { UtrechtButtonGroup } from './button-group/component';
import { UtrechtButtonAttr } from './button/component';
import { UtrechtCheckboxAttr } from './checkbox/component';
import { UtrechtDocument } from './document/component';
import { UtrechtFormFieldDescription } from './form-field-description/component';
import { UtrechtFormField } from './form-field/component';
import { UtrechtFieldsetAttr } from './form-fieldset/component';
import { UtrechtFieldsetLegendAttr } from './form-fieldset/legend.component';
import { UtrechtFormLabelAttr } from './form-label/component';
import { UtrechtHeading1 } from './heading-1/component';
import { UtrechtHeading2 } from './heading-2/component';
import { UtrechtHeading3 } from './heading-3/component';
import { UtrechtHeading4 } from './heading-4/component';
import { UtrechtHeading5 } from './heading-5/component';
import { UtrechtHeading6 } from './heading-6/component';
import { UtrechtHtmlContent } from './html-content/component';
import { UtrechtLinkAttr } from './link/component';
import { UtrechtOrderedListAttr } from './ordered-list/component';
import { UtrechtOrderedListItemAttr } from './ordered-list/item.component';
import { UtrechtPageContent } from './page-content/component';
import { UtrechtPageFooter } from './page-footer/component';
import { UtrechtPageHeader } from './page-header/component';
import { UtrechtPage } from './page/component';
import { UtrechtParagraph } from './paragraph/component';
import { UtrechtRadioButtonAttr } from './radio-button/component';
import { UtrechtSeparator } from './separator/component';
import { UtrechtTableBodyAttr } from './table-body/component';
import { UtrechtTableCaptionAttr } from './table-caption/component';
import { UtrechtTableCellAttr } from './table-cell/component';
import { UtrechtTableFooterAttr } from './table-footer/component';
import { UtrechtTableHeaderCellAttr } from './table-header-cell/component';
import { UtrechtTableHeaderAttr } from './table-header/component';
import { UtrechtTableRowAttr } from './table-row/component';
import { UtrechtTableAttr } from './table/component';
import { UtrechtTextareaAttr } from './textarea/component';
import { UtrechtTextboxAttr } from './textbox/component';
import { UtrechtUnorderedListAttr } from './unordered-list/component';
import { UtrechtUnorderedListItemAttr } from './unordered-list/item.component';

const components = [
  UtrechtArticle,
  UtrechtBadgeStatus,
  UtrechtButtonAttr,
  UtrechtButtonGroup,
  UtrechtCheckboxAttr,
  UtrechtDocument,
  UtrechtFieldsetAttr,
  UtrechtFieldsetLegendAttr,
  UtrechtFormField,
  UtrechtFormFieldDescription,
  UtrechtFormLabelAttr,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtLinkAttr,
  UtrechtOrderedListAttr,
  UtrechtOrderedListItemAttr,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtPageFooter,
  UtrechtPageHeader,
  UtrechtParagraph,
  UtrechtRadioButtonAttr,
  UtrechtSeparator,
  UtrechtTableAttr,
  UtrechtTableBodyAttr,
  UtrechtTableCaptionAttr,
  UtrechtTableCellAttr,
  UtrechtTableFooterAttr,
  UtrechtTableHeaderAttr,
  UtrechtTableHeaderCellAttr,
  UtrechtTableRowAttr,
  UtrechtTextareaAttr,
  UtrechtTextboxAttr,
  UtrechtUnorderedListAttr,
  UtrechtUnorderedListItemAttr,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
  providers: [],
})
export class UtrechtComponentsModule {}
