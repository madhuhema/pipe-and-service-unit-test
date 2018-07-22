import { DayScheduleService } from './day-schedule.service';
import { OnInit } from '@angular/core';
export class DayScheduleComponent implements OnInit {
  daySchedule: any[] = [];
  message;

  constructor(private service: DayScheduleService) {}

  ngOnInit() {
    this.service.getDaySchedule().subscribe(t => this.daySchedule = t);
  }

  add() {
    const newDaySchedule = { title: '... ' };
    this.service.add(newDaySchedule).subscribe(
      t => this.daySchedule.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
