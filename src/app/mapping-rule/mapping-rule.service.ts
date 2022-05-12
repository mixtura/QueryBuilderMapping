import { Injectable } from '@angular/core';

export type Model = {
    model: {}
    name: string
}

@Injectable({
    providedIn: 'root',
})
export class MappingRuleService {
    getResultModelNames() {
        return ["courseTranscript"];
    }

    getResultModel(model: string) : Model {
        return {
            name: "CourseTranscript",
            model: {
                "whenTakenGradeLevelDescriptor": "string",
                "postSecondaryInstitutionDescriptor": "string",
                "methodCreditEarnedType": "string",
                "finalNumericGradeEarned": "string",
                "finalLetterGradeEarned": "string",
                "earnedCreditType": "string",
                "earnedCredits": "string",
                "earnedCreditConversion": "string",
                "courseTitle": "string",
                "courseRepeatCodeType": "string",
                "attemptedCreditType": "string",
                "attemptedCredits": "string",
                "attemptedCreditConversion": "string",
                "alternativeCourseTitle": "string",
                "alternativeCourseCode": "string",
                "id": "string",
                "courseAttemptResultType": "string"
            }
        }
    }

    getMappingSources(mappingModel: string) : Model[] {
        let transcriptModel = {
            name: "Transcript",
            model: {
                'TranscriptId': 'number',
                'StudentId': 'number' ,
                'SemesterId': 'number' ,
                'TermId': 'number',
                'YearId': 'number',
                'ClassId': 'number',
                'Abbreviation': 'string',
                'FinalGrade': 'string',
                'Passing': 'boolean',
                'Credits': 'number',
                'CourseLevel': 'string',
                'FinalGradeUgpa': 'string'
            }
        }

        return [transcriptModel];
    }
}