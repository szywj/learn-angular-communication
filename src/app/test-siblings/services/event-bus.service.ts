import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {
  public eventBus: Subject<string> = new Subject<string>();

  constructor() { }

}
