import { useState } from "react";
import { authors } from "../../Components/Data/authors"; // تأكد من أن المسار صحيح
import "./Authors.css";

function Authors() {
  // حالة لتخزين النص المدخل في خانة البحث
  const [searchTerm, setSearchTerm] = useState("");

  // دالة لتحديث النص المدخل في خانة البحث
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // تصفية المؤلفين بناءً على النص المدخل
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          type="search"
          placeholder="Search in authors"
          value={searchTerm} // ربط النص المدخل بالحالة
          onChange={handleSearchChange} // تحديث النص عند التغيير
        />
      </div>
      <div className="authors-wrapper">
        {filteredAuthors.map((author) => (
          <div className="author" key={author.id}>
            <img
              src={author.image}
              alt={author.name}
              className="author-image"
            />
            <h2 className="author-name">{author.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
