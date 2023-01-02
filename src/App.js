import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Login from './components/login/login';
import Payment from './components/payment/payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/orders/orders';
import Footer from './components/footer/footer';

const promise = loadStripe('pk_test_51MDQ6GBndkx8p8CbxcQCUElukzqaYaHn9wgQDrtLUz6xu7LfiE3GGQwdsSpfmRcyMZLRNUdqiQ0IBQxUndWklDE900BIrpVokj');

function App() {
  return (
    <Router>
    
      <div className="App">
      
      <Routes>   
        <Route path="/orders" element={(
          <>
            <Header/>
            <Orders />
            <Footer />
          </>
        )}/>
      
        <Route path="/" element={(
          <>
            <Header/>
            <Home />
            <Footer />
          </>
        )} />
        <Route path="/checkout" element={(
          <>
            <Header/>
            <Checkout />
            <Footer />
          </>
        )} />

        <Route path="/payment" element={(
          <>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </>
        )} />

        <Route path="/login" element={<Login />}/>
        
      </Routes>

      </div>
    </Router>
  );
}

export default App;
