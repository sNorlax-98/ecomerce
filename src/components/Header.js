import logo from "./snor-store-logo.PNG";
import "./Style.css";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import Home from '../Home'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand"  to='/' element={<Home/>} >Snor-Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/' element={<Home/>}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/cart' element={<Cart/>} >Cart</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" >Action</Link></li>
            <li><Link className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
        <img className="me-2" alt="logo" src={logo}/>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Header;
