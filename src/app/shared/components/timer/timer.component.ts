import { Component, OnDestroy } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {
  time = 0;
  isRunning: boolean = false;
  stop$: Subject<void> = new Subject();
  clock$ = interval(10).pipe(takeUntil(this.stop$));

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
  }

  private clearInterval() {
    this.stop$.next();
    this.isRunning = false;
  }

  onStart() {
    this.clock$.subscribe(() => this.time++);
    this.isRunning = true;
  }

  onStop() {
    this.clearInterval();
  }

  onReset() {
    this.time = 0;
    this.clearInterval();
  }
}
