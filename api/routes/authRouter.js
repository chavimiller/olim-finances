const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/authController");
const validateUser = require("../validators/signUpValidator");

authRouter.post("/signup", validateUser, authController.signUpPost);

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  },
);

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  },
);

module.exports = authRouter;
