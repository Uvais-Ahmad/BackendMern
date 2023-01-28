const express = require('express');
const router = express.Router();

router.post('/add-user');
router.post('/login-user');
router.post('/add-order');
router.get('/get-order');


module.exports = router;