function CartItem({item, addToCart, removeFromCart}) {

    return (
      <div key={item.id} className="cart-item">
        <img
          src={item.image}
          alt={item.title}
          className="cart-item-img"
        />
        <div className="cart-item-info">
          <div className="cart-item-book-title">
            <b>Title:</b> {item.title}
            <div className="cart-item-author">
              <b>Author:</b> {item.author}
            </div>
          </div>

          <div>
            <div className="cart-item-quantity">
              {/* زيادة الكمية */}
              <button onClick={() => addToCart({...item, quantity: item.quantity + 1})}>
                <i className="bi bi-plus-lg add"></i>
              </button>
              <b>{item.quantity}</b>
              {/* تقليل الكمية إذا كانت الكمية أكبر من 1 */}
              <button 
                onClick={() => item.quantity > 1 && addToCart({...item, quantity: item.quantity - 1})}
              >
                <i className="bi bi-dash-lg sub"></i>
              </button>
            </div>
            <div className="cart-item-price">
              <b>Price:</b> ${item.price * item.quantity}
            </div>
            <div className="delete-btn">
              <button onClick={() => removeFromCart(item.id)}>
                <i className="bi bi-trash-fill delete"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItem;
