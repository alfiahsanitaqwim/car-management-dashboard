//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();
const loginController = require("./../controllers/loginControllers")

router.post("/login", loginController.login);

module.exports = router;
