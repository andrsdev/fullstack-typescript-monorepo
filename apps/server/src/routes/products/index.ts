import express, { Express } from 'express';
import { ProductsService } from '../../services/products';

export function productsRoute(app: Express): void {
  const productsService = new ProductsService();
  const router = express.Router();
  app.use('/api/products', router);

  router.get('/', async function (_req, res, next) {
    try {
      const data = await productsService.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  });
}
