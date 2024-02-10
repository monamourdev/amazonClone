
import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={
          <p>CHECKOUT BABY</p>
        } />
      </Routes>
    </Router>
  );
}

export default App;
