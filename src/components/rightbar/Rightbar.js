import React from 'react'
import "./Rightbar.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function rightbar({user}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () =>{
        return(
            <>
            <div className='eventContainer'>
                 <img src='assets/star.png' alt='' className='starImg'/>
                 <span className='eventText'>
                     <b>追蹤活動</b>限定中!
                 </span>
             </div>
 
             <img src='assets/event.jpeg' alt='' className='eventImg'/>
             <h4 className='rightbarTitle'>線上的朋友</h4>
             <ul className='rightbarFriendList'>
                 {Users.map((u)=>(
                       <Online user={u} key={u.id}/>
                 ))}
             </ul>
             
             <p className='promotionTitle'>廣告</p>
 
             <img src='assets/promotion/promotion1.jpeg' alt='' className='rightbarpromotionImg'/>
             <p className='promotionName'>商城</p>
 
             <img src='assets/promotion/promotion2.jpeg' alt='' className='rightbarpromotionImg'/>
             <p className='promotionName'>車子大聯盟</p>
 
             <img src='assets/promotion/promotion3.jpeg' alt='' className='rightbarpromotionImg'/>
             <p className='promotionName'>沒良心公司</p>
         </>
        ) }

const ProfileRightbar = () =>{
    return(
        <>
        <h4 className='rightbarTitle'>使用者情報</h4>
        <div className='rightbarInfo'>
            <div className='rightabarInfoItem'>
                <span className='rightbarInfoKey'>出生 : </span>
                <span className='rightbarInfoKey'>秘密</span>
            </div>
            <h4 className='rightbarFriend'>您的朋友</h4>
            <div className='rightbarFollowings'>

                <div className='rightbarFollowing'>
                    <img src={PUBLIC_FOLDER+'/person/1.jpeg'} alt='' className='rightbarFollowingImg'/>
                    <span className='rightbarFollowingName'>名字45354</span>
                </div>
              

                <div className='rightbarFollowing'>
                    <img src={PUBLIC_FOLDER+'/person/1.jpeg'} alt='' className='rightbarFollowingImg'/>
                    <span className='rightbarFollowingName'>名字543453</span>
                </div>
               

                <div className='rightbarFollowing'>
                    <img src={PUBLIC_FOLDER+'/person/2.jpeg'} alt='' className='rightbarFollowingImg'/>
                    <span className='rightbarFollowingName'>名0450字</span>
                </div>
                

                <div className='rightbarFollowing'>
                    <img src={PUBLIC_FOLDER+'/person/3.jpeg'} alt='' className='rightbarFollowingImg'/>
                    <span className='rightbarFollowingName'>名045字</span>
                </div>
                

                <div className='rightbarFollowing'>
                    <img src={PUBLIC_FOLDER+'/person/4.jpeg'} alt='' className='rightbarFollowingImg'/>
                    <span className='rightbarFollowingName'>名字</span>
                </div>
                


            </div>
        </div>
        </>
    )
}

  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  
  );
}
