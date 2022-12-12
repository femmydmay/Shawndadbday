import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import shemd from "../assets/shemdoc1.jpg";
import docb from "../assets/docbday.jpg";
import shawn from "../assets/shawn.jpg";
import Videoc from "./Videoc"

const Controlledcarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="pt-10">
            <img className="sne" src={docb} width="450px" alt="First slide" />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className="pt-10">
            <img className="sne " src={shawn} width="450px" alt="Second slide" />

            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className="pt-10">
            <img className="sne" src={docb} width="450px" alt="Third slide" />

            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <Videoc />
        <p> Click on center to play Birthday video</p>
      </div>
    );
};

export default Controlledcarousel;
