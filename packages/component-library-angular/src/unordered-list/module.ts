import { NgModule } from '@angular/core';
import { UtrechtUnorderedListAttr } from './component';
import { UtrechtUnorderedListItemAttr } from './item.component';

@NgModule({
  imports: [],
  exports: [UtrechtUnorderedListAttr, UtrechtUnorderedListItemAttr],
  declarations: [UtrechtUnorderedListAttr, UtrechtUnorderedListItemAttr],
})
export class UtrechtUnorderedListModule {}
