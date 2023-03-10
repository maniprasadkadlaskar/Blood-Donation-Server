const express = require("express");
const controller = require("../controllers");
const { auth } = require("../utils");
const router = express.Router();

router.get("/" , auth , controller.authorizeUser);
router.get("/users" , controller.getUsers);
router.post("/users" , controller.addUser);
router.post("/login" , controller.validateUser);
router.post("/register" , controller.registerUser);

module.exports = router;