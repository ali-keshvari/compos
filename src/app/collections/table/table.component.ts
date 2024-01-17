import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: { name: string, age: number, job: string, employed: boolean };
  @Input() headers = [];
  @Input() name : string ='';
  @Input() className = 'basic';

  constructor() {
    //console.log(this.data);
  }
  ngAfterContentChecked() {
    //console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    console.log(this.data);
  }
  ngOnInit(): void {
    //console.log('ngOnInit');
    //console.log(this.data);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    console.log('ngOnDoChecked');
  }
}
