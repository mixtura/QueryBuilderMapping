import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.mappings = [];
  }

  addMapping() {
    this.mappings.push({
      mappingRules: []
    });    
  }

  removeMapping(mapping) {
    this.mappings = this.mappings.filter(m => m != mapping);
  }

  mappings: { mappingRules: [] } [] 
}