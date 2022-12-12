import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import Controlledcarousel from './Controlledcarousel';
import Video from "./Video"
import Footer from './Footer';


const Couword = () => {
  return (
    <Container className="bui" banner>
      <Row>
        <Col xs={12} md={5} lg={6} className="buils">
          {/* <div className="col-4 bui  banner"> */}
          <div>
            {/* <img className="sne" src={sne} alt="" width="450" /> */}
            <Controlledcarousel />
          </div>
        </Col>

        {/* <Col xs="12" md="7" lg="6" className="content" buils banner></Col> */}
        {/* <div className="col-8  banner p-5 buils bg-white"> */}
        <Col xs={12} md={5} lg={6} className=" pt-10">
          <div>
            <p className=" happy text-xl">HAPPY BIRTHDAY</p>
            <h1 className="buildone">FATHER AND SON</h1>

            <p className="codevs">
              A great Phenominum, Father and son birthday
            </p>

            <p className="codevs">Two great personalities, smart and loving</p>
            <p className="codevs">
              May your days be filled with good health
              <br />
              favour, blessings, wisdom, mercy and success.
            </p>
          </div>
          <div className="flex-container">
            <p className="one">Hip! Hip!! Hip!!!</p>
            <h3 className="two">Hurray</h3>
          </div>

          <div>
                      <p className="three ">Enjoy your day.</p>
                      

            <Button variant="outline-light me-5" className="text-black">
              Olumide
            </Button>
           

            <Button variant="warning"> Shawn</Button>
          </div>
          <Video />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Couword