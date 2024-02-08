import React from 'react';
import ReactPlayer from 'react-player'
import { Row, Col ,Container, Image} from 'react-bootstrap';

const VideoContentt01 = ({props}) => {
    return (
        <Container>
            <Row>
                <div style={{textAlign:'center', fontWeight:'800', fontSize:'36px'}}>
                本地影片
                </div>
            </Row>
            <Row   style={{alignItems:'center',justifyContent:'center',display:'flex', background:'blue'}}>
                <Col md='7' style={{background:'green'}}>
                    <div style={{backgroundColor:'red'}}>
                        <ReactPlayer playing className=''  url= {props} controls={true} width='100%' height='100%'/>
                     </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VideoContentt01;
