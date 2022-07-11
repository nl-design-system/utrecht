import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import { DIRECTIVES } from '../directives';

defineCustomElements();
@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class UtrechtWebComponentsModule {}
