const express = require('express');
const { createPackage, getAllPackage, getPackage } = require('../controller/package_controller');
const { userMidleware, isAdmin } = require('../middleware/user_middleware');
const router = express.Router();


router.post("/create",userMidleware,isAdmin,createPackage);
router.get("/:id",getPackage)
router.get("/",getAllPackage);

module.exports = router;