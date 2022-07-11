import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'utrecht-badge-status',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtBadgeStatus {
  @Input() status?: string;
  constructor() {}
}
