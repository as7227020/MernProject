import React from 'react'
import { Col, Form, Image, Row ,Container} from 'react-bootstrap';

export default function Title01() {
  return (
    <header className='header'>
<div className='hero pt-7'>
<Container className='container-xl'>
  <Row>
    <Col md={6}>
    <Container className='mb-5 px-4' fluid="md">
    <Image src='https://picsum.photos/600' fluid ></Image>
    </Container>
    </Col>
    <Col md={6}>
      <Form.Text className='text-container p-4 d-flex flex-column justify-content-center h-100 mb-5'>
        <h1 className='display-3 fw-bold'>歡迎來到樣板天地!</h1>
        <p className='lead'>
          這裡的功能幾乎都是沒有的
        </p>

        <Container >
          <form >
            <div className='my-4'>
              <input type='email' 
              className='form-control form-control-lg rounded-5' 
              placeholder='輸入信箱'/>
            </div>

            <div className='d-grid'>
              <button className='btn btn-primary btn-lg text-white'>
                免費下載
              </button>
            </div>

          </form>

        </Container>
    
      </Form.Text>
    </Col>
  </Row>
</Container>
</div>
<svg
        class="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
        style={{fill:"#f3f6f9"}}
      >
        <title>frame-decoration</title>
        <path
          class="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>
</header>
  )
}
