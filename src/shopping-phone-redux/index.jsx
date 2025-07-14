import React, { useState } from "react";
import Phone from "./phone";
import Detail from "./detail";
// import data from "./data.json";
import Modal from "./modal"
import { useSelector } from "react-redux"; // lấy state từ redux

export default function ShoppingPhone() {
  const listProduct = useSelector((state) => state.shoppingPhone.listProduct);
  const [productDetail, setProductDetail] = useState(listProduct[0]);


  const renDerList = () => {
    return listProduct.map((product) => {
      return (
        <Phone
          key={product.maSP}
          product={product}
        />
      );
    });
  };

  return (
    <div className="container mx-auto">
      <h1>Add to card</h1>
      <Modal />
      <h1>Shopping phone</h1>
      <div className="grid grid-cols-3 gap-1">{renDerList()}</div>
      <h1 className="text-center mt-2">Chi tiết sản phẩn</h1>
      <Detail productDetail={productDetail} />
    </div>
  );
}
