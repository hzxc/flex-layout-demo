import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-responsive-row-columns',
  templateUrl: './responsive-row-columns.component.html',
  styleUrls: ['./responsive-row-columns.component.scss']
})
export class ResponsiveRowColumnsComponent implements OnDestroy {
  private _activeMQC: MediaChange;
  private _watcher: Subscription;

  firstCol = 'row';
  firstColXs = 'column';
  firstColMd = 'column';
  firstColLg = 'invalid';
  firstColGtLg = 'column';

  secondCol = 'column';

  isVisible = true;
  constructor(private _media$: ObservableMedia) {
    this._watcher = this._media$
      .subscribe((e: MediaChange) => {
        this._activeMQC = e;
      });
  }


  ngOnDestroy() {
    this._watcher.unsubscribe();
  }
  toggleLayoutFor(col) {
    switch (col) {
      case 1:

        col = `firstCol${this._activeMQC ? this._activeMQC.suffix : ''}`;
        this[col] = (this[col] === 'column') ? 'row' : 'column';
        break;

      case 2:
        col = 'secondCol';
        this[col] = (this[col] === 'row') ? 'column' : 'row';
        break;
    }
  }
}
