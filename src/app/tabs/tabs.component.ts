import { Component, OnInit } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public tabs:Tab[] = [];

  constructor() { }

  ngOnInit() {
    this.addTab({isActive:false, title:"tab 1"});
    this.addTab({isActive:false, title:"tab 2"});
    this.addTab({isActive:false, title:"tab 3"});
    this.addTab({isActive:false, title:"tab 4"});
  }

  addTab(tab:Tab){
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    for (let tab of this.tabs){
      tab.isActive = false;
    }
    tab.isActive = true;
  }
  

}
