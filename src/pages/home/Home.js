
import React from 'react'
import './Home.css'
import Topbar from '../../components/TopBar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
export default function Home() {
  return (
   <>
   <Topbar/>
   <div className='homeContainer'>
   <Sidebar/>
   <TimeLine/>
   <Rightbar/>
   
   </div>
   </>
  )
}


//components資料夾內的是 屬於 page內部的物件