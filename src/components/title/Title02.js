import React from 'react'
import { Col, Container, Image, Row ,InputGroup, Stack, Button} from 'react-bootstrap';
import Carousel01 from '../carousel/Carousel01';
import Carousel from 'react-bootstrap/Carousel';


export default function Title02() {
  return (
    <header className="header py-7 vh-100">
      <Container>
         <Row className='text-center'>
           <Col md='12'>
                <strong class="display-2 text-white mt-1 myfont">左邊</strong> 楊丞琳
            <p class="lead text-white w-75 m-auto mb-4 myfont">
            總是 忍不住寂寞 掉下眼淚 你才會給安慰
擔心 短暫的晴天 隨時都可能 被陰霾收回

等待 有機會最壞 也最甜美 我樂觀卻疲憊
因為 太怕失去你 所以連快樂裡 都裝滿傷悲

你不曾發覺 你總是用右手 牽著我 但是心卻跳動在左邊
你和我之間 的遙遠 永遠隔著親切 愛少的可憐

伸出右手 想陪著你向前走 感受 你愛我的心跳在左邊
那麼深深愛你的我 相信你 會了解
            </p>
          
            <div >
            <Button variant="info" className="text-uppercase ml-3">Register</Button>
            <Button variant="dark" className="btn-outline-light text-uppercase btn-right ">尋找</Button>
            </div>
            </Col>
        </Row>

        <Row className='py-5'>
          <Col md='12' >
            <Carousel01/>
          </Col>
        </Row>

    </Container>
    </header>
   
  )
}
