import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.scss']
})
export class LocalChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public writeVar(): void {
    window.localStorage.setItem("data", JSON.stringify({'name':'Jason', 'Nationality':'Chinese'}));
  }

}
