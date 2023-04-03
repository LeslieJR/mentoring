const {Router} = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/', controller.pizza.create);
router.get('/getAll', controller.pizza.getAll)
router.get('/getOne/:pizza_id', controller.pizza.getOne)
router.put('/update/:pizza_id', controller.pizza.update)
router.delete('/remove/:pizza_id', controller.pizza.remove)
router.delete('/removeAll', controller.pizza.removeAll)


module.exports = router;