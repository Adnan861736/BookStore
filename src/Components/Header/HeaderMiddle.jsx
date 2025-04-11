import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

function HeaderMiddle() {
  const { cartItemsLength } = useContext(CartContext);
  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i> <b>Store</b>
      </Link>
      <div className="header-middle-search-Box">
        <input
          type="search"
          placeholder="Search in book store..."
          className="header-middle-search"
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        <i className="bi bi-cart2"></i>
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}
      </Link>
    </div>
  );
}
export default HeaderMiddle;
