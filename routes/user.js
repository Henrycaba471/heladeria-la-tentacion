const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.home);
router.get('/domicilios', userController.domicilios);
router.post('/register', userController.saveUser);
router.post('/login', userController.login);

module.exports = router;
