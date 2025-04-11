function Rating({ rating, reviews }) {
    return (
      <div className="rating">
        {rating >= 1 ? (
          <i className="bi bi-star-fill"></i> // تم تعديل هنا
        ) : rating >= 0.5 ? (
          <i className="bi bi-star-half"></i> // تم تعديل هنا
        ) : (
          <i className="bi bi-star"></i> // تم تعديل هنا
        )}
        {rating >= 2 ? (
          <i className="bi bi-star-fill"></i> // تم تعديل هنا
        ) : rating >= 1.5 ? (
          <i className="bi bi-star-half"></i> // تم تعديل هنا
        ) : (
          <i className="bi bi-star"></i> // تم تعديل هنا
        )}
        {rating >= 3 ? (
          <i className="bi bi-star-fill"></i> // تم تعديل هنا
        ) : rating >= 2.5 ? (
          <i className="bi bi-star-half"></i> // تم تعديل هنا
        ) : (
          <i className="bi bi-star"></i> // تم تعديل هنا
        )}
        {rating >= 4 ? (
          <i className="bi bi-star-fill"></i> // تم تعديل هنا
        ) : rating >= 3.5 ? (
          <i className="bi bi-star-half"></i> // تم تعديل هنا
        ) : (
          <i className="bi bi-star"></i> // تم تعديل هنا
        )}
        {rating >= 5 ? (
          <i className="bi bi-star-fill"></i> // تم تعديل هنا
        ) : rating >= 4.5 ? (
          <i className="bi bi-star-half"></i> // تم تعديل هنا
        ) : (
          <i className="bi bi-star"></i> // تم تعديل هنا
        )}
        <span>{rating}</span>
        <span> ({reviews} reviews)</span>
      </div>
    );
  }
  
  export default Rating;
  