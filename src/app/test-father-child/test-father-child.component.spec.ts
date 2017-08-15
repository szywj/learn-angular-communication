import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFatherChildComponent } from './test-father-child.component';

describe('TestFatherChildComponent', () => {
  let component: TestFatherChildComponent;
  let fixture: ComponentFixture<TestFatherChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFatherChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFatherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
