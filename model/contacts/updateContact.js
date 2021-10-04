const {contact} = require('./schema/contactSchema')

const updateContact = async (contactId, body) => {
  await contact.findByIdAndUpdate(contactId, { $set: body })
  return contact.findById(contactId)
}

module.exports = {
    updateContact
}