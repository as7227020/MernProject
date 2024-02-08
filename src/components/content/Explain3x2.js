import React from 'react'
import { Col, Container, Image, Row ,InputGroup, Stack, Button} from 'react-bootstrap';
import Card_02 from '../../components/card/Card_02';

export default function Explain3x2() {
  return (
    <section className="points pb-5 py-5" >
    <Container>

        <Row className='text-center mb-5'>
            <Col className='col-md-8 offset-md-2'>
                <h2>2X3樣板</h2>
            </Col>
        </Row>

        <Row>
            
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>
            <Col md='6' className='mb-4'>
                <div className="">
                    <Card_02/>
                </div>
            </Col>


            
          
     


        </Row>



    </Container>
    
    
    
    </section>
  )
}
