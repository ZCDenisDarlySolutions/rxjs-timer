import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [TimerComponent],
  exports: [TimerComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
