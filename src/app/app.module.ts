import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryBuilderModule } from "angular2-query-builder";
import { FvQueryBuilderComponent } from './fv-query-builder/fv-query-builder.component';
import { MappingRuleComponent } from './mapping-rule/mapping-rule.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QueryBuilderModule, HttpClientModule],
  declarations: [ AppComponent, FvQueryBuilderComponent, MappingRuleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
