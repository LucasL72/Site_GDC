import React from "react";
import Carousel from "react-bootstrap/Carousel";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Carou = () => {
  return (
    <div className="mt-3">
      <Carousel fade>
        <Carousel.Item interval={10000}>
          <div className="banner"></div>
          <Carousel.Caption>
            <h4 className="text-center text-break ssligne">
              Prochains Evenements
            </h4>
            <p>
              <EventAvailableIcon sx={{ fontSize: 40 }} /> : (Date){" "}
            </p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="banner"></div>
          <Carousel.Caption>
            <h4 className="text-center text-break ssligne">
              Prochains Evenements
            </h4>
            <p>
              <EventAvailableIcon sx={{ fontSize: 40 }} /> : (Date){" "}
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="banner"></div>

          <Carousel.Caption>
            <h4 className="text-center text-break ssligne">
              Prochains Evenements
            </h4>
            <p>
              <EventAvailableIcon sx={{ fontSize: 40 }} /> : (Date){" "}
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carou;
