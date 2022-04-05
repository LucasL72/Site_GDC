import Carou from "../Home/Carou";
import Carousel from "react-bootstrap/Carousel";

const ListEvents = (props) => {
  const { list } = props;

  return (
    <div className="mt-3 mb-3">
      <Carousel fade>
        {list.length > 0 &&
          list.map((item) => {
            return(
            <Carousel.Item interal={10000}>
              <div className="banner"></div>
              <Carou item={item} />;
            </Carousel.Item>)
          })}
      </Carousel>
    </div>
  );
};

export default ListEvents;
