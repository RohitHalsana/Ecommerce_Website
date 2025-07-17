import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_icon_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
        <div className="left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            < div className="img">
                <img className="main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon_dull} alt="" />
                <p>(1250)</p>
            </div>
            <div className="prices">
                <div className="old">
                    ${product.old_price}
                </div>
                <div className='new'>
                    ${product.new_price}
                </div>
            </div>
            <div className="description">
                    {product.name}
                    Name : MEN POLO TSHIRT
                    Fabric : Poly Blend
                    Sleeve Length : Short Sleeves
                    Pattern : Solid
                    <br />
                    <ul>
                        <li>Net Quantity (N) : 1 </li>
                        <h3> Sizes :</h3>
                        <li>M (Chest Size : 40 in, Length Size: 27 in)</li>
                        <li>L (Chest Size : 42 in, Length Size: 28 in)</li>
                        <li>XXL (Chest Size : 46 in, Length Size: 30 in)</li>
                        <li> XXXL (Chest Size : 48 in, Length Size: 31 in)</li>
                        <li>4XL (Chest Size : 50 in, Length Size: 32 in)</li>
                    </ul>   
            </div>
            <div className="size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div onClick={()=>{}}>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                        <div>XXXL</div>
                        <div>4XL</div>
                    </div>
                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                    <p className="category"><span>Category:</span>Women, T-Shirt, Crop Top</p>
                    <p className="category"><span>Tags:</span> Latest, Modern, Top Trending</p>
            </div>
        </div>        
    </div>
  )
}

export default ProductDisplay