import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Social01() {
  return (
    <section className="social text-bg-dark py-6 overflow-hidden">
    <Container>
      <Row>
        <Col className="col-md-6 offset-md-3 text-center fs-4">
            <h1>社群元件</h1>
          <p>
           想要知道更多祕密嗎? 我們在其他地方都有寶藏, 請四處去尋找吧!!
          </p>
          <div class="social-icons d-flex justify-content-center gap-4">
            <FacebookIcon sx={{ fontSize: 60 }}></FacebookIcon>
            <TwitterIcon sx={{ fontSize: 60 }}></TwitterIcon>
            <InstagramIcon sx={{ fontSize: 60 }}></InstagramIcon>
            <LinkedInIcon sx={{ fontSize: 60 }}></LinkedInIcon>
            <PinterestIcon sx={{ fontSize: 60 }}></PinterestIcon>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
