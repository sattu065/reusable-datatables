import { LightningElement, track,api } from 'lwc';

export default class ShowRecentItems extends LightningElement {
    @api records;
    @api columns;
    @api title;
}