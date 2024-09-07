import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
  return (
    <nav className="navbar">
      <div>
      <img className="logo" src={logo} alt="Logo de la Marca" />  
      </div>
      <ul className="navbar-links">
        <li className="navbar-items">
            <a href="#">Home</a>
        </li>
        <li className="navbar-items">
            <a href="#">Zapatillas</a>
        </li>
        <li className="navbar-items">
            <a href="#">Botines</a>
        </li>
        <li className="navbar-items">
            <a href="#">Camisetas</a>
        </li>
        </ul>  
        <CartWidget/>
    </nav>
  )
}

export default NavBar