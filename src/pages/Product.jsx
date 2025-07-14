import React, { use, useContext } from 'react'
import Breadcrum from '../components/Breadcrums/Breadcrum';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useparams();
  const product =all_product.find((e)=> e.id === Number(productId));

  return (
    <div className="Product">
      <Breadcrum product = {product}/>
    </div>
  )
}

export default Product 