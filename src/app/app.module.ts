import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestFatherChildComponent } from './test-father-child/test-father-child.component';
import { ChildComponent } from './test-father-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFatherChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
