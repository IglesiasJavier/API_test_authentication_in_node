import { Router } from "express";
import * as productsController from '../controllers/products.controller';
import { verifyToken } from "../middlewares";

const router = Router();

router.get('/',productsController.index);
router.post('/',verifyToken,productsController.store);
router.get('/:productId',productsController.show);
router.put('/:productId',verifyToken,productsController.update);
router.delete('/:productId',verifyToken,productsController.del);

export default router;