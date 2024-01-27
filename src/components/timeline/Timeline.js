import React, { useContext, useEffect, useState } from 'react'
import "./Timeline.css"
import Share from "../share/Share"
import Post from "../post/Post"
import axios from 'axios'
import { AuthContext } from '../../state/AuthContext';


export default function Timeline({username}) {
  const [postsData, setPosts] = useState([]);

  const {user} = useContext(AuthContext);
  
  //只需要讀取一次用useEffect
  useEffect( ()=>{
    console.log("username : " +username);
    const fetchPosts = async()=>{
      const response = username
      ? await axios.get(`/NodeAPIFB/express/myapp/api/posts/profile/${username}`)//我的資訊頁面用
      : await axios.get(`/NodeAPIFB/express/myapp/api/posts/timeline/${user._id}`);//首頁用
      console.log(response);
      setPosts(response.data.sort((post1,post2)=>{
        return new Date(post2.createdAt) - new Date(post1.createdAt);
      }));
    }
   
    fetchPosts();
  
  },[username, user._id])//username或 user._id更改時就觸發useEffect

  return (
    <div className='timeline'>
        <div className='timelineWrapper'>
            <Share/>
            {postsData.map((post)=>(
                <Post post={post} key={post._id}/>
            ))} 
        </div>
    </div>
  )
}
