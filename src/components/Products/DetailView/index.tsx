import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../../services/post";
import { Button, Card, Col, Descriptions, Row } from "antd";
import CarouselContainer from "./Carousel";
import Description from "./Description";

const ProductDetails = () => {
  const { id } = useParams();
  const { data = {}, isLoading } = useQuery(
    ["productDetails", id],
    ({ queryKey }: any) => {
      const [, id] = queryKey;
      return getProduct(id);
    },
    { enabled: !!id }
  );

  return (
    <>
      <Link to="/products">
        <Button>Go to listing</Button>
      </Link>
      <Row justify="center">
        <Col span={10}>
          <Row align="stretch">
            <Col span={12}>
              <Card>
                <CarouselContainer images={data.images} />
              </Card>
            </Col>
            <Col span={12}>
              <Descriptions title={data.title} column={1} className="px-4 pt-2">
                <Descriptions.Item label="ProductName">{data.title}</Descriptions.Item>
                <Descriptions.Item label="Price">{data.price}</Descriptions.Item>
                <Descriptions.Item label="Rating">{data.rating}/5</Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Card>
            <Description details={data} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
