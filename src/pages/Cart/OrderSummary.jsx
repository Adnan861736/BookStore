

function OrderSummary({ getSubtotal, getTotal }) {
  
    return (
      <>
        <div className="cart-order-summary">
          <div className="order-summary-title">ORDER SUMMARY</div>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>${getSubtotal()}</span>
          </div>
          <div className="order-summary-item">
            <span>Shopping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Total</span>
            <span>${getTotal()}</span>
          </div>
        </div>
      
      </>
    );
  }
  
  export default OrderSummary;
  