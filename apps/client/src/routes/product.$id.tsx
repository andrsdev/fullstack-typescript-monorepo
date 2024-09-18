import { createFileRoute } from '@tanstack/react-router';
import { getProductQueryOptions } from '../utils/getProductsQueryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/product/$id')({
  component: Page,
  loader: ({ context, params }) => ({
    product: context.queryClient.ensureQueryData(
      getProductQueryOptions({ id: Number(params.id) }),
    ),
  }),
  pendingMinMs: 0,
});

function Page() {
  const params = Route.useParams();
  const { data } = useSuspenseQuery(
    getProductQueryOptions({ id: Number(params.id) }),
  );

  if (data.status === 'error') {
    return <span>Error from API: {JSON.stringify(data.error)}</span>;
  }

  return (
    <div className="text-center container mx-auto py-12">
      <h1>{data.data?.name}</h1>
      <p>{data.data?.description}</p>
    </div>
  );
}
