import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Vmart from './pages/Vmart';
import RegisterForm from './pages/Register';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext'; 
import { AuthProvider } from './context/AuthContext';
import Cart from './pages/Cart';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Payment from './pages/Payment';
import TrendCards from './components/TrendCards';
import LoginForm from './pages/LoginForm';
import PasswordResetRequest from './pages/PasswordResetRequest';
import NewPasswordReset from './pages/NewPasswordReset';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<Navbar/>}/>
          <Route path="/offers" element={<Offers />} />
          <Route path="/vmart" element={<Vmart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/products/men" element={<Men/>} />
          <Route path="/products/women" element={<Women/>} />
          <Route path="/products/kids" element={<Kids/>} />
          <Route path="/products/:gender/:category" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<TrendCards />} />
          <Route path="/reset-password" element={<PasswordResetRequest />} />
          <Route path="/reset-password/:userType/:id" element={<NewPasswordReset />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
