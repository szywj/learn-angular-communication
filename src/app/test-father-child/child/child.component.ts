import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  private _panelTitle: string = "I am child component.";

  @Input()
  set panelTitle(panelTitle:string) {
    this._panelTitle = "[" + panelTitle;
  }

  get panelTitle() {
    return this._panelTitle;
  }

  @Output()
  public follow = new EventEmitter<string>();

  public emitAnEvent(): void {
    return this.follow.emit("follow");
  }

  constructor() { 

  }

  ngOnInit() {
  }

  public childFn(): void {
    alert("Father invokes child's method!");
  }


  public childFn1(): void {
    alert("Father view child");
  }
}
