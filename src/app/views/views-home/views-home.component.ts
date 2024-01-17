import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  data = [
    { value: 22, label: '# of users' },
    { value: 48, label: '# like' },
    { value: 10, label: '# comment' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      descriptions: 'this is a fantastic couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      descriptions: 'this is a fantastic dresser',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
