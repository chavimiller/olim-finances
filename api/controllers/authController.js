const prisma = require("../lib/prisma");
// post signUp

function signUpPost(req, res) {
  // const errors = validationResult
  try {
    const existingUser = prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      console.log("an account already exists with this email.");
    }
  } catch (err) {
    console.error("ERROR with signUpPost: " + err);
  }
}

// post login

//
