import { Injectable } from '@angular/core';

@Injectable()
export class TimerService{

  private countdownTimerRef:any = null;
  public countdown:number = 0;
  public paused:boolean = true;
  private init:number = 0;

  constructor(){}

  destroy():void{
    this.clearTimeout();
  }

  restartCountdown(init?){
    if(init)
        this.init = init;

    if(this.init && this.init >0){
      this.paused = true;
      this.clearTimeout();
      this.countdown = this.init;
    }
  }

  toogleCountdown(){
    this.paused = !this.paused;

    if(this.paused == false){
      this.doCountdown();
    }
    else{
      this.clearTimeout();
    }
  }

  private doCountdown(){
    this.countdownTimerRef = setTimeout(()=>{
      this.countdown = this.countdown -1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown(){
    if(this.countdown <= 0){
      //this.onComplete.emit();
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