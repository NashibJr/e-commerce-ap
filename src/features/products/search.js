import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "./productsSlice";

const Search = () => {
  const [product, setProduct] = useState("");
  const results = useSelector((state) => state.products.search);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        name="product"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
        placeholder="Search for a product"
      />
      <button
        type="button"
        onClick={() => {
          dispatch(handleSearch(product));
          console.log(results);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Search;
