import React, { FC } from "react";

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetail: FC<Props> = ({ params }) => {
  return (
    <>
      <h1>Detail about product {params.productId}</h1>
    </>
  );
};

export default ProductDetail;
