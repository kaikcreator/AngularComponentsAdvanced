import { Component, OnInit, Input } from '@angular/core';
import { Tab } from "./tab.interface";
import { TabsComponent } from "app/tabs/tabs.component";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title:string;
  public isActive:boolean = false;

  constructor( public tabs:TabsComponent) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }

}
