import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'Type', fieldName: 'type' },
    { label: 'Course Name', fieldName: 'course_name__c' },
    { label: 'Date Started', fieldName: 'date_started__c', type: 'date' },
    { label: 'Status', fieldName: 'status' },
];

export default class ShowTrainingItems extends LightningElement {
    data = [
        { "type": "John", "course_name__c": "math", "date_started__c": "4-3-2020", "status": "completed" },
        { "type": "Anna", "course_name__c": "english", "date_started__c": "5-3-2020", "status": "completed" },
        { "type": "type3", "course_name__c": "c", "date_started__c": "6-3-2020", "status": "completed" },
        { "type": "Peter", "course_name__c": "c#", "date_started__c": "5-3-2020", "status": "completed" }
    ];
    columns = columns;
}