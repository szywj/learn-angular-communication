import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component'

@Component({
  selector: 'test-father-child',
  templateUrl: './test-father-child.component.html',
  styleUrls: ['./test-father-child.component.scss']
})
export class TestFatherChildComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  doSth() {
    this.childComponent.childFn1();
    alert("Father heard child!");
  }

}
