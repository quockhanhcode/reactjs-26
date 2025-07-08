import React from "react";

export default function Detail(props) {
  const { productDetail } = props;

  return (
    <div className="flex justify-center grid-cols-2">
      <div>
        <img src={productDetail.hinhAnh} alt="" />
      </div>

      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                tenSP
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.tenSP}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                manHinh
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.manHinh}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                heDieuHanh
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.heDieuHanh}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                cameraTruoc
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.cameraTruoc}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                cameraSau
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.cameraSau}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                RAM
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.ram}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ROM
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.rom}</td>
            </tr>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="w-[50%] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Gía
              </th>
              <td className="w-[50%] px-6 py-4">{productDetail.giaBan}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
