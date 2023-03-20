import { Button, Space } from "antd";

type Props = {
  previousProduct: () => void;
  nextProduct: () => void;
}

const NavButtons = ({ previousProduct, nextProduct }: Props) => {
  return (
    <Space className="mt-4">
      <Button onClick={previousProduct}>Previous</Button>
      <Button onClick={nextProduct} type="primary">Next</Button>
    </Space>
  );
};

export default NavButtons;
