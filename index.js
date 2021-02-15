import { argv } from './lib/yargs.js';
import contacts from './contacts.js';

const { listContacts, getContactById, removeContact, addContact } = contacts;

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            listContacts();
            break;

        case 'get':
            getContactById(id);
            break;

        case 'add':
            addContact(name, email, phone);
            break;

        case 'remove':
            removeContact(id);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);

// Получаем весь список контактов в виде таблицы
// listContacts();

// Получаем контакт по id
// getContactById(3);

// Добавляем контакт (name, email, phone)
// addContact('David', 'david.alyaska@mail.com', '(562) 569-8823');

// Удаляем контакт по id
// removeContact(3);
