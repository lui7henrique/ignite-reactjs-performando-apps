import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.name} - <strong>R${product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Add</button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
