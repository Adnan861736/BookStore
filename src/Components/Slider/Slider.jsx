import "./Slider.css";
import { useState } from "react";
import FirstBook from "../../images/pngegg (2).png";
import SecondBook from "../../images/pngegg(1).png";
import ThridBook from "../../images/pngegg (4).png";
import FourdBook from "../../images/pngegg (5).png";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="slide first-slide">
          <div className="slide-image">
            <img src={FirstBook} alt="" />
          </div>
          <div className="slide-info">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. It's living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-image">
            <img src={SecondBook} alt="" />
          </div>
          <div className="slide-info">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>
        <div className="slide thrid-slide">
          <div className="slide-image">
            <img src={ThridBook} alt="" />
          </div>
          <div className="slide-info">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book right to your home.
            </p>
          </div>
        </div>
        <div className="slide fourd-slide">
          <div className="slide-image">
            <img src={FourdBook} alt="" />
          </div>
          <div className="slide-info">
            <h1 className="slide-info-title">The Question of Knowledge

</h1>
            <p className="slide-info-desc">
            Books form questions, seeking answers forever.

















            </p>
          </div>
        </div>
      </div>
      <button className="slider-btn left" onClick={prevSlide}>
        ‹        

      </button>
      <button className="slider-btn right" onClick={nextSlide}>
        ›        

      </button>
    </div>
  );
}

export default Slider;
