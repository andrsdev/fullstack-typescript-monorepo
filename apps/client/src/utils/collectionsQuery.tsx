import { ListProductsResponse } from '@repo/schemas';
import { queryOptions } from '@tanstack/react-query';

export const collectionsQueryOptions = () => {
  const url = 'http://localhost:5001/api/collections';

  return queryOptions<ListProductsResponse>({
    queryKey: ['collections'],
    queryFn: () => fetch(url).then((result) => result.json()),
  });
};
