// @ts-ignore
const express = require("express");
// @ts-ignore
const router  = express.Router();
const carController = require("./../controllers/carsControllers")

router.get("/", carController.get);
router.get("/:id",carController.getById)
router.post("/create",carController.post);
router.put("/update/:id", carController.updateById)
router.delete("/delete/:id", carController.deleteById);

module.exports = router;
