import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React,{useContext} from 'react'
import './Sidebar.css'
import CloseFriend from '../closefriend/CloseFriend'
import {Users} from '../../dummyData'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../state/AuthContext';


export default function Sidebar() {
    const {user} = useContext(AuthContext);
  return (
    <div className='sidebar'>
        <div className=' sidebarWarapper'>
            <ul className='sidebarList'>
                <li className='sidebarKistItem'>
                    <Home className='sidebarIcon'/>
                    <Link to="/" style={{textDecoration :"none", color :"black"}}>
                    <span className='sidebarListItemText'>首頁</span>
                    </Link>
                </li>
                <li className='sidebarKistItem'>
                
                <Search className='sidebarIcon'/>
                    <span className='sidebarListItemText' onClick={()=>{
                         localStorage.setItem("user",null);
                         window.location.reload();
                    }}>登出</span>
                
                  
                </li>
                <li className='sidebarKistItem'>
                    <Notifications className='sidebarIcon'/>
                    <span className='sidebarListItemText'>通知</span>
                </li>
                <li className='sidebarKistItem'>
                    <MessageRounded className='sidebarIcon'/>
                    <span className='sidebarListItemText'>訊息</span>
                </li>
                <li className='sidebarKistItem'>
                    <Bookmark className='sidebarIcon'/>
                    <span className='sidebarListItemText'>書籤</span>
                </li>
                <li className='sidebarKistItem'>
                    <Person className='sidebarIcon'/>
                    <Link to={`/profile/${user.username}`} style={{textDecoration :"none", color :"black"}}>
                    <span className='sidebarListItemText'>我的資訊</span>
                    </Link>
                </li>
                <li className='sidebarKistItem'>
                    <Settings className='sidebarIcon'/>
                    <span className='sidebarListItemText'>設定</span>
                </li>
            </ul>
            
            <hr className='sidebarHr'></hr>

            <ul className='sidebarFriendList'>
                {Users.map((u)=>(
                    <CloseFriend user={u} key={u.id}/>
                ))}
               
               
            </ul>

        </div>
    </div>
  )
}
