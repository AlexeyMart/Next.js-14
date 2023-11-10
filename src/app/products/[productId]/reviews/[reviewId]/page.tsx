import React, { FC } from "react";

type Props = {
  params: {
    reviewId: string;
    productId: string;
  };
};

const ReviewDetail: FC<Props> = ({ params: { productId, reviewId } }) => {
  return (
    <>
      <h1>
        Product {productId} Review {reviewId}
      </h1>
    </>
  );
};

export default ReviewDetail;
