import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

const rxTimer = interval(10);

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {
  time = '0';
  clock?: Subscription | null;

  ngOnDestroy() {
    this.clearInterval();
  }

  private clearInterval() {
    if (!this.clock) {
      return;
    }
    this.clock.unsubscribe();
    this.clock = null;
  }

  onStart() {
    this.clock = rxTimer.subscribe(() => {
      this.time = `${+this.time + 1}`.padStart(2, '0');
    });
  }

  onStop() {
    this.clearInterval();
  }

  onReset() {
    this.time = '0';
    this.clearInterval();
  }
}
