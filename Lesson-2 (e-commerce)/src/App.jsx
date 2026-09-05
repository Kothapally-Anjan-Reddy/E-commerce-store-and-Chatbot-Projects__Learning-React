
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      // Above the path="/" has a shortcut which is nothing but the index keyword.
      // Here path is the ending url which is given in the website.
      <Route path="checkout" element={<div>Checkout page</div>} />
    </Routes>
  );
}

export default App
