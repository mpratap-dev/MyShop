import { useEffect, useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";
import Header from "./Header";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/post";
import { LIMIT, VIEWS } from "../../constants/products";

const { LIST, CARD } = VIEWS;

const index = () => {
  const [viewType, setViewType] = useState<typeof LIST | typeof CARD>(CARD);
  const [products, setProducts] = useState([]);
  const [dataSize, setDataSize] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { products, total } = await getProducts({ limit: LIMIT, skip: offset * LIMIT });
      setProducts(products);
      setDataSize(total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [offset]);

  return (
    <div className="py-4">
      <Header viewType={viewType} setViewType={setViewType} />
      {viewType === CARD ? (
        <CardView
          isLoading={isLoading}
          products={products}
          setOffset={setOffset}
        />
      ) : (
        <ListView 
          isLoading={isLoading}
          total={dataSize}
          products={products}
          setOffset={setOffset}
        />
      )}
    </div>
  );
};

export default index;
