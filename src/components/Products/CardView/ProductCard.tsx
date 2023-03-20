import { Card, Col } from "antd";

const { Meta } = Card;
export type ProductData = {
  id: number;
  title: string;
  brand: string;
  thumbnail: string; 
  rating: string;
};

const ProductCard = ({ productData }: { productData: ProductData }) => {
  const { id, title, thumbnail } = productData;

  return (
    <Col span={6} key={id}>
      <Card
        hoverable
        cover={<img alt="example" src={thumbnail} style={{ height: 150,}}/>}
      >
        <Meta title={title} description="www.instagram.com" />
      </Card>
    </Col>
  );
};

export default ProductCard;
