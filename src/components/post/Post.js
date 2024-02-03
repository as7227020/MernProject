import React, { useEffect, useState, useContext } from 'react'
import "./Post.css"
import { MoreVert } from '@mui/icons-material'
import axios from 'axios'
//import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export default function Post({post}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user : currentUser} = useContext(AuthContext);

    //const user = userData.filter((u)=> u.id === post.userId);
    const [nowlike,SetLike] = useState(post.likes.length);
    const [isLiked, SetIsLiked] = useState(false);

    const [userData, setUser] = useState({});
    //只需要讀取一次用useEffect
    useEffect( ()=>{
      const fetchUser = async()=>{
        const response = await axios.get(`/NodeAPIFB/express/myapp/api/users?userId=${post.userId}`);
        console.log(response);
        setUser(response.data);
      }
     
      fetchUser();
    
    },[post.userId])

const handleLike = async () => {
  try{
    await axios.put(`/NodeAPIFB/express/myapp/api/posts/${post._id}/like`,{userId : currentUser._id});

  }catch(err)
  {
    console.log(err);
  }

    SetLike(isLiked? nowlike-1 : nowlike+1);
    SetIsLiked(!isLiked)
}

  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>

                <div className='postTopLeft'>
                <Link to={`./profile/${userData.username}`}>
                <img src={
                  userData.profilePicture ? 
                  PUBLIC_FOLDER+userData.profilePicture :
                  PUBLIC_FOLDER+'/person/noAvatar.png'} alt='' className='postProfileImg'/>
                </Link>
                <span className='postUsername'>{userData.username}</span>
                <span className='postDate'>{"1"/*format(post.createdAt)*/}</span>
                </div>
                
                <div className='postTopRight'>
                <MoreVert/>
                 </div>
            </div>
          
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src= {PUBLIC_FOLDER+post.img} className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                <img src={PUBLIC_FOLDER+'/heart.png'} 
                className='likeIcon'
                onClick={()=>{handleLike()}}
                />
                <span className='postLikeCounter'>{nowlike}人按讚</span>
                </div>
                <div className='postBottomRight'>
                <span className='postCommentText'>{post.comment}筆留言</span>
                </div>
            </div>

        </div>
    </div>
  )
}
