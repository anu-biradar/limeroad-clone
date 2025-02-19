import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Vmart from './pages/Vmart';
import Login from './pages/login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext'; 
import Cart from './pages/Cart';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import RelatedProducts from './pages/RelatedProducts';
import Payment from './pages/Payment';
import TrendCards from './components/TrendCards';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/vmart" element={<Vmart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/men" element={<Men/>} />
          <Route path="/products/women" element={<Women/>} />
          <Route path="/products/kids" element={<Kids/>} />
          <Route path="/products/:gender/:category" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:gender/:model/:type" element={<RelatedProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<TrendCards />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
