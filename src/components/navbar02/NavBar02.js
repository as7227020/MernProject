import React , { useState,useRef ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings} from '@mui/icons-material'
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './NavBar02.css'
import { Col, Form, Image, Row,InputGroup } from 'react-bootstrap';

import Title01 from '../title/Title01';





//import './NavBar02.scss'


//data-bs-theme="dark" bg='dark' 
export default function NavBar02() {

  //Navbar的透明用
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
  


  return (
    <>
    <Navbar ref={navRef} className='navbar fixed-top navbar-dark' expand="lg" >
      <Container>
        <AddModeratorIcon className='MyIcon title text-focus-in'></AddModeratorIcon>
        <a href='#' className='navbar-brand text-focus-in'>我是Nav標題</a>
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

</>
  )
}
// <Nav.Link href="/home" class="btn btn-outline-light fw-semibold px-4 mx-3">聯絡我們</Nav.Link>



/*


   <section>
    <Container>
      <Row className='text-center'>

        <Col md='4'>
        </Col>

        <Col md='4'>
        </Col>

        <Col md='4'>
        </Col>

      </Row>
    </Container>
   </section>









*/