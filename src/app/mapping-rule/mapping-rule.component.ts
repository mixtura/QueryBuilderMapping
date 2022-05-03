import { Component, OnInit, Input, Injectable } from '@angular/core';
import { QueryBuilderConfig } from "angular2-query-builder";
import { MappingRuleService } from './mapping-rule.service';

@Component({
  selector: 'app-mapping-rule',
  templateUrl: './mapping-rule.component.html',
  styleUrls: ['./mapping-rule.component.css']
})

@Injectable()
export class MappingRuleComponent implements OnInit {
  modelFields: string[];
  config: QueryBuilderConfig;
  modelNames: string[];

  @Input()
  mapping: { modelName: string, fieldName: string, mappingRules: any[] };

  constructor(private mappingRuleService: MappingRuleService) { }

  ngOnInit() {
    this.modelNames = ["courseTranscriptModel"];
  }

  setCurrentModel(model) {
    switch(model) {
      case "courseTranscriptModel":
        this.setupMapping(model);
    }
  }

  setupMapping(model: string) {
    let sourceModels = this.mappingRuleService.getMappingSources(model);
    let resultModel = this.mappingRuleService.getResultModel(model);

    this.modelFields = Object.keys(resultModel.model);

    let ruleFields = sourceModels.reduce((acc, model) => {
      Object.entries(model.model).forEach(f => {
        let fieldName = `${model.name.toLowerCase()}.${f[0]}`;

        acc[fieldName] = {
          name: fieldName,
          type: f[1]
        }
      });

      return acc;
    }, {});

    this.config = { fields: ruleFields };
  }

  addMappingRule() {
    this.mapping.mappingRules.push({
      query: {
        condition: 'and',
        rules: []
      }
    });
  }

  removeMappingRule(mappingRule) {
    this.mapping.mappingRules = this.mapping.mappingRules.filter(m => m != mappingRule);
  }

  getLinkedIdFields() {
    let numberFields = Object.values(this.config.fields).filter(f => f.type == "number").map(f => f.value);

    return [null].concat(numberFields);
  }
}