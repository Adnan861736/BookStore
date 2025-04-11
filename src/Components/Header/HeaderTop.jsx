import { Link } from "react-router-dom";

function HeaderTop({ setToggle, Toggle }) {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {Toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i> 0964-659-068
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <div className="header-top-link">
        <i className="bi bi-person-fill"></i>  <Link to="/login" className="btn-login"><span>Login</span></Link>
      </div>
    </div>
  );
}
export default HeaderTop;
