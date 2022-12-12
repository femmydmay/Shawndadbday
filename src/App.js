// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import randc from "./randomcool.jpg";
import rbw from "./rbw.jpg";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Video from "./components/Video"
import Videoc from "./components/Videoc"
import Carouselfade from "./components/Carouselfade";
import Controlledcarousel from "./components/Controlledcarousel";

function App() {
  // ScrollReveal().reveal(".section-1", { delay: 200, beforeReveal: "" });
  // ScrollReveal().reveal('.section-2',200)
  // ScrollReveal().reveal('.section-3', 200)
  <Navbar />;
  <Banner />;
  <Home />;
  <About />; 
  <Video />;
  <Videoc />;
  <Controlledcarousel />;
  <Carouselfade />

  // useEffect(() => {});
  return (
    //   <div className="App bg-[#9799c1] min-h-screen">
    //     <Navbar />
    //     <Banner />

    //     <div className="grid grid-cols-2 grid-rows-1  gap-x-4 h-150 section-1 mb-10  w-[80%] mx-auto px-10 md:h-full md:w-full">
    //       {/* <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
    //       <div class="md:flex">
    //         <div class="md:shrink-0"> */}
    //       <div>
    //         <img
    //           src={cool}
    //           alt=""
    //           className="w-100   object-cover md:h-full md:w-full "
    //         ></img>
    //       </div>
    //       <div className=" bg-red-500  ">
    //         <p className="font-bold text-[2rem] text-milk text-center pt-20">
    //           A digital display of art
    //           <br /> showcasing <br /> innovative talent
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 grid-rows-1 gap-x-4 h-150 section- mb-10  w-[100%] mx-auto px-10 md:h-full md:w-full">
    //       <div className=" bg-blue-200 ">
    //         <p className="font-bold text-[2rem]  text-darkcl text-center pt-20">
    //           {" "}
    //           Creative experience <br /> and art tech
    //         </p>
    //       </div>
    //       <div>
    //         <img
    //           src={randc}
    //           alt=""
    //           className="w-100    md:h-full md:w-full"
    //         ></img>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 grid-rows-1 gap-x-4 h-150 section-3 mb-10  w-[100%] mx-auto px-10 md:h-full md:w-full gap-2">
    //       <div>
    //         <img src={rbw} alt="" className="w-100  md:h-full md:w-full"></img>
    //       </div>
    //       <div className=" bg-orange-500">
    //         <p className="font-bold text-[2rem]  text-darkcl text-center pt-20 md:h-full md:w-full">
    //           A splash of digital art and design <br /> and art rendering
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       <Footer />
    //     </div>
    //   </div>

    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
