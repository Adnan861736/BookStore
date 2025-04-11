import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">Follow us on social media</div>
        <div className="footer-icons">
          <div className="icon">
            <i className="bi bi-instagram"></i>
          </div>
          <div className="icon">
            <i className="bi bi-facebook"></i>
          </div>
          <div className="icon">
            <i className="bi bi-twitter"></i>
          </div>
          <div className="icon">
            <i className="bi bi-linkedin"></i>
          </div>
          <div className="icon">
            <i className="bi bi-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-item2">
        <div className="footer-item">
          <h3 className="footer-item-titel">Useful Links</h3>
          <ul className="footer-item-list">
            <Link to="/" className="footer-item-link">
              <i className="bi bi-house-door"></i> Home
            </Link>
            <Link to="/authors"  className="footer-item-link">
              <i className="bi bi-pencil"></i> Authors
            </Link>
            <Link to="/about" className="footer-item-link">
              <i className="bi bi-info-circle"></i> About 
            </Link>
            <Link to="/contact" className="footer-item-link">
              <i className="bi bi-telephone"></i> Contact Us
            </Link>
            <Link to="/register" className="footer-item-link">
              <i className="bi bi-person-plus"></i> Register
            </Link>
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-item-titel">Contact Information</h3>
          <ul className="footer-item-list">
            <li className="footer-item-link">
              <i className="bi bi-geo-alt"></i> Syria-Idlib-Salqin
            </li>
            <li className="footer-item-link">
              <i className="bi bi-telephone"></i>+963-964-659-068
            </li>
            <li className="footer-item-link">
              <i className="bi bi-envelope"></i> jsxsk38@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-item-titel">
            <i className="bi bi-info-circle"></i> About Us
          </h3>
          <p>
            At "Store Name," we specialize in offering an extensive collection
            of books for all ages and interests. Since our inception, our mission
            has been to provide an exceptional reading experience for our customers
            by offering a diverse range of books across genres including literature,
            self-development, business, history, and much more.
            <br />
     </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
