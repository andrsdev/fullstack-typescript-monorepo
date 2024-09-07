import { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';

type RootContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2 container mx-auto">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/search" className="[&.active]:font-bold">
          Search
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
