import { useState } from 'react'
import { Link } from "react-router-dom";
import PCB from "../assets/hbdcolor.gif";
import { FaBars } from 'react-icons/fa'
import Home from './Home';
import About from './About';
const Navbar = () => {


    const [collapse, setCollapse] = useState(true)
  const handleClick = () => setCollapse(!collapse);
  <Home />;
    <About />
  
  return (
    <nav className=" nav_bar flex justify-between h-20 border-b items-center relative duration-75">
      {/* <a
        href=""
        className="uppercase font-bold text-2xl animate__animated animate__bounce  text-[#FFFAE3]"
      >
        logo
      </a> */}
      <img src={PCB} alt="" className=" logo py-3 "></img>
      <span class="material-symbols-outlined">Celebration</span>
      <ul
        className={` flex max-sm:flex-col md:w-1/2 justify-evenly nav_sec text-2xl max-sm:absolute top-20 md:top-0 max-sm:bg-slate-800 w-full max-sm:text-white md:text-[#FFFAE3] max-sm:h-52 max-sm:justify-evenly pl-10  ${
          collapse ? "max-sm:hidden" : ""
        }`}
      >
        <li className="hom  no-underline">
          <Link to="/">Home</Link>
        </li>
        <li className="abo no-underline">
          <Link to="/about ">About</Link>
        </li>
        {/* <Link to="./">
          <li>
            <a href="">Home</a>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <a href="">About</a>
          </li>
        </Link> */}
        {/* <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li> */}
      </ul>

      <button onClick={handleClick}>
        <FaBars className=" farb text-2xl hidden    max-sm:block" />
      </button>
    </nav>
  );
}

export default Navbar