import { Component, Input, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { Timer } from '../../timer'


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

	@ViewChild('cd') countdown: CountdownComponent;
	isBrewComplete;
	time;
	config: any;
	isTimerPaused;
	
	@Input() timer: Timer;

  ngOnInit(): void {
  	this.isBrewComplete = false;
	this.timer = { hours: 0, minutes: 0, seconds: 0};
	this.isTimerPaused = true;
  	this.updateTimer();
  }

  hoursChanged($event) : void {
	  console.log("hours: " + $event);
	  this.timer.hours = $event;
	  this.updateTimer();
  }

  minutesChanged($event) : void {
		console.log("minutes: " + $event);
		this.timer.minutes = $event;
		this.updateTimer();
	}

	secondsChanged($event) : void {
		console.log("seconds: " + $event);
		this.timer.seconds = $event;
		this.updateTimer();
	}

  updateTimer() {
	this.time = this.calculateBrewTime();
	this.config = {leftTime: this.time, demand: this.isTimerPaused};
  }

  startTimer() {
	if(this.isTimerPaused) {
		this.countdown.begin();
		this.isTimerPaused = !this.isTimerPaused;
	}
	else {
		this.countdown.pause();
		this.isTimerPaused = !this.isTimerPaused;
	}
  }

  restartTimer() {
	  this.countdown.restart();
	  this.config = {leftTime: this.time, demand: this.isTimerPaused};
  }

  clearTimer() {
	this.timer = { hours: 0, minutes: 0, seconds: 0};
	this.isTimerPaused = true;
	this.config = {leftTime: 0, demand: true};
}

  calculateBrewTime (): number {
  	return this.timer.hours * 3600 + this.timer.minutes * 60 + this.timer.seconds;  
  }

}
