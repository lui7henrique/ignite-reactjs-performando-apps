import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
