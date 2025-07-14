import React from "react";
import { useDispatch } from "react-redux"; // gửi action lên reducer
import { setDetailProduct, addToCart } from "./../store/shoppingPhoneReducer"


export default function Phone(props) {
  // console.log(props);
  const dispatch = useDispatch(); // dùng để gửi action lên redux store
  const { product } = props; // dùng destructuring
  const handleDetail = () => {
    // // getProduct(product);
    // const action = {
    //   type: "DETAIL_PRODUCT", //tên action
    //   payload: product, // chứa dữ liệu  gửi lên reducer
    // };
    // dispatch(action) // gửi action lên redux store
    // code rút gọn nhanh
    dispatch(setDetailProduct(product))
  };


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={product.hinhAnh} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.tenSP}
          </h5>
        </a>
        <button
          onClick={handleDetail}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Detail
        </button>
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
