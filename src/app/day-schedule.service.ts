import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DayScheduleService {
  constructor(private http: Http) { }

  add(dayschedule) {
    return this.http.post('...', dayschedule).map(r => r.json());
  }

  getDaySchedule() {
    return this.http.get('...').map(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').map(r => r.json());
  }

}
