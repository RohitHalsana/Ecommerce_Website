import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
    console.log(getTotalCartAmount());

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
                            <div className="format format-main">
                                <img src={e.image} alt="" className="product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="quantity">{cartItems[e.id]}</button>
                                <p>{e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className="remove" />
                            </div>
                            <hr/>
                        </div>
            }
            return null;
        })}
        <div className="down">
            <div className="total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div> 
                    <hr/>
                    <div className="total-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>         
                    <hr/>
                    <div className="total-items">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>    
                    </div>
                    <hr/>
                </div>
                <button>Proceed To Checkout</button>
                </div>
                <div className="promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promobox">
                        <input type="text" placeholder='promo-code'/>
                        <button>Submit</button>               
                    </div>    
                 </div>
            </div>
        </div>
    )
}

export default CartItems