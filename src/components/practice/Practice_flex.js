import React from 'react'
import './Practice_flex.css';
import {Button, Col, Container, Row} from 'react-bootstrap';
import { Justify } from 'react-bootstrap-icons';
//style={{}}
//{justifyContent:左右
//alignItems 上下
//flex-direction 左右順序 從右到左:row-reverse col-

//{flexDirection:'row-reverse', alignItems:'flex-end'}}>
         //位置反向排序  從右下往左排序

//flex-wrap 換行

//中間 上到下 垂直顯示 {flexDirection:'column', alignItems:'center'}


//tyle={{marginRight:'auto'}} 靠左多少
//tyle={{marginLeft:'auto'}}>2 靠右多少 auto最底
//marginTop...上下左右都有

//alignSelf : 'flex-end' 很像?  marginLeft:'auto'

//alignSelf對自己位置調整 {alignSelf:'flex-end'}
export default function Practice_flex() {
  return (
    <Container className='Container2'>

        <div className='d-flex'>
        <img style={{width:'75%',objectFit:'cover'}} src="https://picsum.photos/id/392/1024/800" alt="123" className="img-fluid"/>


                <div className='d-flex' style={{flexDirection:'column'}}>
                <img style={{height:'50%', width:'100%', objectFit:'cover'}} src="https://picsum.photos/id/392/1024/800" alt="123" className="img-fluid"/>
                <img style={{height:'50%', width:'100%', objectFit:'cover'}} src="https://picsum.photos/id/392/1024/800" alt="123" className="img-fluid"/>

                </div>

        </div>


        <div className='warp'>
            <div className='d-flex' style={{alignItems:'center'}}>

                <div className='w-50'>
                <p>1321312</p>
                </div>

                <div className='w-50'>
                <img
                  src="https://picsum.photos/id/392/1024/800"
                  alt="123"
                  className="img-fluid"
                />
                </div>

            </div>

            <div className='d-flex' style={{alignItems:'center', flexDirection:'row-reverse'}}>

<div className='w-50'>
<p>1321312</p>
</div>

<div className='w-50'>
<img
  src="https://picsum.photos/id/392/1024/800"
  alt="123"
  className="img-fluid"
/>
</div>

</div>

<div className='d-flex' style={{alignItems:'center'}}>

<div className='w-50'>
<p>1321312</p>
</div>

<div className='w-50'>
<img
  src="https://picsum.photos/id/392/1024/800"
  alt="123"
  className="img-fluid"
/>
</div>

</div>
                
        </div>





        

<div className='row'>

    <div className='col-3'>
        <div className='card'>alignSelf對自己位置調整
        
        <div className='card-footer'>
        <img
                  src="https://picsum.photos/id/392/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                 
                />
        </div>
        </div>
    </div>

    <div className='col-3'>
        <div className='card'>alignSelf對自己位6191919519195置調整
        
        <div className='card-footer'>
        <img
                  src="https://picsum.photos/id/392/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                 
                />
                照片
        </div>
        </div>
    </div>    <div className='col-3'>
        <div className='card'>alignSel
        
        <div className='card-footer'>
        <img
                  src="https://picsum.photos/id/392/1024/800"
                  alt="123"
                  className="img-fluid rounded-3"
                 
                />
        </div>
        </div>
    </div>
</div>
<hr/>
                 <div className='d-flex outer' 
                 style={{flexDirection:'column'}}>
            <div className='box w-100p h-100p' >1
            
            </div>
            <div className='box w-100p h-100p' style={{alignSelf : 'flex-end'}}>2
            </div>
            <div className='box w-100p h-100p' style={{}}>3
            </div>
            <div className='box w-100p h-100p' style={{marginLeft:'auto'}}>4
            </div>
        </div> 
        <hr></hr>

         <div className='d-flex outer'>
            <div className='box w-100p h-100p'>1
            </div>
            <div className='box w-100p h-100p'>2
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
            <div className='box w-100p h-100p'>3
            </div>
        </div>
        <hr></hr>
        <div className='d-flex outer'>
            <div className='box'>1
            </div>
            <div className='box flex-2'>2
            </div>
            <div className='box'>3
            </div>
        </div>
    </Container>
  )
}

