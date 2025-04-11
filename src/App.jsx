import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";  // إزالة الاستيراد المكرر لـ BrowserRouter

import Footer from "./Components/Footer/Footer";
import HomePages from "./pages/home/HomePages";
import About from "./pages/About/About";
import Authors from "./pages/Authors/Authors";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Contact from "./pages/Contact/Contact";
import Book from "./pages/Books/Book";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
