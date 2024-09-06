import { Product } from '@repo/schemas';
import { Link } from '@tanstack/react-router';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      key={product.id}
      className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-500 transition-all bg-white p-3 pb-6 "
    >
      <img className="rounded" src={product.image ?? undefined}></img>
      <div className="mt-4">
        <h2 className="font-bold mb-1 text-lg">{product.name}</h2>
        <p className="text-sm text-gray-700">{product.description}</p>
      </div>
    </Link>
  );
}
