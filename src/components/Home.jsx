import React from "react";
import {Carousel, CarouselItem, Button, Modal, ModalBody, Row, ModalTitle, ModalFooter, FormGroup, FormLabel, FormControl} from "react-bootstrap";
import "../css/home.css";


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      show:false
    }
  } 
  handleModal() {
    this.setState({show:!this.state.show})
  }
  
  render() {
  return (
    <div className="Home">
      <main>
        <Modal show ={this.state.show} 
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
        <ModalBody>
          <FormGroup>
            <FormLabel htmlFor="community">Community</FormLabel>
            <FormControl type="community" className="form-control" id="community"/>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormControl type="subject" className="form-control" id="subject"/>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="details">Details</FormLabel>
            <textarea type="details" className="form-control" id="details" rows="5"/>
          </FormGroup>
          </ModalBody>
          <Modal.Footer>
            <Row>
              <a onClick={()=>{this.handleModal()}}>Cancel</a>
              &nbsp; &nbsp; &nbsp;
              <Button onClick={()=>{this.handleModal()}} variant='success'>&nbsp; Submit &nbsp;</Button>
            </Row>
          </Modal.Footer>
        </Modal>
        <Carousel fade>
          <CarouselItem>
            <img
            className = "carousel-image"
            src = "/stateCapital.jpg" 
            />
            <Carousel.Caption>
            <a href="https://storymaps.arcgis.com/stories/16c9c7788af043b8a304e1289c3300f4"><button type="button" class="carousel-button">View Nashville's Sustainability Story</button></a>
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
          <CarouselItem>
            <img
            className = "carousel-image"
            src = "/Landfill.jpg"
            />
            <Carousel.Caption>
            <a><button onClick={()=>{this.handleModal()}} type="button" class="carousel-button">Report A Sustainability Concern</button></a>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </main>
    </div>
  );
}
}

export default Home;
