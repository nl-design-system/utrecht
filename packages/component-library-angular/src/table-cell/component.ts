import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[utrecht-table-cell]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.utrecht-table__table-cell]': 'true',
    role: 'table',
  },
})
export class UtrechtTableCellAttr {
  constructor() {}
}
