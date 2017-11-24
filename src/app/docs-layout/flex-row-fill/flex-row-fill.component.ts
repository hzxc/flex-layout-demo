import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-row-fill',
  templateUrl: './flex-row-fill.component.html',
  styleUrls: ['./flex-row-fill.component.scss']
})
export class FlexRowFillComponent implements OnInit {
  direction = 'row';
  someValue = 20;
  constructor() { }

  ngOnInit() {
  }

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }

}
const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

