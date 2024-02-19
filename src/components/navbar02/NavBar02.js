import React , { useRef ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import './NavBar02.css'
import mylogo from '../../mylogo.png';

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
    <Navbar ref={navRef}  className='navbar fixed-top navbar-dark' expand="lg" >
      <Container>
        <img src={mylogo} className='MyIcon'/>
        <a href='#' className='navbar-brand'>履歷網站</a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ToggleC'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className='sadsad' >
            <Nav.Link className='fw-semibold Linkfont' href="#features">Features</Nav.Link>
            <Nav.Link className='fw-semibold Linkfont' href="#pricing">Pricing</Nav.Link>
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