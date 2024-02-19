
import React from 'react'
import './Home.css'
import Topbar from '../../components/TopBar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
import AddFirend from '../../components/fbview/AddFirend'
import { Col, Container, Row } from 'react-bootstrap'
export default function Home() {
  return (
   <>
      <Topbar/>
   <Container fluid>
    <Row >
      <Col >
      <Sidebar/>
      </Col>
      <Col xs={8}>
      <TimeLine/>
      </Col>
      <Col>
      <Rightbar/>
      </Col>
    </Row>

   </Container>

   <div className='homeContainer'>
   
  
   
   
   </div>
   </>
  )
}

//<TimeLine/> 
// <AddFirend/>
//components資料夾內的是 屬於 page內部的物件