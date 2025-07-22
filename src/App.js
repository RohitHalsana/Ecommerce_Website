import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footers/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>  
        <ScrollToTop/>
        <div className='Below_Navbar'>  
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner = {men_banner} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner = {women_banner}category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid"/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>    
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
