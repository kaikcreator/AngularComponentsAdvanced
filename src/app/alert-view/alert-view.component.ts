import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.scss']
})
export class AlertViewComponent implements OnInit {

  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<number>();

  public time:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
