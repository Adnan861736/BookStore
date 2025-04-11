import "./Contact.css";
function Contact() {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>Address
          </div>
          <p className="cotent-item-text">Syria-Idlib-Salqin-St</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>Phone
          </div>
          <p className="cotent-item-text"> +963-964-659-068</p>
        </div>{" "}
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>Email
          </div>
          <p className="cotent-item-text">jsxsk38@gmail.com</p>
        </div>
      </div>
      <form onSubmit={e=>e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />

        </div>
        <textarea  className="contact-textarea" placeholder="Your Message *" rows="5"></textarea>
        <div className="contact-btn-wrapper">
    <button className="contact-btn">Send</button>
  </div>      </form>
    </section>
  );
}
export default Contact;
