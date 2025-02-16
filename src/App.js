import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/components/HomePage';
import CategorySection from './components/ProductDetails/CategorySection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategorySection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
