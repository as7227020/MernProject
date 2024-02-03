import React from 'react'
import { Col, Container, Image, Row,ListGroup } from 'react-bootstrap';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Button from 'react-bootstrap/Button';
import ModalExample01 from '../modalexample/ModalExample01';

export default function Content_01() {

  //Modal視窗用
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <section id='details' className='details my-5'>
    <Container>
      <Row>
        <Col md={6}>
          <Container class='f-flex flex-column justity-content-center h-100'>
            <h2 className='display-6'>
              左邊內容 右邊圖片
            </h2>
            <p>
              下面是一筆一筆的說明內容 : 

            </p>

            <ListGroup variant="flush lh-lg">

              <ListGroup.Item>
                <AddModeratorIcon className='MyIcon normal'></AddModeratorIcon>
                <strong>寫死的,只有三個 : </strong> 
                不知道這裡是否也要用成樣板, 雖然這裡功能很小
              </ListGroup.Item>

            <ListGroup.Item>
                <AddModeratorIcon className='MyIcon normal'></AddModeratorIcon>
                <strong>其他 : </strong> 
                可以考慮用很多並有上下拉霸托移
              </ListGroup.Item>
              
              <ListGroup.Item>
                <AddModeratorIcon className='MyIcon normal'></AddModeratorIcon>
                <strong>Maximize Your Reach: </strong> 
                Learn how to optimize your blog for search engines.
              </ListGroup.Item>
            </ListGroup>

            <Button variant="primary" className='text-white mt-4 align-self-start' size="lg"  onClick={() => setModalShow(true)}>
              <div >我有功能! 點我看看</div>
              </Button> 
              <ModalExample01 show={modalShow} onHide={() => setModalShow(false)} />
          </Container>
        </Col>
        <Col md={6}>
          <Container class='p-5'>
          <Image src='https://picsum.photos/600' fluid ></Image>

          </Container>
        </Col>
      </Row>
    </Container>
   </section>
  )
}
