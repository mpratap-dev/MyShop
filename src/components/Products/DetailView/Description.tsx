import { Descriptions } from "antd";
import React from "react";

const Description = ({ details }: { details: any }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    thumbnail,
    images,
    brand,
    category,
    stock,
    rating,
  } = details;

  return (
    <Descriptions title="Product Info">
      <Descriptions.Item label="Description">{description}</Descriptions.Item>
    </Descriptions>
  );
};

export default Description;
