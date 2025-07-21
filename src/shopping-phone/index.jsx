import React, { useState } from "react";
import Phone from "./phone";
import Detail from "./detail";
import data from "./data.json";
import Modal from "./modal"

export default function ShoppingPhone() {
  const [listProduct, setListProduct] = useState(data);
  const [productDetail, setProductDetail] = useState(listProduct[0]);
  const [carts, setCarts] = useState([]);


  const getHandleDetail = (product) => {
    // đối số
    setProductDetail(product);
  };
  // set cart
  const handleAddCart = (phone) => {
    // spread operator
    const newCart = [...carts];

    // kiem tra san pham da to tai trong cart chua7
    const index = newCart.findIndex((item) => item.maSP === phone.maSP);

    if (index === -1) { // chua ton tai
      // them sp vao cart
      // key: soLuong dung de quan ly so luong sp trong gio han
      const newPhone = { ...phone, soLuong: 1 };
      newCart.push(newPhone);
    }
    else {
      // thay doi so luongsp co trogn cart
      // da co sp
      newCart[index].soLuong += 1;
    }

    // set cart voi gia tri new cart
    setCarts(newCart);
  }
  // masp --> xac dinh sp can thay doi
  // quantity --> gia tri bang +1 or -1
  const handleCartQuantiy = (maSP, quanTity) => {
    // tim sp can thay doi


    
    // const newCart = [...carts]
    // const index = carts.findIndex((item) => item.maSP === maSP);
    // if (index !== -1) {
    //   newCart[index].soLuong += quanTity;
    // }
    // setCarts(newCart);
    // c2
    setCarts(carts.map((item) => {
      if (item.maSP !== maSP) return item
      return {
        ...item, soLuong: item.soLuong + quanTity,
      }

    }))
  }
  // remove cart
  const handleRemove = (maSP) => {
    // const newCart = [...carts]
    // const index = carts.findIndex((item => item.maSP === maSP));
    // if (index !== -1) {
    //   newCart.splice(index, 1);
    //   setCarts(newCart);
    // }
    // c2
    setCarts(carts.filter((item) => item.maSP !== maSP));
  }


  const renDerList = () => {
    return listProduct.map((product) => {
      return (
        <Phone
          key={product.maSP}
          product={product}
          getProduct={getHandleDetail}
          handleAddCart={handleAddCart}
        />
      );
    });
  };

  return (
    <div className="container mx-auto">
      <h1>Add to card</h1>
      <Modal carts={carts} handleCartQuantiy={handleCartQuantiy} handleRemove={handleRemove} />
      <h1>Shopping phone</h1>
      <div className="grid grid-cols-3 gap-1">{renDerList()}</div>
      <h1 className="text-center mt-2">Chi tiết sản phẩn</h1>
      <Detail productDetail={productDetail} />
    </div>
  );
}
