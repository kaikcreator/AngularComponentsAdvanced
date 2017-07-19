import { Component, ViewChildren, AfterContentInit, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SimpleAlertViewComponent } from "app/simple-alert-view/simple-alert-view.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  public isAddTimerVisible:boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];

  @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<SimpleAlertViewComponent>;

  constructor(private cdRef:ChangeDetectorRef) { 
    this.timers = [3, 20, 185];
  }

  ngAfterViewInit(){
    this.alerts.forEach(item => {
      if(!item.title){
        item.title = "Hi!";
        item.message = "Hello world";
      }
    });

    this.cdRef.detectChanges();
  }

  ngAfterContentInit(){
  }

  logCountdownEnd(){
    console.log("the countdown has finished");
  }

  public showAddTimer(){
    this.isAddTimerVisible = true;
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert(){
    this.alerts.first.show();
  }

  public submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
