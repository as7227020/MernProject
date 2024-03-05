import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Image01.css'

export default function Image01() {
  return (
    <section>
  <Container fluid className='image-body'>

<Row>
    <Col md='12'>
    <div className='mmask'>
    <img src='https://picsum.photos/id/350/1024/800' className='myimg' alt=''/>
    </div>
    </Col>
</Row>
    </Container>
    </section>
  
   
  )
}
// <img src='https://picsum.photos/id/350/1024/800' className='myimg' alt=''/>