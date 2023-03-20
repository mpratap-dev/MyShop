import { Card, Col, Skeleton } from "antd";
import { LIMIT } from "../../../constants/products";
const { Meta } = Card;

const CardLoading = () => {
  return (
    <>
      {Array(LIMIT)
        .fill(0)
        .map((each, index) => (
          <Col span={6} key={index}>
            <Card
              hoverable
              className="overflow-hidden"
              cover={
                <div
                  className="text-center pt-7 pb-6"
                  style={{ background: "#eee" }}
                >
                  <Skeleton.Image active />
                </div>
              }
            >
              <Meta description={<Skeleton paragraph={{ rows: 1 }} active />} />
            </Card>
          </Col>
        ))}
    </>
  );
};

export default CardLoading;
