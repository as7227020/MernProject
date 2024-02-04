import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Carousel_Info01.css';

export default class Carousel_Info01 extends Component {
  render() {
    return (
      <section id="testimonials" class="testimonials bg-light py-6" >
        <div id="testimonialCarousel" class="carousel slide"  >
          <Carousel >
            
            <Carousel.Item >
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src="https://picsum.photos/id/391/800/800"
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
                <p class="w-50 my-4 fst-italic fs-4 mb-4">
                  “Expense bed any sister depend changer off piqued one. Contented
                  continued any happiness instantly objection yet her allowance.
                  Use correct day new brought tedious. By come this been in. Kept
                  easy or sons my it how about some words here done”
                </p>
                <div class="fw-bold fs-5 mt-4">Marlene Visconte</div>
                <div>General Manager - Scouter</div>
              </div>
            </Carousel.Item>
  
  
            <Carousel.Item >
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src="https://picsum.photos/id/392/800/800"
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
                <p className="w-50 my-4 fst-italic fs-4 mb-4">
                  “Expense bed any sister depend changer off piqued one. Contented
                  continued any happiness instantly objection yet her allowance.
                  Use correct day new brought tedious. By come this been in. Kept
                  easy or sons my it how about some words here done”
                </p>
                <div className="fw-bold fs-5 mt-4">John Spiker</div>
                <div>Team Leader - Vanquish</div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src="https://picsum.photos/id/392/800/800"
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
                <p className="w-50 my-4 fst-italic fs-4 mb-4">
                  “Expense bed any sister depend changer off piqued one. Contented
                  continued any happiness instantly objection yet her allowance.
                  Use correct day new brought tedious. By come this been in. Kept
                  easy or sons my it how about some words here done”
                </p>
                <div className="fw-bold fs-5 mt-4">Stella Virtuoso</div>
                <div>Design Chief - Bikegirl</div>
              </div>
            </Carousel.Item>

          </Carousel>
         
        </div>
      </section>
    )
  }
}

/*

 <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <i className="fas fa-arrow-circle-left fa-3x text-secondary"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <i className="fas fa-arrow-circle-right fa-3x text-secondary"></i>
          </button>


*/