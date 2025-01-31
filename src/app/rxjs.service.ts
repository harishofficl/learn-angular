import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  mySubject: Subject<number> = new Subject<number>();

  myObservable: Observable<number> = this.mySubject.asObservable();

  updateValue(data: number){
    this.mySubject.next(data);
  }

  constructor() { }
}
