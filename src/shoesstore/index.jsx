import React, { useState } from 'react'
import Shoe from './shoe'
import Modal from './modal'
import data from "./data.json"

export default function ShoesStore() {
  const [product, getProduct] = useState(data);
  const [detailProduct, getDetailProduct] = useState(data[0]);
  const getListProduct = () => {
    return product.map((item) => {
      return <Shoe key={item.id} dataProduct={item} getDetail={getDetail} />
    })
  }
  const getDetail = (data) => {
    getDetailProduct(data);
  }
  return (
    <div className='container mx-auto'>
      <h1 className='text-center pt-[30px]'>Shoe Shope</h1>
      <div className='grid grid-cols-3 gap-3 mt-[30px]'>
        {getListProduct()}
      </div>
      <Modal detailProduct={detailProduct}/>
    </div>
  )
}
