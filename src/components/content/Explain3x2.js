import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import Card_02 from '../../components/card/Card_02';
import { GraduallyShow } from '../../scripts/GraduallyShow';


export default function Explain3x2() {
    const emptyData = [1,2,3,4,5,6,7];



  return (
    <section className="points pb-5 py-5" >
    <Container>

        <Row className='text-center mb-5'>
            <Col className='col-md-8 offset-md-2'>
                <h2>2X3樣板</h2>
            </Col>
        </Row>

        <Row>
            
            {emptyData.map(item => (
                <Col md='6' className='mb-4'>
                    <div className="">
                        <GraduallyShow obj={<Card_02/>} />
                    </div>
                </Col>
            ))}


        </Row>



    </Container>
    
    
    
    </section>
  )
}
