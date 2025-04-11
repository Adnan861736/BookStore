import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../Components/Data/Books";
import Rating from "../../Components/Book-Slider/Rating";
import "./book.css";
import CartContext from "../../Context/CartContext";

const Book = () => {
  const { addToCart } = useContext(CartContext); // استخدام سياق Cart
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  const [quantity, setQuantity] = useState(1); // حالة الكمية

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="book">
      <div className="book-content">
        <img src={book.image} alt={book.title} className="book-img" />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />

          <div className="book-add-to-cart">
            <input
              type="number"
              max="100"
              min="1"
              lang="en"
              dir="ltr"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="book-add-to-cart-input"
            />
            <button
              className="book-cart-btn"
              onClick={() => addToCart({ ...book, quantity: Number(quantity) })}
              >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum, dolor sit amet consectetur dipisicing elit...
      </p>

      <div className="book-info-icons">
        <div className="book-icon">
          <i className="bi bi-file-earmark-break"></i>
          <div className="icon-text">
            <small>Print Length</small>
            <b>{book.printLength} Pages</b>
          </div>
        </div>
        <div className="book-icon">
          <i className="bi bi-globe"></i>
          <div className="icon-text">
            <small>Language</small>
            <b>{book.language}</b>
          </div>
        </div>
        <div className="book-icon">
          <i className="bi bi-calendar3"></i>
          <div className="icon-text">
            <small>Publication Date</small>
            <b>{book.publicationDate}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
