/*
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

/!*
const items = [
  {
    src: require("assets/img/nossas/1.jpg"),
  },
  {
    src: require("assets/img/nossas/2.jpg"),
  },
  {
    src: require("assets/img/nossas/3.jpg"),
  },
  {
    src: require("assets/img/nossas/4.jpg"),
  },
  {
    src: require("assets/img/nossas/5.jpg"),
  },
  {
    src: require("assets/img/nossas/6.jpg"),
  },
  {
    src: require("assets/img/nossas/7.jpg"),
  },
  {
    src: require("assets/img/nossas/8.jpg"),
  },
  {
    src: require("assets/img/nossas/9.jpg"),
  },
  {
    src: require("assets/img/nossas/10.jpg"),
  },
  {
    src: require("assets/img/nossas/11.jpg"),
  },
  {
    src: require("assets/img/nossas/12.jpg"),
  },
  {
    src: require("assets/img/nossas/13.jpg"),
  },
  {
    src: require("assets/img/nossas/14.jpg"),
  },
  {
    src: require("assets/img/nossas/15.jpg"),
  },
  {
    src: require("assets/img/nossas/16.jpg"),
  },
  {
    src: require("assets/img/nossas/17.jpg"),
  },
  {
    src: require("assets/img/nossas/18.jpg"),
  },
  {
    src: require("assets/img/nossas/19.jpg"),
  },
  {
    src: require("assets/img/nossas/20.jpg"),
  },
  {
    src: require("assets/img/nossas/21.jpg"),
  }

];
*!/

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
          </div>
          <Row className="justify-content-center">
            {/!*<Col lg="8" md="12">*!/}
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            {/!*</Col>*!/}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
*/
