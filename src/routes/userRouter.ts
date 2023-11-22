// @ts-ignore
const express = require("express");
// @ts-ignore
const router = express.Router();
const userController = require("./../controllers/usersController")

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
