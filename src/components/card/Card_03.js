import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Card_03() {
  return (
    <section>
    <Container>
      <Row className='text-center py-5'>

        <Col md='4'>
        <Image src='https://picsum.photos/id/177/200/300' className="rounded-circle mb-3" ></Image>
        <p class="lead fst-italic">
              "當初我第一次來到這個網站的時候我嚇一跳! 居然這麼美"
            </p>
            <p class="fw-bold">凱尼史密斯 - 深山, 秘密</p>
        </Col>

        <Col md='4'>
        <Image src='https://picsum.photos/id/31/200/300' className="rounded-circle mb-3" ></Image>
        <p class="lead fst-italic">
              "想都沒想到我, 這邊可以出現我"
            </p>
            <p class="fw-bold">Laurie Mitchell - Miami, 巨人島</p>
        </Col>

        <Col md='4'>
        <Image src='https://picsum.photos/id/40/200/300' className="rounded-circle mb-3" ></Image>
        <p class="lead fst-italic">
              "我想我聞到了什麼!?"
            </p>
            <p class="fw-bold">MIO - MI, 喵喵國</p>
        </Col>

      </Row>
    </Container>
   </section>
  )
}
