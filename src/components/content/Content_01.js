import React, { useRef } from 'react'
import { Col, Container, Image, Row,ListGroup } from 'react-bootstrap';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Button from 'react-bootstrap/Button';
import ModalExample01 from '../modalexample/ModalExample01';
import './Content_01.css'
import { GraduallyShow } from '../../scripts/GraduallyShow';
import gsap from 'gsap';

const Mask = ({ mask, children }) => (
  <div style={{
    WebkitMaskImage: mask,
    maskImage: mask
  }}>
    {children}
  </div>
)

function gggg(){
  gsap.to(".circleMask", {r: 0,
  }, {
    r: 300,
    repeat: -1,
    duration: 6,
    ease: 'power3.inOut',
    yoyo: true
  })
}

export default function Content_01() {


  //Modal視窗用
  const [modalShow, setModalShow] = React.useState(false);
  const imgRef = useRef(null);


  return (
    <section id='details' className='details my-5'>
    <Container>
      <Row>
        <Col md={6} className='content01Containercol'>
          <GraduallyShow obj={

<Container className='content01Container'>
<h2 className='display-6 content01title'>
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

<Button className='content01btn' onClick={() => setModalShow(true)}>
  <div >我有功能! 點我看看</div>
</Button> 
 <ModalExample01 show={modalShow} onHide={() => setModalShow(false)} />
</Container>


          } delay={3.8} playSpeed={1.5} distanceX={-50}/>
         
        </Col>

        <Col md={6}>

        <GraduallyShow  delay={3.5} playSpeed={1.5} distanceX={0} distanceY={0} obj={
         <div className='background2-contaoner'>
 <div class="background2">
          
          <h1 class="text">經典再現</h1>
         </div>
         </div>
        
         }/>

        </Col>
      </Row>
    </Container>
   </section>
  )
}
/*

        <GraduallyShow  delay={3.5} playSpeed={1.5} distanceX={0} distanceY={0} obj={
          <div class="background">
            <div class="blur"></div>
            <h1 class="text">經典再現</h1>
           </div>
         }/>

 <Image className="good" src='https://picsum.photos/600' onClick={gggg} fluid ></Image>
  <GraduallyShow  delay={3.5} playSpeed={1.5} distanceX={0} distanceY={0} obj={
           
          <Image src='https://picsum.photos/600' fluid ></Image>
           }/>
radial-gradient(ellipse, transparent 35%, black 100%)
linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)

       <Mask mask="radial-gradient(ellipse, transparent 5%, black 100%)">  <Image src='https://picsum.photos/600' fluid mask='circleMask'></Image></Mask>
  
         <section className='wrapper'>
       <div className='mydiv one'></div>
       <div className='mydiv one2'></div>
       <div className='mydiv one3'></div>
       <div className='mydiv one4'></div>
       </section>


              <div class="view">
	<div class="circle">
		 
	</div>
</div>
*/