import { useState } from "react";
import { Card, Col, Row } from "antd";
import { Table } from "antd";
import useColumns from "./headers";
import useFilters from "./useFilters";

type Props = {
  isLoading: boolean;
  products: any[];
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  total: number;
};

const ListView = (props: Props) => {
  const { products, isLoading, setOffset, total } = props;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const getColumnSearchProps = useFilters({ setSearchedColumn, setSearchText });
  const onPageChange = (page: number) => setOffset(page - 1);
  const columns = useColumns({ getColumnSearchProps });

  return (
    <Row justify="center">
      <Col span={16}>
        <Card bodyStyle={{padding: 0}}>
          <Table
            columns={columns}
            dataSource={products}
            loading={isLoading}
            pagination={{
              defaultCurrent: 1,
              total: 100,
              onChange: onPageChange,
              showSizeChanger: false,
            }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ListView;
