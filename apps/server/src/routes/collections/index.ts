import express, { Express } from 'express';
import { CollectionsService } from '../../services/collections';

export function collectionsRoute(app: Express): void {
  const collectionsService = new CollectionsService();
  const router = express.Router();
  app.use('/api/collections', router);

  router.get('/', async function (_req, res, next) {
    try {
      const data = await collectionsService.list();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  });
}
