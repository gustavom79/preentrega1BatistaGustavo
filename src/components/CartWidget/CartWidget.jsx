import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function CartWidget() {
  return (
    <div className="carrito">
    <FaSearch className="search" />
    <FaShoppingCart />
    <span className="cantidad">4</span>
    </div>
  )
}

export default CartWidget