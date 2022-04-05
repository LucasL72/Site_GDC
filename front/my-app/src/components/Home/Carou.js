import React from "react";
import Carousel from "react-bootstrap/Carousel";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Carou = (props) => {
  const { item } = props;
  return (

      <Carousel.Caption >
        <h4 className="text-center text-break ssligne">Prochains Evenements</h4>
        <p>
          <EventAvailableIcon sx={{ fontSize: 40 }} /> :{item.date}{' '}
          {item.title}
        </p>
        <p>
          {item.content}
        </p>
      </Carousel.Caption>

  );
};

export default Carou;
