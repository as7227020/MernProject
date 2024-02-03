import React from 'react'
import { Col, Container, Image, Row ,InputGroup, Form, Button} from 'react-bootstrap';
import './GetInfoView01.css'

export default function GetInfoView01() {
  return (
    <section class="download">
    <Container >
      <Row>
        <Col lg='5'>
        <Container className='mt-n6 mb-3'>
        <Image src='https://picsum.photos/800/600' fluid></Image>
        </Container>
        </Col>

        <Col lg='7'>
        <Container  className='text-container text-white d-flex flex-column justify-content-center h-100 mb-5'>
        <h2 class="fw-bold">這是張600x800的照片</h2>
              <p>
              心動了嗎! 趕快填入您的信箱獲得該照片網址吧!!
              </p>

              <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-dark" id="button-addon2" className='text-white rounded-end'>
          取得
        </Button>
      </InputGroup>
             
        </Container>
        </Col>


      </Row>
    </Container>
   </section>
  )
}
