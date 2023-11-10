import React, { FC } from "react";

type Props = {
  params: {
    productId: string;
  };
};

const ProductReviews: FC<Props> = ({ params: { productId } }) => {
  return (
    <>
      <h1>Product {productId} Reviews</h1>
    </>
  );
};

export default ProductReviews;
