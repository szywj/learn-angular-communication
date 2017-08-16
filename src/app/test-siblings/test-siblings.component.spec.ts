import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSiblingsComponent } from './test-siblings.component';

describe('TestSiblingsComponent', () => {
  let component: TestSiblingsComponent;
  let fixture: ComponentFixture<TestSiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
