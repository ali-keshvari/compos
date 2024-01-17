import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openIndexItem = 0;

  constructor() {}

  onChangeShowItem(index: number) {
    if (index === this.openIndexItem) {
      this.openIndexItem = -1;
    } else {
      this.openIndexItem = index;
    }
  }

  ngOnInit(): void {}
}
