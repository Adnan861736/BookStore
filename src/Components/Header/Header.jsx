import { useState } from "react";
import "./Header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

function Header() {
 const[Toggle,setToggle] = useState(false)
  return (
    <div className="header">
     <HeaderTop setToggle ={setToggle} Toggle={Toggle}/>
      <HeaderMiddle/>
      <Navbar Toggle={Toggle} setToggle={setToggle}/>
    </div>
  );
}

export default Header;
