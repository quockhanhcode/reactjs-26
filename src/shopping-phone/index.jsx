import React, { useState } from "react";
import Phone from "./phone";
import Detail from "./detail";
import data from "./data.json";

export default function ShoppingPhone() {
  const [listProduct, setListProduct] = useState(data);
  const [productDetail, setProductDetail] = useState(listProduct[0]);

  const renDerList = () => {
    return listProduct.map((product) => {
      return (
        <Phone
          key={product.maSP}
          product={product}
          getProduct={getHandleDetail}
        />
      );
    });
  };

  const getHandleDetail = (product) => {
    // đối số
    setProductDetail(product);
  };

  return (
    <div className="container mx-auto">
      <h1>Shopping phone</h1>
      <div className="grid grid-cols-3 gap-1">{renDerList()}</div>
      <h1 className="text-center mt-2">Chi tiết sản phẩn</h1>
      <Detail productDetail={productDetail} />
    </div>
  );
}
