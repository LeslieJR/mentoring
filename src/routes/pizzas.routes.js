const {Router} = require('express');
const controller = require('../controllers/pizza.controller');

const router = Router();

router.post('/', controller.create);
router.get('/getAll', controller.getAll)
router.get('/getOne/:pizza_id', controller.getOne)
router.put('/update/:pizza_id', controller.update)
router.delete('/remove/:pizza_id', controller.remove)
router.delete('/removeAll', controller.removeAll)


module.exports = router;