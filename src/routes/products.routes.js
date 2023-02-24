import { Router } from "express";
import * as productsController from '../controllers/products.controller';

const router = Router();

router.get('/',productsController.index);
router.post('/',productsController.store);
router.get('/:productId',productsController.show);
router.put('/:productId',productsController.update);
router.delete('/:productId',productsController.del);

export default router;