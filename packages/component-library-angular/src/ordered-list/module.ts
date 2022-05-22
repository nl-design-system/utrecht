import { NgModule } from '@angular/core';
import { UtrechtOrderedListAttr } from './component';
import { UtrechtOrderedListItemAttr } from './item.component';

@NgModule({
  imports: [],
  exports: [UtrechtOrderedListAttr, UtrechtOrderedListItemAttr],
  declarations: [UtrechtOrderedListAttr, UtrechtOrderedListItemAttr],
})
export class UtrechtOrderedListModule {}
