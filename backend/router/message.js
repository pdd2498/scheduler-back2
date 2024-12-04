const express = require("express");
const sendMessage = require("../controler/message");

const router = express.Router();

router.post("/send" , sendMessage.message);
router.get("/data" , sendMessage.data);

module.exports = router;