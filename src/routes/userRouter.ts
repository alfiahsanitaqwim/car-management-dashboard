//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();
const userController = require("./../controllers/usersController");

router.put("/update/role", userController.updateRole)
router.get("/current/user", userController.getCurrentUser) 
router.post("/register", userController.register); 

module.exports = router;