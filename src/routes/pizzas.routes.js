import { Router } from 'express';
import { methods } from '../controllers/pizza.controller.js';

const router = Router();

router.post('/', methods.create);
router.get('/getAll',methods.getAll)
router.get('/getOne/:pizza_id',methods.getOne)
router.put('/update/:pizza_id', methods.update)
router.delete('/remove/:pizza_id', methods.remove)
router.delete('/removeAll', methods.removeAll)


export const routes = router;