import React from 'react'
import { Row, Col ,Container, Image} from 'react-bootstrap';
import './GoogleMap01.css'
export default function GoogleMap01() {
  return (
    <section class="location my-5">
      <Container>
        <Row>
          <Col sm={{ span: 11, offset: 1 }}>
            <h3>[Google Map樣板] 我們的聯絡地址</h3>
            <p class="mb-4">
              請搭乘666號公車到土庫仔後像左轉10分鐘即可到.
            </p>
            <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14694.767010143843!2d120.2437486338989!3d22.96157668399819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1706950179233!5m2!1szh-TW!2stw"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
