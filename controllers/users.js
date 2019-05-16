const User = require('../models/user');

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;
    // check if there is a user with the same email
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).send({ error: 'Email is already in use'})
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Response with token
    res.json({ user: 'created' });
  },
  signIn: async (req, res, next) => {
    // Generate Token
    console.log("UsersController.signIn() called.")
  },
  secret: async (req, res, next) => {
    console.log("UsersController.secret() called.")
  }

}