import React, { useContext, useState } from "react";
import "./Modal.css";
import Rating from "../Book-Slider/Rating";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"; // إضافة استيراد السياق

function Modal({ book, onClose }) {
  const { addToCart } = useContext(CartContext); // استخدام السياق هنا
  const [quantity, setQuantity] = useState(1); // حالة الكمية

  if (!book) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-content-img">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{book.title}</h5>

          <div className="modal-content-info-stock">
            <b>Status: </b>
            {book.inStock ? "In stock" : "Not in stock"}
          </div>

          <Rating rating={book.rating} reviews={book.reviews} />

          <div className="modal-content-info-author">
            <b> Author: </b>
            {book.author}
          </div>

          <div className="modal-content-info-price">
            <b>Price: </b>${book.price}
          </div>

          <div className="modal-add-to-cart">
            <input
              type="number"
              max="100"
              min="1"
              lang="en"
              dir="ltr"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="modal-add-to-cart-input"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              } // التأكد من السماح بالأرقام فقط
            />
            <button
              className="cart-btn"
              onClick={() => addToCart({ ...book, quantity: Number(quantity) })}
              >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>

          <Link to={`/book/${book.id}`} className="modal-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
