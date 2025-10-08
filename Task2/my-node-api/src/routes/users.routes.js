const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/users", userController.getUsers);

router.get("/hello", userController.getApi);

router.post("/data", userController.postApi);

router.put("/update/:id", userController.putApi);

router.delete("/remove/:id", userController.deleteApi);

module.exports = router;
