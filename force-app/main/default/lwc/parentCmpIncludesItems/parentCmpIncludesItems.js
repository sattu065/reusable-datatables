import { LightningElement, wire, track} from 'lwc';
import getReviews from '@salesforce/apex/getReviewsForCmp.getReviews';
const columns = [
    { label: 'Type', fieldName: 'Type', hideDefaultActions: true },
    { label: 'Description', fieldName: 'Description', hideDefaultActions: true},
    { label: 'Review Date', fieldName: 'CloseDate', type: 'date', hideDefaultActions: true },
    { label: 'Status', fieldName: 'StageName', hideDefaultActions: true },
];

export default class ParentCmpIncludesItems extends LightningElement {
    @track reviewData;
    @track reviewColumns = columns;

    @wire(getReviews)
    wiredAccounts({
        error,
        data
    }) {
        if (data) {
            this.reviewData = data;
        } else if (error) {
            this.error = error;
        }
    }
}