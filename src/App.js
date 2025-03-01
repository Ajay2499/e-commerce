import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/components/HomePage';
import CategorySection from './components/ProductDetails/CategorySection';
import ProductCard from './components/ProductDetails/ProductCard';
import Cart from './components/components/Cart';
import { CartProvider } from './components/components/CartContext';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import PrivateRoute from './components/Authentication/PrivateRoute';
import AddressComponent from './components/AddressComponent/AddressComponent';
import Payment from './components/PaymentComponent.js/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            {/* Protected Routes */}
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategorySection />} />
            <Route path="/product/:categoryName" element={<ProductCard />} />
            <Route>
              <Route path="/cart" element={<Cart />} />
              <Route path='/address' element={<AddressComponent />} />
              <Route path='/payment' element={<Payment />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
