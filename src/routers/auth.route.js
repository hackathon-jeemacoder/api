const express = require('express');
const authController = require('../controllers/auth.controller');
// const verifyToken = require('../middlewares/verifyToken');
// const verifyIsAdmin = require('../middlewares/verifyAdmin');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
// router.get('/profile', verifyToken, authController.getProfile);
// router.get('/admin/users', verifyToken, verifyIsAdmin, authController.getUsers);

module.exports = router;
