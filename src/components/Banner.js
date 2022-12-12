import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import spla from "../assets/bdaypur.gif";
import shem from "../assets/shemdoc1.jpg";
import Carouselfade from "./Carouselfade";

const Banner = () => {
  return (
    // <div className="min-h-[90vh] grid place-content-center">
    // original <div className="grid grid-cols-2 grid-rows-1 h-96 section-1 mb-40 w-[80%] mx-auto pt-10 gap-10">
    <Container className="bui  "  banner>
      <Row>
        <Col xs={12} md={5} lg={6} className="bann mb-20">
          <div className="text-black rounded-full shadow-2xl mr-25 pt-20">
            <motion.h1
              className="font-bold text-[4rem] text-milk "
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <h1 className="hbt"> HAPPY BIRTHDAY</h1>
            </motion.h1>
            <p className="acme text-4xl  text-darkcl  my-0">Many happy Returns</p>
            <br />
            <p className="acme text-3xl  text-darkcl  ">
              We wish you both a prosperous life
            </p>

            <motion.div
              className="mt-10"
              initial={{ x: "-100vw" }}
              animate={{ x: 0, animation: "ease-in-out" }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <button className="bg-milk text-darkcl px-4 rounded-[1rem] hover:bg-transparent hover:text-milk border border-milk transition-[background] duration-700 mr-40 text-3xl py-3">
                DR. OLUMIDE AND SHAWN
              </button>
              {/* <button className="border border-milk transition-[background] duration-700 hover:bg-milk hover:text-darkcl px-5 rounded-[1rem] text-3xl py-3">
            SHEM
          </button> */}
            </motion.div>
          </div>
        </Col>
        <Col xs={12} md={5} lg={6} className=" pt-10">
          {/* <div>
            <img src={spla} alt="" className="spla rounded-2xl w-500   h-50"></img>
          </div> */}
          <Carouselfade />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
