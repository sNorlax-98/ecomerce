import logo from "./snor-store-logo.PNG";
import "./Style.css";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
const Header = () => {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-9">
              <ul className="nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" element={<Home/>} >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/about' element={<About/>}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/contact' element={<Contact/>}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item"> <Link to='/cart' className='nav-link' element={<Cart/>}>Cart</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
