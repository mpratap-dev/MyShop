import ProductCard, { ProductData } from "./ProductCard";
import NavButtons from "./NavButtons";
import { Col, Row } from "antd";
import ProductsSkeleton from "./ProductsSkeleton";

type Props = {
  isLoading: boolean;
  products: any[];
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

const CardView = ({ isLoading, products, setOffset }: Props) => {
  const previousProduct = () => setOffset((offset) => Math.max(offset - 1, 0));
  const nextProduct = () => setOffset((offset) => Math.min(offset + 1, 100));

  return (
    <Row justify="center">
      <Col span={16}>
        <Row gutter={[16, 16]} justify="center">
          {isLoading ? (
            <ProductsSkeleton />
          ) : (
            products.map((product: ProductData) => (
              <ProductCard productData={product} />
            ))
          )}
        </Row>
        <NavButtons
          previousProduct={previousProduct}
          nextProduct={nextProduct}
        />
      </Col>
    </Row>
  );
};

export default CardView;
