import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col ,Container, Image} from 'react-bootstrap';
import ReactPlayer from 'react-player'


export default function ModalVideo01(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fade
        className=''
      >
        
        <Modal.Body className='bg-dark' style={{borderRadius:'5px'}}>
            <Row>
                <Col >
                    <Container>
                    <div className=''>
                        <ReactPlayer className='' url= '銀魂銀之魂篇12_353.mp4' width='100%'  height='100%' controls={true}/>
                    </div>
                    </Container>
                </Col>
            </Row>
        </Modal.Body>
        
      </Modal>
    );
}
//  <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />