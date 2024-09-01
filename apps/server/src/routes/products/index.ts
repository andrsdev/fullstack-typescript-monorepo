import express, { Express } from 'express';
import { ProductsService } from '../../services/products';
import { ListProductsResponse } from '@repo/schemas';

export function productsRoute(app: Express): void {
  const productsService = new ProductsService();
  const router = express.Router();
  app.use('/api/products', router);

  router.get('/', async function (_req, res, next) {
    try {
      const result = await productsService.list();
      const response: ListProductsResponse = {
        status: 'success',
        data: result,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  });
}
