import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(public eventBusService: EventBusService) { }

  ngOnInit() {
  }

  public triggerEventBus(): void {
    this.eventBusService.eventBus.next("The event triggered by Child 1.");
  }

}
