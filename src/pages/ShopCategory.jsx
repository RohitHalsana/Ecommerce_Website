import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  console.log("Cat egory from props:", props.category);
  return (
    <div className='ShopCategory'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-12
          </span> out of 36 products
        </p>
        <div className="shopCatergory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id= {item.id} name= {item.name} image={item.image} new_price ={item.new_price} old_price = {item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
    </div>
  )
}

export default ShopCategory