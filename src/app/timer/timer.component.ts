import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;

  private countdownTimerRef:any = null;
  public countdown:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy():void{
    this.clearTimeout();
  }

  startCountdown(){
    if(this.init && this.init >0){
      this.clearTimeout();
      this.countdown = this.init;
      this.doCountdown();
    }
  }

  private doCountdown(){
    this.countdownTimerRef = setTimeout(()=>{
      this.countdown = this.countdown -1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown(){
    if(this.countdown == 0){
      this.onComplete.emit();
      console.log("--countdown end--");
    }
    else{
      this.doCountdown();
    }
  }

  private clearTimeout(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

}
