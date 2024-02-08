import React from 'react'
import { Col, Container, Image, Row,ListGroup } from 'react-bootstrap';
import './Content_02.css';

export default function Content_02() {
  return (
    <section>
        <Container>
            <Row>
                <Col md='12'>
                <div class="invitation-bg text-center py-6 rounded-5">
                    <div className='text-white w-75 m-auto'>
                    <h2 class="display-5 fw-bold">Join Us On December 22nd</h2>
                    <p>
                  We cordially invite you to attend a seminar on December 22nd,
                  where we will explore various topics and insights related to
                  <strong>advertising and marketing</strong>. It will be an
                  engaging session where you can gain valuable knowledge about.
                  Don't miss out on this opportunity to enhance your skills and
                  broaden your horizons. Join us and be a part of this enriching
                  experience!
                  </p>
                    <a href="#register" class="btn btn-primary btn-lg">
                    Register Now
                    </a>
                   </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
