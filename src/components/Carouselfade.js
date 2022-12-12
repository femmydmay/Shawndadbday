import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import spla from "../assets/bdaypur.gif";
import Shemdad from "../assets/Shemdadround2.jpg";
import Shemround from "../assets/Shemround2.jpg";
import Docround from "../assets/Docround2.jpg";
import bday9 from "../assets/bday-9.gif";
import cake from "../assets/cake.jpg";

const Carouselfade = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={cake}
          className="d-block   spla3 rounded-2xl w-300   h-50"
          alt="Second slide"
        ></img>

        <Carousel.Caption>
          {/* <h3 className="text-black">CAKE FOR FATHER & SON BDAY</h3> */}
          <p className="text-black">CAKE FOR FATHER & SON BDAY. <br /> ENJOY THE SLIDE</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={spla}
          className="d-block   spla2 rounded-2xl w-500   h-50"
          alt="First slide"
        ></img>

        <Carousel.Caption>
          {/* <h3 className='text-black'>HAPPY BIRTHDAY</h3>
          <p className='text-black'>We Celebrate you both</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Shemdad}
          className="d-block   spla2 rounded-2xl w-500   h-50"
          alt="Second slide"
        ></img>

        <Carousel.Caption>
          <h3 className="text-black">FATHER & SON BDAY</h3>
          <p className="text-black">HAVE A LOVELY XMAS BIRTHDAY</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Shemround}
          className="d-block  spla2 rounded-2xl w-500   h-50"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-black">HAPPY BIRTHDAY SHAWN</h3>
          <p className="text-black">GOD BLESS YOU WITH LONG LIFE & WISDOM</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={Docround}
          className="d-block   spla2 rounded-2xl w-500   h-50"
          alt="First slide"
        ></img>

        <Carousel.Caption>
          <h3 className="text-black">HAPPY BIRTHDAY Doc</h3>
          <p className="text-black">God continue to bless and keep you</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={bday9}
          className="d-block   spla2 rounded-2xl w-500   h-50"
          alt="First slide"
        ></img>

        <Carousel.Caption>
          {/* <h3 className="text-black">MANY HAPPY RETURNS</h3>
          <p className="text-black">MAY YOUR DAYS BE BRIGHT & MERRY</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  

export default Carouselfade
