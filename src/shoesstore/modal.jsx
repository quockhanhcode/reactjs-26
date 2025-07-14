import React from 'react'

export default function Modal(props) {
    const { detailProduct } = props;

    return (
        <div>
            {/* Main modal */}
            <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-3">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {detailProduct.name}
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />

                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className='table mx-auto' style={{ width: "200px" }}><img src={detailProduct.image} /></div>


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                                <tbody>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Tên sản phẩm:
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.name}
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Alias
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.alias}
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Gía tiền
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.price}
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Mô tả
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.description}
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Mô tả ngắn gọn
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.shortDescription}
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-500 border-b border-blue-400">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                            Số lượng
                                        </th>
                                        <td className="px-6 py-4">
                                            {detailProduct.quantity}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
