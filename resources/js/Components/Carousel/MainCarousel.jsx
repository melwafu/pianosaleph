import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function MainCarousel() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block h-72 md:h-96 w-100"
            src="/docs/images/carousel/img-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-72 md:h-96 w-100"
            src="/docs/images/carousel/img-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-72 md:h-96 w-100"
            src="/docs/images/carousel/img-3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MainCarousel;