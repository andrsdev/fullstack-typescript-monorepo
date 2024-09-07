import express, { Express } from 'express';
import { ProductsService } from '../../services/products';
import { ListProductsResponse, ProductsQuerySchema } from '@repo/schemas';
import { validateQuery } from '../../middlewares/validate-query';

export function productsRoute(app: Express): void {
  const productsService = new ProductsService();
  const router = express.Router();
  app.use('/api/products', router);

  router.get(
    '/',
    validateQuery(ProductsQuerySchema),
    async function (req, res, next) {
      try {
        const result = await productsService.list(req.query);
        const response: ListProductsResponse = {
          status: 'success',
          data: result,
        };

        res.status(200).json(response);
      } catch (error) {
        next(error);
      }
    },
  );
}
