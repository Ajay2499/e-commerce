import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/components/HomePage';
import CategorySection from './components/ProductDetails/CategorySection';
import ProductCard from './components/ProductDetails/ProductCard';
import Cart from './components/components/Cart';
import { CartProvider } from './components/components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategorySection />} />
            <Route path="/product/:categoryName" element={<ProductCard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
