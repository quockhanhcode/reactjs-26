import React from 'react'

export default function Shoe(props) {
    const { dataProduct, getDetail } = props;

    const handleDetail = () => {
        getDetail(dataProduct);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={dataProduct.image} />
            </a>
            <div className="p-5">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dataProduct.name}</h5>
                </a>
                <p className="price">{dataProduct.quantity}</p>
                {/* Modal toggle */}
                <button onClick={handleDetail} data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle modal
                </button>
            </div>
        </div>
    )
}
