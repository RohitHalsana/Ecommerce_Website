import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>  
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
