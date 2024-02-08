import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LinkIcon from '@mui/icons-material/Link';


import { Row, Col ,Container, Image} from 'react-bootstrap';

export default function ModalExample01(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    fade
    className='mt-1'
  >
    
    <Modal.Body className='p-5'>
        <Row>
            <Col lg="6">
                <Container>
                    <Image src='https://picsum.photos/600' fluid></Image>
                </Container>
            </Col>
            
            <Col lg="6">
            <Container>
            <h2 class="display-9 mt-1" style={{justifyContent:'center', display:'flex'}}>隨機照片</h2>
            <p>
                  以下是我的告白...
            </p>
            
            <ListGroup variant="flush">

              <ListGroup.Item>
                <DirectionsWalkIcon className='MyIcon normal'></DirectionsWalkIcon>
                <strong>如果覺得這張隨機照片很好看的話</strong> 
                那就真是太好了呢!
              </ListGroup.Item>

            <ListGroup.Item>
                <DirectionsRunIcon className='MyIcon normal'></DirectionsRunIcon>
                <strong>雖然我想再多想幾個字來塞版面</strong> 
                但是我實在想不出來可以打些什麼.
              </ListGroup.Item>
              
              <ListGroup.Item>
                <DirectionsBikeIcon className='MyIcon normal'></DirectionsBikeIcon>
                <strong>所以我就在這之間偷塞了幾個換行來擋</strong> 
                在下面有隨機的網址可以去看更多圖片, 懇求您的原諒!
              </ListGroup.Item>
            </ListGroup>
            </Container>

            <Container>
                <Row >
                    <Col md={5}>
                        <Row className='mt-3'>
                        
                        <Button href="https://picsum.photos/600" variant='secondary'size="sm" >
                        <LinkIcon sx={{ fontSize: 20 }}></LinkIcon>
                            照片網址
                        </Button>
                        </Row>
                    </Col>
                    <Col md={1} className='mx-auto'>
                    </Col>
                    <Col md={5}>
                    <Row className='mt-3'>
                    <Button onClick={props.onHide} variant='dark' size="sm">原諒</Button>
                    </Row>
                    </Col>
                  
                </Row>
            </Container>
           
            </Col>
        </Row>
    </Modal.Body>
    
  </Modal>
  )
}
