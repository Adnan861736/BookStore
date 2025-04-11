// src/Components/Cart.js
import { useContext } from "react";
import "./Cart.css";
import OrderSummary from "./OrderSummary";
import CartContext from "../../Context/CartContext";
import CartItem from "../../pages/Cart/CartItem";
function Cart() {
  
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext); // الحصول على البيانات من السياق

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotal = () => {
    return getSubtotal(); // هنا نفترض أن Total هو نفسه Subtotal في الوقت الحالي
  };

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              item={item}
            />
          ))}
        </div>

        <OrderSummary getSubtotal={getSubtotal} getTotal={getTotal} />
      </div>
    </div>
  );
}

export default Cart;
