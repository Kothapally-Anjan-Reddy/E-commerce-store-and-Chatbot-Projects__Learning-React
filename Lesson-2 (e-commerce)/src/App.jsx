
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      // Above the path="/" has a shortcut which is nothing but the index keyword.
      // Here path is the ending url which is given in the website.
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />}/>
      <Route path="tracking" element={<TrackingPage />}/>
    </Routes>
  );
}

export default App
