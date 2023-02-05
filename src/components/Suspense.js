import React from "react";

const Suspense = ({ loading, fallback, children }) => {
  return loading === "pending" ? fallback : children;
};

export default Suspense;
