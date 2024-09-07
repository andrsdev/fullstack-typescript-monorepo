import { ListProductsResponse, ProductsQuery } from '@repo/schemas';
import { queryOptions } from '@tanstack/react-query';

export const productsQueryOptions = ({ collection, sort }: ProductsQuery) => {
  const searchParams = new URLSearchParams({
    collection: collection?.toString() ?? '',
    sort: sort ?? '',
  });

  const url = `http://localhost:5001/api/products?${searchParams.toString()}`;

  return queryOptions<ListProductsResponse>({
    queryKey: ['productsSearch', collection, sort],
    queryFn: () => fetch(url).then((result) => result.json()),
  });
};
