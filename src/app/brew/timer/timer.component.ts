import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
	@Input() timer: Timer;
	time;
	config: any;
	isTimerPaused;

  constructor() { }

  ngOnInit(): void {
  	this.isBrewComplete = false;
  	this.timer = { hours: 5, minutes: 8, seconds: 9};
  	this.initializeTimer();
  }

  handleTimerEvent($event) {
  	console.log($event);
  	switch ($event.action) {
  		case "done":
  			this.isBrewComplete = true;
  			break;
  		default:
  			break;
  	}
  }

  initializeTimer() {
	this.time = this.calculateBrewTime();
	this.config = {leftTime: this.time, demand: true};
	this.isTimerPaused = true;  
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

  pauseTimer() {

  }

  resetTimer() {

  }

  calculateBrewTime (): number {
  	return this.timer.hours * 3600 + this.timer.minutes * 60 + this.timer.seconds;  
  }

}
