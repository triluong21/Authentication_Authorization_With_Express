const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration/index');

signToken = user => {
  return JWT.sign({
    iss: 'Tri Luong',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1) // current time plus 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;
    // check if there is a user with the same email
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).send({ error: 'Email is already in use' })
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate token
    const token = signToken(newUser);
    res.status(200).json({ token });
  },
  signIn: async (req, res, next) => {
    // Generate Token
    const token = signToken(req.user);
    res.status(200).json({token});
  },
  secret: async (req, res, next) => {
    res.status(200).json({ secret: "resources" });
  }

}