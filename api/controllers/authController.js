const prisma = require("../lib/prisma");
const { matchedData, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// post signUp

async function signUpPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      errors: errors.array(),
    });
  }

  const userData = matchedData(req);

  try {
    const existingUser = prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      console.log("an account already exists with this email.");
      return res
        .status(400)
        .json({ success: false, message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
      },
    });

    console.log("User created:" + user.username);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("ERROR with signUpPost: " + err);
  }
}

// post login
async function loginPost(req, res, next) {}
//

module.exports = {
  signUpPost,
  loginPost,
};
