module.exports = {
  signUp: async (req, res, next) => {
    // Email and Password
    console.log("UsersController.signUp() called.")
  },
  signIn: async (req, res, next) => {
    // Generate Token
    console.log("UsersController.signIn() called.")
  },
  secret: async (req, res, next) => {
    console.log("UsersController.secret() called.")
  }

}