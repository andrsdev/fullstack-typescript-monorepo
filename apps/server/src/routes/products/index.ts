import express, { Express } from 'express';
import { ProductsService } from '../../services/products';

export function productsRoute(app: Express): void {
  const service = new ProductsService();
  const router = express.Router();
  app.use('/api/products', router);

  router.get('/', async function (_req, res, next) {
    try {
      const products = await service.getProducts();
      res.status(200).json({
        products,
      });
    } catch (error) {
      next(error);
    }
  });
}
