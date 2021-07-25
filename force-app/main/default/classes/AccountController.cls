public with sharing class AccountController {
    @AuraEnabled
    public static list<Contact> contacts(Id accountId){
        list<Contact> contacts = new list<Contact>();
        for(Contact con: [select Id, 
                            Name,
                            FirstName, 
                            LastName,
                            Email
                        from Contact 
                        where AccountId = :accountId]) {
            contacts.add(con);
        }
        return contacts;
    }
}
