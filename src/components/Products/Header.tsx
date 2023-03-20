import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo-dark.webp";
import { VIEWS } from "../../constants/products";

const { LIST, CARD } = VIEWS;

type Props = {
  setViewType: (param: typeof LIST | typeof CARD) => void;
  viewType: typeof LIST | typeof CARD;
}

const Header = ({ setViewType, viewType }: Props) => {
  const onViewChange = ({ target: { value } }: RadioChangeEvent) => {
    setViewType(value);
  };

  const options = [
    { label: <AppstoreOutlined />, value: "card" },
    { label: <UnorderedListOutlined />, value: "list" },
  ];

  return (
    <div className={`d-flex justify-space-between px-4 ${viewType === CARD ? "pb-16" : "pb-6"} bg-grey`}>
      <img src={Logo} alt="my shop" style={{ width: 30, height: 30 }} />
      <Radio.Group
        options={options}
        onChange={onViewChange}
        value={viewType}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

export default Header;
