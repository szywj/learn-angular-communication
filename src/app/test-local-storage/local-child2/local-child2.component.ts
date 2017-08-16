import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.scss']
})
export class LocalChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ReadVar(): string {
    return window.localStorage.getItem("data");
  }


}
