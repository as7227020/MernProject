import React from 'react';
import ReactPlayer from 'react-player'
import { Row, Col ,Container, Image} from 'react-bootstrap';

const VideoContent01 = ({props, title}) => {
    return (
        <Container>
            <Row>
                <div style={{textAlign:'center', fontWeight:'800', fontSize:'36px'}}>
                {title}
                </div>
            </Row>
            <Row   style={{alignItems:'center',justifyContent:'center',display:'flex', background:'blue'}}>
                <Col md='7' style={{background:'green'}}>
                    <div style={{backgroundColor:'red'}}>
                   
                    <ReactPlayer className='' url={props} width='100%'  height='100%' controls={true}/>
                     </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VideoContent01;

//<ReactPlayer playing className=''  url= {props} controls={true} width='100%' height='100%'/>
//   <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%'/>
// <ReactPlayer url={props}  width='100%' height='100%'/>