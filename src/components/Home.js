import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
// import cool from "../cool.jpg";
import Docr from "../assets/Docround2.jpg";
import Shem from "../assets/Shemround2.jpg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import shemdoc from "../assets/Shemdadround2.jpg";

const Home = () => {
  ScrollReveal().reveal(".section-1", { delay: 200, beforeReveal: "" });
  useEffect(() => {});
  return (
    <div className="App bg-[#9799c1] min-h-screen">
      <Navbar />
      <Banner />

      <Container className="bui" banner>
        <Row>
          <Col xs={12} md={5} lg={6} className="buils">
            {/* original <div className="grid grid-cols-2 grid-rows-1  gap-x-4 h-150 section-1 mb-10  w-[80%] mx-auto px-10 md:h-full md:w-full"> */}
            {/* <div class="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
        <div class="md:flex">
          <div class="md:shrink-0"> */}
            <div className="mt-20 ">
              <img
                src={shemdoc}
                alt=""
                className="shemi w-500  md:h-full md:w-full"
              ></img>
            </div>

            {/* <div className=" shad rounded-full shadow-2xl ml-90 bg-gray-900 mt-20">
              <p className="font-bold text-[2rem] text-darkcl text-center     ">
                 Test run on line one, Digital tech.
              </p>
              </div> */}
          </Col>

          <Col xs={12} md={5} lg={6} className="buils mt-10">
            <div
              className=" shad rounded-full
            shadow-2xl mt-10  bg-gray-900"
            >
              <p
                className=" acme  text-[1.5rem]  text-white text-center mt-20
            "
              >
                All thanks to God for His Mercies over <br /> your lives and His
                protection. <br /> As you both celebrate your<br /> birthday today,
                may you be celebrated all through for greater achievements and
                successes. <br />
                May the light of God dawn upon you.
              </p>
            </div>
          </Col>
          {/* sec ori <div className="grid grid-cols-2 grid-rows-1 gap-x-4 h-150 section- mb-10  w-[100%] mx-auto px-10 md:h-full md:w-full"> */}
          <Col xs={12} md={5} lg={6} className="buils mt-20">
            <div
              className=" shad rounded-full
            shadow-2xl mt-20  bg-gray-900"
            >
              <p
                className=" acme  text-[1.5rem]  text-white text-center 
            "
              >
                {" "}
                As this wonderful and divinely blessed <br /> year,2022 ends, we
                pray great <br /> blessings, favours, good health <br /> and
                success for you. Age with grace and peace, <br /> We appreciate
                you so much. Happy <br /> birthday to you.
              </p>
            </div>
          </Col>
          <Col xs={12} md={5} lg={6} className="doc justify-between mt-20">
            <div className="pt-20">
              <img
                src={Docr}
                alt=""
                className=" shemi w-500  md:h-full md:w-full"
              ></img>
            </div>
          </Col>

          {/* 3rd ori <div className="grid grid-cols-2 grid-rows-1 gap-x-4 h-150 section-3 mb-10  w-[100%] mx-auto px-10 md:h-full md:w-full gap-2"> */}
          <Col xs={12} md={5} lg={6} className="buils  mt-20">
            <div className="mt-20">
              <img
                src={Shem}
                alt=""
                className=" shemi w-500  md:h-full md:w-full"
              ></img>
            </div>
          </Col>
          <Col xs={12} md={5} lg={6} className="buils mt-20">
            <div
              className=" shad rounded-full
            shadow-2xl   bg-gray-900 "
            >
              <p
                className=" acme  text-[1.5rem]  text-white text-center
                 
            mt-20"
              >
                Lord thank you for how far you’ve <br />
                brought us your son. Thank you <br />
                especially for his life. Thank you for his <br />
                14th year on earth. We trust that<br /> you will continue to keep him
                and his family <br />safe and give him wisdom.  Amen
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
