const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/me', verifyToken, userController.getUser);
module.exports = router;
