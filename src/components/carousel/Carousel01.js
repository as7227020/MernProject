import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import './Carousel01.css';

export default function Carousel01() {
  //fade
  return (
    <Carousel className='slide01 rounded-3'  fade>
    
    <Carousel.Item className='carousel-inner'>
    <Image className='d-block w-100 rounded-3 myimg' src='https://picsum.photos/id/38/1200/600' ></Image>
      <Carousel.Caption className='text-white'>
        <h3>流星雨</h3>
        <p>好天氣.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-inner'>
    <Image className='d-block w-100 rounded-3 myimg' src='https://picsum.photos/id/27/1200/600' ></Image>
      <Carousel.Caption className='text-white'>
        <h3>美好的夕陽</h3>
        <p>夕陽無限的好.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-inner'>
    <Image className='d-block w-100 rounded-3 myimg' src='https://picsum.photos/id/42/1200/600' ></Image>
      <Carousel.Caption className='text-white'>
        <h3>啡咖聽</h3>
        <p>
          點咖啡人就跑走惹...手機也沒拿
        </p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  )
}
