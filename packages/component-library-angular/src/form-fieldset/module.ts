import { NgModule } from '@angular/core';
import { UtrechtFieldsetAttr } from './component';
import { UtrechtFieldsetLegendAttr } from './legend.component';

@NgModule({
  imports: [],
  exports: [UtrechtFieldsetAttr, UtrechtFieldsetLegendAttr],
  declarations: [UtrechtFieldsetAttr, UtrechtFieldsetLegendAttr],
})
export class UtrechtFieldsetModule {}
