import contacts from './contacts.js';
const { listContacts, getContactById, removeContact, addContact } = contacts;

// Получаем весь список контакстов в виде таблицы
listContacts();

// Получаем контакт по id
getContactById(3);

// Добавляем контакт (name, email, phone)
addContact('David', 'david.alyaska@mail.com', '(562) 569-8823');

// Удаляем контакт по id
removeContact(3);
