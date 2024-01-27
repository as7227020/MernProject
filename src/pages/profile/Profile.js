import React, { useEffect, useState } from 'react'
import './Profile.css'
import Topbar from '../../components/TopBar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Profile({}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [userData, setUser] = useState({});//{}物件, []陣列
    const username = useParams().username;//可以拿APP設定的參數 - /profile/:username
    console.log(".usernameusername....."+username);
    //只需要讀取一次用useEffect
    useEffect( ()=>{
      const fetchUser = async()=>{
        const response = await axios.get(`/NodeAPIFB/express/myapp/api/users?username=${username}`);
      
        setUser(response.data);
      }
      fetchUser();
    },[])

  return (
    <>
   <Topbar/>
   <div className='ProfileContainer'>
   <Sidebar/>
   <div className='profileRight'>
    <div className='profileRightTop'>
        <div className='profileCover'>
            <img src={userData.coverPicture || PUBLIC_FOLDER+'/post/3.jpeg'}
            alt=''
            className='profileCoverImg'/>
            
            <img src={PUBLIC_FOLDER+userData.profilePicture || PUBLIC_FOLDER+'/person/noAvatar.png'}
            alt=''
            className='profileUserImg'/>

        </div>
        <div className='profileInfo'>
            <h4 className='profileInfoName'>{userData.username}</h4>
            <span className='profileInfoDesc'>{userData.desc}</span>
        </div>

    </div>
    <div className='profileRightBottom'>
        <Timeline username={username}/>
        <Rightbar user={userData}/>
    </div>
  
   </div>

  

   </div>
   
   </>
  )
}
