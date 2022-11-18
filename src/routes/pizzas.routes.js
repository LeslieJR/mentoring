const {Router} = require('express');
const controller = require('../controllers/pizza.controller');

const router = Router();

router.post('/', controller.create);

module.exports = router;