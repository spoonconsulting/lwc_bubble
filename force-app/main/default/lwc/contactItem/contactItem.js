import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {
    @api contact

    select () {
        this.dispatchEvent(new CustomEvent('contactselected', 
                            { detail: { Id: this.contact.Id }, 
                              bubbles: true, 
                              composed: true }))
    }
}