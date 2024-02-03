import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card_04 from '../card/Card_04';


export default function Content_04() {
  return (
    <section>
        <Container className="takeaways my-5 bg-light">
            <Row className='text-center mb-5'>
                <Col className='col-md-8 offset-md-2'>
                    <h2>1排3個的樣式</h2>
                        <p class="lead">
                        縮到最小就是一個一個, 
                        但是只要一個以上就會是一排三個,
                        不會說有1排兩個兩個的情況

                    </p>
                </Col>
            </Row>

            <Row>
            <Col xs={12} md={4}>
            <Card_04/>
            </Col>

            <Col xs={12} md={4}>
            <Card_04/>
            </Col>

            <Col xs={12} md={4}>
            <Card_04/>
            </Col>

            <Col xs={12} md={4}>
            <Card_04/>
            </Col>


            <Col xs={12} md={4}>
            <Card_04/>
            </Col>


            <Col xs={12} md={4}>
            <Card_04/>
            </Col>


          
                
                
            </Row>

        </Container>
    </section>
  )
}
