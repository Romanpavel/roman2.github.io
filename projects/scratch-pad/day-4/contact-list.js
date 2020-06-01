// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };

} 

function makeContactList() {
    
 
    
    var contacts = []
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        
        addContact: function(contact) {
// add contacts to the contact list using the push method
            contacts.push(contact)
    
            },
            
            
        findContact: function(fullName) {
            // loop over the contacts array
            for(let i = 0; i < contacts.length; i++) {
                // for simplicity create a variable and assign it to all the contact iterations
                var currentObj = contacts[i]
                // if template strings of first and last name match the full name
                if (`${currentObj.nameFirst} ${currentObj.nameLast}` === fullName) {
                    // return the current object
                    return currentObj
                    // else return undefined
                } else {
                    return undefined;
                }
            }
        
        },
        
        
        // create a remove contact factory function
        removeContact: function(contact) {
            
            // loop over the contacts array
            for (let i = 0; i < contacts.length; i++) {
                // for simplicity assign variable t to all contacts
                var t = contacts[i];
                // if the contact matches the name in the contact list remove that contact using splice
                if(t === contact) {
                    contacts.splice(i, 1);
                }
            }
        },
        
        
        // create a printAllContactNames factory function
        printAllContactNames: function() {
            
            // create varaible names to hold the names
            var names = '';
            
            // loop over the contacts array
            
            for (let i = 0; i < contacts.length; i++) {
                // for simplicity create a variable and assign it to the contacts
            var nameObj = contacts[i]
            
            // if the i mathces the last index, add name only with no page breaks
            if(i === contacts.length - 1) {
                names += `${nameObj.nameFirst} ${nameObj.nameLast}`
                // add all names to the screen with a page break
            } else {
                names += `${nameObj.nameFirst} ${nameObj.nameLast}` + '\n'
            } 
            
            }
            // return a list of names
            return names;
        }
    }
    
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
