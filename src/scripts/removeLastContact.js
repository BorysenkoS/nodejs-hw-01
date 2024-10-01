import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    contacts.pop();
    return writeContacts(contacts);
  } catch (error) {
    console.error('Some error: ', error);
  }
};

removeLastContact();
