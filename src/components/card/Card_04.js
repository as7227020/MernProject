import React from 'react'
import Card from 'react-bootstrap/Card';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
export default function Card_04() {
  //bg-light rounded-circle p-3 my-4
  //color="secondary"
  return (
    <Card className='mb-4 rounded-3 border-1 p-3'>
    <Card.Body className='text-center'>
      
      <AirplaneTicketIcon sx={{ fontSize: 120 }} color="secondary" className='bg-light rounded-circle p-1 my-1'/>

      <Card.Title>飛機票</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">$ 500</Card.Subtitle>
      <Card.Text>
        聽說是綠水靈身上以0.00001%會掉落的物品.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
