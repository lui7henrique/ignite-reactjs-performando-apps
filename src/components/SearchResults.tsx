import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>;
  onAddToWishList: (id: number) => void;
};

export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((acc, item) => acc + item.price, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
