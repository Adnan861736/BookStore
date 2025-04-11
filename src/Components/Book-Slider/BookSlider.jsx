import React, { useState } from "react";
import "./BookSlider.css";
import Rating from "./Rating";
import Modal from "../Modal/Modal";
import CartContext from "../../Context/CartContext";
import  { useContext } from 'react';

function BookSlider({ data }) {
  const { addToCart } = useContext(CartContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-slider-container">
      {currentIndex > 0 && (
        <i className="bi bi-chevron-left arrow-left" onClick={moveLeft}></i>
      )}

      <div className="book-slider-wrapper">
        {data.map((item) => (
          <div
            key={item.id}
            className="book-slide-item"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="book-slide-image"
            />
            <h2 className="book-slide-title">{item.title}</h2>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slide-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i className="bi bi-eye-fill" onClick={() => openModal(item)}></i>
              <i onClick={()=>addToCart({...item,quantity:1})}  className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>

      {currentIndex < data.length - 1 && (
        <i className="bi bi-chevron-right arrow-right" onClick={moveRight}></i>
      )}

      {showModal && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  );
}

export default BookSlider;
