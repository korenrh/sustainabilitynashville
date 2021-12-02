import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../css/home.css"


function Home() {
  return (
    <div className="Home">
      <main>
        <Carousel className = "carousel-container">
          <CarouselItem>
            <img
            className = "carousel-image"
            src = "/stateCapital.jpg" 
            />
            <Carousel.Caption>
            <a href="https://arcg.is/1aTu4X"><button type="button" class="carousel-button">Raise a Sustainability Concern</button></a>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img
            className = "carousel-image"
            src = "/NashvilleMap.jpg"
            />
            <Carousel.Caption>
            <a href="https://arcg.is/1aTu4X"><button type="button" class="carousel-button">Explore Nashville's Sustainability Map</button></a>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </main>
    </div>
  );
}

export default Home;
