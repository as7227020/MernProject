import React from 'react';
import './AddFirend.css';
import { Col, Container, Row ,InputGroup, Form, Button} from 'react-bootstrap';

const AddFirend = () => {
    return (
        <Container className='topbarContainer' fluid>
            <Row>
                <Col md='12'>
                <InputGroup className="mb-1 py-1" style={{width:'400px'}}>
        <Form.Control
          placeholder="輸入要查詢的名字"
          aria-label="輸入要查詢的名字"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          搜尋
        </Button>
      </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default AddFirend;
