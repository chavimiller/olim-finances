const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/authController");
const validateUser = require("../validators/signUpValidator");

authRouter.post("/signup", validateUser, authController.signUpPost);

module.exports = authRouter;
