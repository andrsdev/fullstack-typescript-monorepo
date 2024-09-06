import { ListProductsResponse } from '@repo/schemas';
import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

export const productSearchSchema = z.object({
  collection: z.number().optional(),
  sort: z.string().optional(),
});

export type ProductSearch = z.infer<typeof productSearchSchema>;

export const productsQueryOptions = ({ collection }: ProductSearch) => {
  const searchParams = new URLSearchParams({
    collection: collection?.toString() ?? '',
  });

  const url = `http://localhost:5001/api/products?${searchParams.toString()}`;

  return queryOptions<ListProductsResponse>({
    queryKey: ['productsSearch', collection],
    queryFn: () => fetch(url).then((result) => result.json()),
  });
};
