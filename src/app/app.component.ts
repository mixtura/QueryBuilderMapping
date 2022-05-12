import { Injectable } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ["./app.component.css"]
})

@Injectable()
export class AppComponent implements AfterViewInit {
  constructor(private httpClient: HttpClient){}

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.mappings = [];

    this.httpClient
      .get("http://wsamzn-nlcrfs7e.factsws.us2.com:54338/api/mappings/v1", {responseType: 'json'})
      .subscribe(res => this.mappings = res["mappings"]);
  }

  addMapping() {
    this.mappings.push({
      mappingRules: []
    });
  }

  removeMapping(mapping) {
    this.mappings = this.mappings.filter(m => m != mapping);
  }

  saveMappings() {
    this.httpClient
      .put("http://wsamzn-nlcrfs7e.factsws.us2.com:54338/api/mappings/v1", this.mappings)
      .subscribe(() => {});
  }

  mappings: { mappingRules: [] } []
}