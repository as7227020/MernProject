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
                  src="https://media.52poke.com/wiki/0/0d/025Pikachu.png"
                  alt=""
                  className="rounded-circle"
                  width="120"
                />
                <p class="w-50 my-4 fst-italic fs-4 mb-4">
                  “皮卡丘是一隻電氣鼠，全身的皮毛都是黃色的，背上有兩條褐色的條紋，尾巴是像鋸齒狀的閃電，與身體相接的部分也有一片褐色的皮毛。它有小小的嘴巴，以及黑色的眼睛，臉頰上有著紅色的電力袋，長長的耳朵尖端是黑色的。牠的前爪短而粗，有五趾，後爪則只有三趾。”
                </p>
                <div class="fw-bold fs-5 mt-4">皮卡丘</div>
                <div>電能製造部門 - 經理</div>
              </div>
            </Carousel.Item>
  
  
            <Carousel.Item >
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src="https://s1.52poke.com/wiki/thumb/c/cd/024Arbok.png/300px-024Arbok.png"
                  alt=""
                  className="rounded-circle"
                  width="120"
                  style={{border:'2px solid gray'}}
                />
                <p className="w-50 my-4 fst-italic fs-4 mb-4">
                  “阿柏怪外形類似巨大的紫色眼鏡蛇，身體上有黑色的細條紋。阿柏怪的頭很小，眼睛是三角形的。它肚子上的可怕花紋，據說會因為它所在地區的不同，而出現好幾種不同的圖案。根據最新的研究顯示，它們腹部的花紋有著20種以上不同的圖案，大約有６個種類已經得到確認。最常見的腹部的花紋看起來像一張可怕的臉，有著黑色的眼眶、紅色和黃色的眼睛、黑色的嘴角、向上揚起嘴和黑色的向下箭頭式的眉毛。”
                </p>
                <div className="fw-bold fs-5 mt-4">阿柏怪</div>
                <div>毒蛇部門 - 經理</div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <img
                  src="https://s1.52poke.com/wiki/thumb/f/fa/023Ekans.png/300px-023Ekans.png"
                  alt=""
                  className=""
                  width="120"
                />
                <p className="w-50 my-4 fst-italic fs-4 mb-4">
                  “阿柏蛇外形類似紫色的蛇，其腹部為黃色。它黃色的眼睛非常圓，瞳孔是一條線，嘴巴很大。它靠近頭部的身體上有黃色的環狀紋路，其他地方有黑色的細條紋。它的尾巴尖端為黃色。”
                </p>
                <div className="fw-bold fs-5 mt-4">阿柏蛇</div>
                <div>毒蛇部門 - 新進人員</div>
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