import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../Assets/dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef =useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');    
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>OrderIt</p>
      </div>
      <img className="dropdown" onClick= {dropdown_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link style={{color:"black",  textDecoration: 'none'} } to='/'>Shop</Link>{menu === "shop" && <hr/>}</li>
        <li onClick={() => setMenu("men")}><Link style={{color:"black", textDecoration: 'none'}} to='/men'>Men</Link>{menu === "men" && <hr/>}</li>
        <li onClick={() => setMenu("women")}><Link style={{color:"black", textDecoration: 'none'}} to='/women'>Women</Link>{menu === "women" && <hr/>}</li>
        <li onClick={() => setMenu("kids")}><Link style={{color:"black", textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "kids" && <hr/>}</li>
      </ul>
      <div className="nav-Login-cart">
      <Link style={{textDecoration: 'none'}} to='/login'><button className='Login'>Login</button></Link>
      <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    
  );
};
export default Navbar;
