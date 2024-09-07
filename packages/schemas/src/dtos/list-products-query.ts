import { z } from 'zod';

export const ProductsQuerySchema = z.object({
  collection: z.coerce.number().optional(),
  sort: z.enum(['price-desc', 'price-asc']).optional(),
});

export type ProductsQuery = z.infer<typeof ProductsQuerySchema>;
