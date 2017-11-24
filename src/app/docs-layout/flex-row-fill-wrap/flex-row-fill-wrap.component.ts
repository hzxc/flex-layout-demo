import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-row-fill-wrap',
  templateUrl: './flex-row-fill-wrap.component.html',
  styleUrls: ['./flex-row-fill-wrap.component.scss']
})
export class FlexRowFillWrapComponent implements OnInit {
  direction = 'row';

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
  constructor() { }

  ngOnInit() {
  }

}
const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
