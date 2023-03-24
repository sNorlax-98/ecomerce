import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';
import CartState from './context/CartState';

function App() {
  return (
    <CartState>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </CartState>
  );
}

export default App;
