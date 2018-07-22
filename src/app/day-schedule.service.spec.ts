import { TestBed, inject } from '@angular/core/testing';
import { DayScheduleComponent } from './day-schedule.component';
import { DayScheduleService } from './day-schedule.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
describe('DayScheduleService', () => {
  let component: DayScheduleComponent;
  let service:  DayScheduleService ;
  beforeEach(() => {
    service = new DayScheduleService(null);
    component = new DayScheduleComponent(service);
  });
  // getting control over a particular method in a service
  it('should set dayschedule property with the items returned from the server', () => {
    // arrange - changing implementation of getDaySchedule method
    let expectedArray = [
      {id: 1, title: 'Walking' },
      {id: 2, title: 'Drawing' },
      {id: 3, title: 'Meeting' },
 ] ;
    spyOn(service, 'getDaySchedule').and.callFake(() => {
      return Observable.from([ expectedArray ]);
    });
    component.ngOnInit();
    expect(component.daySchedule.length).toBe(3);
    expect(component.daySchedule).toBe(expectedArray);
});

});
