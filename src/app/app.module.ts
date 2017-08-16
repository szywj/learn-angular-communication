import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestFatherChildComponent } from './test-father-child/test-father-child.component';
import { ChildComponent } from './test-father-child/child/child.component';
import { TestSiblingsComponent } from './test-siblings/test-siblings.component';
import { Child1Component } from './test-siblings/child1/child1.component';
import { Child2Component } from './test-siblings/child2/child2.component';
import { EventBusService } from './test-siblings/services/event-bus.service';
import { TestLocalStorageComponent } from './test-local-storage/test-local-storage.component';
import { LocalChild1Component } from './test-local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './test-local-storage/local-child2/local-child2.component';
@NgModule({
  declarations: [
    AppComponent,
    TestFatherChildComponent,
    ChildComponent,
    TestSiblingsComponent,
    Child1Component,
    Child2Component,
    TestLocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
