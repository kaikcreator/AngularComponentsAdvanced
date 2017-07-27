import { Component, AfterContentInit, AfterViewInit, ElementRef, ViewChild, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
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
  public simpleAlert:ComponentRef<SimpleAlertViewComponent> = null;

  @ViewChild("timerInput") timeInput: ElementRef;
  @ViewChild("alert", {read:ViewContainerRef}) alertContainer: ViewContainerRef;

  constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver) { 
    this.timers = [3, 20, 185];
  }

  ngAfterViewInit(){
    console.log(this.timeInput);

    this.renderer.setAttribute(this.timeInput.nativeElement, "placeholder", "enter seconds");
    this.renderer.addClass(this.timeInput.nativeElement, 'time-in');
  }

  ngAfterContentInit(){
  }

  logCountdownEnd(){
    console.log("the countdown has finished");
  }

  public showAddTimer(){
    this.isAddTimerVisible = true;
    setTimeout(()=>{
      this.renderer.selectRootElement(this.timeInput.nativeElement).focus();
    });
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert(){
    const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.simpleAlert = this.alertContainer.createComponent(alertFactory);
    this.simpleAlert.instance.title = "timer ended";
    this.simpleAlert.instance.message = "your countdown has finished";
    this.simpleAlert.instance.onDismiss.subscribe(()=>{
      this.simpleAlert.destroy();
    });

    this.simpleAlert.instance.show();
  }

  public submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
