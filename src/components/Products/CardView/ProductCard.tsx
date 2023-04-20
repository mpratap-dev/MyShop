import { Card, Col } from "antd";
import { Link } from "react-router-dom";

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
      <Link to={`/products/${id}`} style={{ display: "block" }}>
        <Card
          hoverable
          cover={<img alt="example" src={thumbnail} style={{ height: 150 }} />}
        >
          <Meta title={title} description="www.instagram.com" />
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
