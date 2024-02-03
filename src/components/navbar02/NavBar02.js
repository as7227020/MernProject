import React , { useState,useRef ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import './NavBar02.css'
import { Col, Form, Image, Row } from 'react-bootstrap';
//import './NavBar02.scss'


//data-bs-theme="dark" bg='dark' 
export default function NavBar02() {
  const navRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY > 50 ) 
      {
        navRef.current.classList.add("bg-dark");
        navRef.current.classList.add('navbar-sticky');
        console.log("ADD");
      
      } 
      else 
      {
        navRef.current.classList.remove("bg-dark");
        navRef.current.classList.remove('navbar-sticky');
        console.log("remove");
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  //<Navbar className={isActive ? 'navbar navbar-expand-lg fixed-top navbar-dark' : 'navbar navbar-expand-lg fixed-top navbar-dark'}  >
  return (
    <>
    <Navbar ref={navRef} className='navbar fixed-top navbar-dark' expand="lg" >
      <Container>
        <a href='#' className='navbar-brand'>我是Nav標題</a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className='ms-auto'>
            <Nav.Link className='fw-semibold' href="#features">Features</Nav.Link>
            <Nav.Link className='fw-semibold' href="#pricing">Pricing</Nav.Link>
            <Button variant="primary" className='fw-semibold'>聯絡我們拉</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <header className='header'>
<div className='hero pt-7'>
<Container className='container-xl'>
  <Row>
    <Col md={6}>
    <Container className='mb-5 px-4' fluid="md">
    <Image src='https://picsum.photos/600' fluid ></Image>
    </Container>
    </Col>
    <Col md={6}>
      <Form.Text className='text-container p-4 d-flex flex-column justify-content-center h-100 mb-5'>
        <h1 className='display-3 fw-bold'>Welcome to Blog MMMMasteryyy!</h1>
        <p className='lead'>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
        </p>

        <Container >
          <form >
            <div className='my-4'>
              <input type='email' 
              className='form-control form-control-lg rounded-5' 
              placeholder='輸入信箱'/>
            </div>

            <div className='d-grid'>
              <button className='btn btn-primary btn-lg text-white'>
                免費下載
              </button>
            </div>

          </form>

        </Container>
    
      </Form.Text>
    </Col>
  </Row>
</Container>
</div>
<svg
        class="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
        style={{fill:"#FFFFFF"}}
      >
        <title>frame-decoration</title>
        <path
          class="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>
</header>

<section class="icons bg-light pb-5">
      <div class="container-xl">
        <div class="row hstack g-4">
          <div class="col-md-4 d-flex gap-4">
          <Person className='primary'/>
            <div>
              <h5 class="fw-bold">Unlock Your Blogging Potential</h5>
              <p class="text-muted">
                Discover the key to unleashing your true blogging potential. Our
                ebook provides expert guidance on creating compelling content
              </p>
            </div>
          </div>

          <div class="col-md-4 d-flex gap-4">
          <Person className='primary'/>
            <div>
              <h5 class="fw-bold">Skyrocket Your Blog's Success</h5>
              <p class="text-muted">
                Take your blog to new heights with our proven strategies for
                driving traffic and increasing your blog's visibility.
              </p>
            </div>
          </div>

          <div class="col-md-4 d-flex gap-4">
          <Person className='primary'/>
            <div>
              <h5 class="fw-bold">Monetize Your Blog</h5>
              <p class="text-muted">
                Turn your passion for blogging into a profitable venture. Our
                ebook reveals tried-and-tested monetization strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

   <section id='details' className='details my-5'>
    <Container>
      <Row>
        <Col md={6}>
          <Container.Text class='f-flex'>
            <h2 className='display-6'>
              姐所
            </h2>
          </Container.Text>
        </Col>
      </Row>
    </Container>
   </section>

</>
  )
}
// <Nav.Link href="/home" class="btn btn-outline-light fw-semibold px-4 mx-3">聯絡我們</Nav.Link>