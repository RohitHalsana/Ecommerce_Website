import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
// import 

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className="cartItems">
        <div className="format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                            <div className="format">
                                <img src={e.image} alt="" className="product-item" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="quantity">{cartItems[e.id]}</button>
                                <p>{e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className="remove" />
                            </div>
                        </div>
            }
        })}
    </div>
    )
}

export default CartItems