const { registration } = require('../../model/users')
const {Conflict} = require('http-errors')

const signUp = async (req, res, next) => {
  try {
    const newUser = await registration(req.body)
    if (!newUser) {
      throw new Conflict('This Email has been used already')
    }
    const {email, password} = newUser
    res.status(201).json({email, password})

  } catch (error) {
    next(error)
  }
}

module.exports = {
    signUp
}