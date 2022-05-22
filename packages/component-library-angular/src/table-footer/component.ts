import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[utrecht-table-footer]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.utrecht-table__table-footer]': 'true',
    role: 'table-row-group',
  },
})
export class UtrechtTableFooterAttr {
  constructor() {}
}
