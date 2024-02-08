import React,{useEffect , useRef, useState} from 'react'
import './Title03.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

import {useTypingEffect} from '../../scripts/TypingEffect'
import {ScrollToPos} from '../../scripts/AutoScrollToElement'
import AboutMe01 from '../content/AboutMe01';

import {Button, Col, Container, Row} from 'react-bootstrap';


import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Carousel_Info01 from '../carousel/Carousel_Info01';
import Carousel01 from '../carousel/Carousel01';
import ContactUs01 from '../contactous/ContactUs01';


import { CounterNumber } from '../../scripts/Spring';
import ModalVideo01 from '../modalexample/ModalVideo01';
import ModalExample01 from '../modalexample/ModalExample01';
import VideoContent01 from '../videocontent/VideoContent01';




export default function Title03() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const TypeString = useTypingEffect('這裡是, 阿仁作品集!', 150, false);

    const [open, setOpen] = useState(false);//開啟照片視窗用
    const captionsRef = useRef(null);//照片視窗目前選擇第幾個

    const [selectPictureIndex, setSelectPictureIndex] = useState(0);//selectPictureIndex 是一打開要看哪個index的照片
    //打開照片視窗
    const OpenPiactureBox = (index) =>{
        setSelectPictureIndex(index);//設定一打開要看哪個index的照片
        setOpen(true);//開啟照片視窗
    }
    

      //Modal視窗用
  const [modalShow, setModalShow] = React.useState(false);
   
  return (
    <>
    <header  className="title3header title3header-fixedStyle vh-100 text-center position-relative">
    <div 
      className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100"
    >
      <h5 className="text-primary fs-3 fw-bold text-uppercase">作品集.</h5>
      <h1 className="display-1 fw-bold text-white">{TypeString}</h1>

      <p className="roles text-white text-uppercase fs-4">
        <span>網頁全端開發 | </span>
        <span>Unity遊戲製作</span>
        <CounterNumber toNumber={85}/>
      </p>

      <a className="btn btn-outline-light btn-lg mt-3" 
      onClick={objName => ScrollToPos('about')}>
        <div className="d-flex">
          <div className="me-3">
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="text-start">
            <span>移至我的資料</span>
          </div>
        </div>
      </a>

      <div className="social d-flex gap-3 position-absolute">
        <a href="#"><FacebookIcon className='smi text-white' sx={{ fontSize: 50 }}></FacebookIcon></a>
        <a href="#"><TwitterIcon className='smi text-white' sx={{ fontSize: 50 }}></TwitterIcon></a>
        <a href="#"><InstagramIcon className='smi text-white' sx={{ fontSize: 50 }}></InstagramIcon></a>
        <a href="#"><LinkedInIcon className='smi text-white' sx={{ fontSize: 50 }}></LinkedInIcon></a>
        <a href="#"><PinterestIcon className='smi text-white' sx={{ fontSize: 50 }}></PinterestIcon></a>
      </div>
    </div>
  </header>

  <section id='about'>
  <AboutMe01 />
  </section>
  <ContactUs01/>

  <section id='about2'>
    <Carousel_Info01 className='bg-dark'/>
  </section>


  <Lightbox
        index={selectPictureIndex}
        plugins={[Captions]}
        captions={{ ref: captionsRef }}
        open={open}
        on={{
            click: () => {
                (captionsRef.current?.visible
                    ? captionsRef.current?.hide
                    : captionsRef.current?.show)?.();
            },
          }}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://picsum.photos/id/391/1024/800",
            alt: "image 1",
            width: 3840,
            height: 2560,
            title: "主要標題01",
            description: "照片說明\r\n01",
          },
          {
            src: "https://picsum.photos/id/392/1024/800",
            alt: "image 1",
            width: 3840,
            height: 2560,
            title: "主要標題02",
            description: "Slide description02",
          },
          {
            src: "https://picsum.photos/id/393/1024/800",
            alt: "image 1",
            width: 3840,
            height: 2560,
            title: "主要標題03",
            description: "Slide description03",
          },
          {
            src: "https://picsum.photos/id/380/1024/800",
            alt: "image 1",
            width: 3840,
            height: 2560,
            title: "主要標題04",
            description: "Slide description04",
          },
          {
            src: "https://picsum.photos/id/381/1024/800",
            alt: "image 1",
            width: 3840,
            height: 2560,
            title: "主要標題05",
            description: "Slide description05",
          },
          
          
        ]}
    />

  <section className="portfolio py-5 bg-light ">
      <Container>
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">作品集</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">練習用的小專案</h2>
          <p className="lead">Asp.NET / WinodwForm / JavaScript / React</p>
        </div>
        <Row>


        <Col  xs={12} md={6}>
            <div className="project shadow-lg rounded-5 mb-3">
            <img
                  src="https://picsum.photos/id/391/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                  onClick={() => OpenPiactureBox(0)}
                />
            </div>
        </Col>

        
        <Col  xs={12} md={6}>
            <div className="project shadow-lg rounded-5 mb-3">
            <img
                  src="https://picsum.photos/id/392/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                  onClick={() => OpenPiactureBox(1)}
                />
            </div>
        </Col>

        
        <Col  xs={12} md={6}>
            <div className="project shadow-lg rounded-5 mb-3">
            <img
                  src="https://picsum.photos/id/393/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                  onClick={() => OpenPiactureBox(2)}
                />
            </div>
        </Col>
        
           
        <Col  xs={12} md={6}>
            <div className="project shadow-lg rounded-5 mb-3">
            <img
                  src="https://picsum.photos/id/380/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                  onClick={() => OpenPiactureBox(3)}
                />
            </div>
        </Col>

           
        <Col  xs={12} md={6}>
            <div className="project shadow-lg rounded-5 mb-3">
            <img
                  src="https://picsum.photos/id/381/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                  onClick={() => OpenPiactureBox(4)}
                />
            </div>
        </Col>
        
   
        

        </Row>
      </Container>
    </section>

    <section className='py-5 bg-light'>
      <VideoContent01 props={'testVideo.mp4'} /* 要傳網址或是本地都可以 testVideo.mp4  https://www.youtube.com/watch?v=LXb3EKWsInQ*/ />
    </section>
 


    <section class="video my-3">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <div class="position-relative">
              <img src="https://picsum.photos/id/381/400/200" alt="" class="img-fluid"/>
              <span class="video-play-button" onClick={() => setModalShow(true)}>
                  <span>
                  </span>
                </span>
             <ModalVideo01  show={modalShow} onHide={() => setModalShow(false)}  />
            </div>
          </div>
        </div>
        <div class="row video-points px-6 mt-5">
          <div class="col-lg-4">
            <h4 class="fw-bold">10 Years Of Experience</h4>
            <p>
              With over 10 years of experience, we have gained valuable insights and
          expertise to deliver high-quality software solutions
            </p>
          </div>
          <div class="col-lg-4">
            <h4 class="fw-bold">Enduring Partnerships</h4>
            <p>
              We believe in building enduring partnerships with our clients. We
              establish long-term relationships based on trust
            </p>
          </div>
          <div class="col-lg-4">
            <h4 class="fw-bold">Skilled Capable Team</h4>
            <p>
              Our team consists of skilled and capable professionals who are
              passionate about delivering excellence
            </p>
          </div>
        </div>
      </div>

      <div class="video-modal">
        <div id="videoModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="ratio ratio-16x9">
                <iframe frameborder="0" class="embed-responsive-item" id="video"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>







    <section className="services text-bg-dark py-5 position-relative">
      <Container className="position-relative">
        <div className="text-center mb-5">
          <h3 className="text-uppercase fw-bold text-primary">我的能力</h3>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">有什麼可以讓我使用我的能力的 ?</h2>
          <p className="lead">
            我會以下東西, 如果需要完全沒問題, 一定幫您解決!!
          </p>
        </div>
        <Row>
          <div className="col-md-4 text-center">
          <a href="#"><FacebookIcon className='smi text-white mb-3' sx={{ fontSize: 50 }}></FacebookIcon></a>
            <h3 className="fs-3">網頁版面設計</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-7">
              我會排版.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <a href="#"><FacebookIcon className='smi text-white mb-3' sx={{ fontSize: 50 }}></FacebookIcon></a>
            <h3 className="fs-3">網頁開發</h3>
            <hr className="w-25 mx-auto" />
            <p className="fs-7">
              我會做網站.
            </p>
          </div>

          <div class="col-md-4 text-center">
          <a href="#"><FacebookIcon className='smi text-white mb-3' sx={{ fontSize: 50 }}></FacebookIcon></a>
            <h3 class="fs-3">優化系統</h3>
            <hr class="w-25 mx-auto" />
            <p class="fs-7">
              網頁與Bug, 不到1秒鐘即開啟.
            </p>
          </div>
        </Row>
      </Container>
    </section>
















  </>
  )
}
