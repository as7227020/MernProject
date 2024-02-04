import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer02() {
  return (
    <footer class="footer mt-4 text-bg-dark py-5">
      <Container class="container">
        <div class="row">
          <Col class="col-md-4">
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              possimus aliquid omnis commodi. Dignissimos, quam obcaecati? Fugit
              non ex repellendus?
            </p>
          </Col>
          <Col class="col-md-4">
            <h3>Quick Links</h3>
            <ul class="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#discover">Discover</a></li>
              <li><a href="#summary">Summary</a></li>
              <li><a href="#takeaways">Takeaways</a></li>
              <li><a href="#subscribe">Subscribe</a></li>
            </ul>
          </Col>
          <Col className='md-4'>
            <h5>Connect</h5>
            <div class="d-flex gap-3 mb-4">
           
              <a href="#" ><FacebookIcon sx={{ fontSize: 45 }}></FacebookIcon></a>
              <a href="#"><TwitterIcon sx={{ fontSize: 45 }}></TwitterIcon></a>
              <a href="#"><InstagramIcon sx={{ fontSize: 45 }}></InstagramIcon></a>
              <a href="#"><LinkedInIcon sx={{ fontSize: 45 }}></LinkedInIcon></a>
              <a href="#"><PinterestIcon sx={{ fontSize: 45 }}></PinterestIcon></a>
              
            </div>
            <p>
              好聽的左邊 YT連結~~~~
              <a href="https://www.youtube.com/watch?v=nvBh6piNxGY&list=RDnvBh6piNxGY&start_radio=1&loop=0"
                ><strong>redTea@site.com</strong></a
              >
            </p>
          </Col>
        </div>
      </Container>
    </footer>
  )
}
