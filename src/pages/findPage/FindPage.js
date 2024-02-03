import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText'

import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Stack } from '@mui/material';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import Alert from 'react-bootstrap/Alert';
import Card_01 from '../../components/card/Card_01';
import './FindPage.css'
import RatingCard from '../../components/ratingcard/RatingCard';
import NavBar01 from '../../components/navbar01/NavBar01';
import NavBar02 from '../../components/navbar02/NavBar02';
export default function FindPage() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className="container">

    <NavBar02/>
      <RatingCard/>  
    </div>
   
 
      </>
  )
}
