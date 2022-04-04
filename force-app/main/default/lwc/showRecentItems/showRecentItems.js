import { LightningElement, track,api } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import COLORS from '@salesforce/resourceUrl/colors';

export default class ShowRecentItems extends LightningElement {
    @api records;
    @api columns;
    @api title;
    isCssLoaded = false;

    renderedCallback(){ 
        if(this.isCssLoaded) return;
        this.isCssLoaded = true;
        loadStyle(this, COLORS).then(()=>{
            console.log("Loaded Successfully");
        }).catch(error=>{ 
            console.error("Error in loading the colors");
        })
    }
}