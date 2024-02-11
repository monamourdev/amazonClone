
import './App.css';
import Checkout from './Checkout';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
