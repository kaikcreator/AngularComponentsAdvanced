import { Component, OnInit, Input } from '@angular/core';
import { Tab } from "./tab.interface";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title:string;
  public isActive:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
