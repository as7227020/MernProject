import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row ,InputGroup, Stack, Button} from 'react-bootstrap';
import  './FirendBar.css';
const FirendBar = ({props, onMyClick}) => {

    const [BeSelect,SetBeSelect] = useState(false);


    const handleMouseEnter = () => {
      console.log("handleMouseEnterhandleMouseEnter");
      SetBeSelect(true);
      };


    return (
        <>
        <Container fluid className='contaninerroot' onMouseEnter={handleMouseEnter} onMouseLeave={()=>{SetBeSelect(false)}} onClick={(e)=>{
           e.preventDefault(); 
           if(onMyClick)
           {
            onMyClick("子組件運行");
           }
        }}>
            <Row >
                <Col md='3' className='bgcolor' style={{}}>
                <Row md={3} className='userimgroot' >
                    <img src='assets/person/3.jpeg' alt='投向' className='userimg'/>
                </Row>
                </Col>

                <Col className='bgcolor2'>

                <Row style={{}}>
                     <p className='usernameroot' style={{fontWeight:'800',backgroundColor:'',marginBottom:'-0px'}}>{props}</p>
                </Row>

                <Row style={{backgroundColor:''}}>
                    <lead>興趣 : 收集神奇寶貝</lead>
                </Row>

                <Row style={{}}>
                    <div  className='text-container'>justify-content要以主軸線來排版，現在有紅、藍要以主軸線來排版，現在有紅、藍 主要以主軸線來排版，現在有紅、藍、黃三個區塊主要以主軸線來排版，現在有紅、藍、黃三個區塊</div >
                </Row>

                </Col>
                
               {BeSelect && (<>
                <Col md='2' className='btnroot'>
             <Row className='btnch'> <Button className='btnlayout shadow-drop-center' size='sm'>加入</Button></Row>
             <Row className='btnch'> <Button variant="outline-primary" className='btnlayout shadow-drop-center'>刪除</Button></Row>
                </Col>
               </>)}
            </Row>

         
         
        </Container>
        </>
    );
}



export default FirendBar;
