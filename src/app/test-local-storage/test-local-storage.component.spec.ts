import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLocalStorageComponent } from './test-local-storage.component';

describe('TestLocalStorageComponent', () => {
  let component: TestLocalStorageComponent;
  let fixture: ComponentFixture<TestLocalStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLocalStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
