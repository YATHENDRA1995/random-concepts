import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public checkBox = new BehaviorSubject<any>(false);

  constructor() { }

  setCheckBoxData(data) {
    this.checkBox.next(data);
  }

  getCheckBoxData(): Observable<any> {
    return this.checkBox.asObservable();
  }

}
