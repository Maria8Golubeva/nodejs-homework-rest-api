const fs = require('fs/promises')
const contactsPath = require('path').resolve('./db/contacts.json')

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(contacts)
}

module.exports = {
    listContacts
}