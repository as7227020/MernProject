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
import Social01 from '../../components/social/Social01';
import Footer01 from '../../components/footer/Footer01';
import GoogleMap01 from '../../components/mymap/GoogleMap01';
import Title01 from '../../components/title/Title01';
import Card_Top_01 from '../../components/card/Card_Top_01';
import Content_01 from '../../components/content/Content_01';
import Card_03 from '../../components/card/Card_03';
import GetInfoView01 from '../../components/getinfoview/GetInfoView01';
import Title02 from '../../components/title/Title02';
import Explain3x2 from '../../components/content/Explain3x2';
import Content_02 from '../../components/content/Content_02';
import Content_04 from '../../components/content/Content_04';
import Footer02 from '../../components/footer/Footer02';
import Title03 from '../../components/title/Title03';
import Practice_flex from '../../components/practice/Practice_flex';
import Delayed from '../../scripts/Delayed';
import DelayComp from '../../scripts/DelayedModel';
import styled, { ThemeProvider } from 'styled-components';
import AddFirend from '../../components/fbview/AddFirend';
import FirendBar from '../../components/fbview/FirendBar';
import FriendBarContent from '../../components/fbview/FriendBarContent';
import Title_Video from '../../components/title/Title_Video';
import Quote01 from '../../components/quote/Quote01';
import MyAdsTest from '../../components/ads/MyAdsTest';
import App_Practice01 from '../../components/practice/App_Practice01';
import App_Practice_useCallBack from '../../components/practice/App_Practice_useCallBack';
/*
 <NavBar02/>
<Title01/>
    <Card_Top_01/>
    <Content_01/>
    <Card_03/>
    <GetInfoView01/>
      <Social01/>


  <AddFirend/>
    <FriendBarContent/>
*/


export default function FindPage() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [open, setOpen] = useState(false);
  return (
    <>
   
   <Container fluid>
    <Title_Video/>
  
    </Container>
   
 
   
 
      </>
    )
}
/*
<App_Practice_useCallBack/>
 <App_Practice01/>
 <NavBar02/>

      <Title_Video/>
      <div style={{width:'600px', height:'600px', border:'1px solid red'}}>
        <h1>Ads Area</h1>
      <MyAdsTest/>
      </div>
     
    <Title03/>
    <AddFirend/>
    <FriendBarContent/>
  
    <Quote01/>


   <>
    <div className="container">


   <Practice_flex/>
   
    <Title03/>
    <Content_01/>
    <Explain3x2 />
   
    <Content_02/>
    <Card_03/>
    <GetInfoView01/>
    <Content_04/>
    <GoogleMap01/>
    <Social01/>
      <Footer02/>
   
 
      </>


*/