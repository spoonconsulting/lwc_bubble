import { LightningElement, api } from 'lwc';
import accountContacts from '@salesforce/apex/AccountController.contacts';


export default class Contact extends LightningElement {
    @api recordId
    contacts = []
    selectedContact = {}

    connectedCallback () {
        this.template.addEventListener('contactselected', this.handleSelection);

        accountContacts({ accountId: this.recordId }).then(res => {
            this.contacts = res
        })
    }

    handleSelection = (event) => {
        const contactId = event.detail.Id
        this.selectedContact = this.contacts.find(contact => contact.Id === contactId)
    };
}