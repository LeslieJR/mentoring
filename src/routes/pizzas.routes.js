import { Router } from 'express';
import { pizza } from '../controllers';

const router = Router();

router.post('/', pizza.create);
router.get('/getAll', pizza.getAll)
router.get('/getOne/:pizza_id', pizza.getOne)
router.put('/update/:pizza_id', pizza.update)
router.delete('/remove/:pizza_id', pizza.remove)
router.delete('/removeAll', pizza.removeAll)


export default router;