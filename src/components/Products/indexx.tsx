import { useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";
import Header from "./Header";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/post";
import { LIMIT, VIEWS } from "../../constants/products";

const { LIST, CARD } = VIEWS;

const index = () => {
  const [viewType, setViewType] = useState<typeof LIST | typeof CARD>(CARD);
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = useQuery(
    ["post", offset], 
    () => getProducts({ limit: LIMIT, skip: offset * LIMIT })
  );

  const { products } = data || {};

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
          products={products}
          setOffset={setOffset}
        />
      )}
    </div>
  );
};

export default index;
