import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[utrecht-table-row]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.utrecht-table__row]': 'true',
    role: 'table-row',
  },
})
export class UtrechtTableRowAttr {
  constructor() {}
}
