import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSingup from './pages/LoginSingup';

function App() {
  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory category="Women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSingup/>}/>
    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
