import { LightningElement, api } from 'lwc';

export default class ContactDetails extends LightningElement {
    @api contact

    get email() {
        return `mailto:${this.contact.Email}`;
    }
}