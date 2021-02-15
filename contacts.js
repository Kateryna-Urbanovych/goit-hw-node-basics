import * as fs from 'fs/promises';
import * as path from 'path';
import shortid from 'shortid';

const contactsPath = path.join('db', 'contacts.json');
// console.log(contactsPath);

async function listContacts() {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf8');
        const parsedContacts = JSON.parse(contacts);
        console.table('listContacts:', parsedContacts);
    } catch (error) {
        console.error(error.message);
        return;
    }
}
// listContacts();

async function getContactById(contactId) {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf8');
        const parsedContacts = JSON.parse(contacts);

        const searchContact = parsedContacts.find(({ id }) => id === contactId);
        console.table('searchContact:', searchContact);
    } catch (error) {
        console.error(error.message);
        return;
    }
}
// getContactById(3);

async function removeContact(contactId) {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf8');
        const parsedContacts = JSON.parse(contacts);

        const updatedContacts = parsedContacts.filter(
            ({ id }) => id !== contactId,
        );
        console.table(updatedContacts);

        await fs.writeFile(
            contactsPath,
            JSON.stringify(updatedContacts, null, 2),
        );
        console.log(`Contact with id "${contactId}" was successfully removed`);
    } catch (error) {
        console.error(error.message);
        return;
    }
}
// removeContact(3);

async function addContact(name, email, phone) {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf8');
        const parsedContacts = JSON.parse(contacts);

        const newContact = {
            id: shortid.generate(),
            name,
            email,
            phone,
        };

        const updatedContacts = [newContact, ...parsedContacts];
        console.table(updatedContacts);

        await fs.writeFile(
            contactsPath,
            JSON.stringify(updatedContacts, null, 2),
        );
        console.log(`Contact was successfully added`);
    } catch (error) {
        console.error(error.message);
        return;
    }
}
// addContact('David Alyaska', 'david.alyaska@mail.com', '(562) 569-8823');

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
