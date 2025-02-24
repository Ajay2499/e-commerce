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
            <Route path="/homePage" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/category/:categoryName" element={<PrivateRoute><CategorySection /></PrivateRoute>} />
            <Route path="/product/:categoryName" element={<PrivateRoute><ProductCard /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
