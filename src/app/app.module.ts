import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryBuilderModule } from "angular2-query-builder";
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { FvQueryBuilderComponent } from './fv-query-builder/fv-query-builder.component';
import { MappingRuleComponent } from './mapping-rule/mapping-rule.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QueryBuilderModule, HttpClientModule],
  declarations: [ AppComponent, QueryBuilderComponent, FvQueryBuilderComponent, MappingRuleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
