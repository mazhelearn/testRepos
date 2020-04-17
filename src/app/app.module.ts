import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { TestTemplateComponent } from './test-template/test-template.component';
import { NgContentComponent } from './test-template/ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    NgContentComponent,
    TestTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
