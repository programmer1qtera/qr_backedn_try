const express = require('express');
const { createUser, login, findAllUser, findUserId, updateUser } = require('../controller/user_controller');
const { userMidleware } = require('../middleware/user_middleware');

const router = express.Router();

router.post("/register",createUser);
router.post("/login",login);
router.put("/update",userMidleware,updateUser);
router.get("/id",userMidleware,findUserId);
router.get("/",findAllUser);





module.exports = router