import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-list-val',
  templateUrl: './list-val.component.html',
  styleUrls: ['./list-val.component.scss']
})
export class ListValComponent extends DataBasicComponent implements OnInit {
  data_type = 'list_val';
  list_grid_list: any;
  constructor() {
    super()
  }

  ngOnInit() {
    this.initDate();
  }

  initDate() {
    this.list_grid_list = [
      {name: 'grid', value: true},
      {name: '?�', value: false}
    ]
  }

}