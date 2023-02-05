import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product";
import Suspense from "../../components/Suspense";
import { fetchProducts } from "./productsSlice";

const Products = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Suspense loading={state.status} fallback={<div>loading, please wait</div>}>
      <div>
        {state?.products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </Suspense>
  );
};

export default Products;
