import React,{useContext, useRef, useState} from 'react'
import "./Share.css"
import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';

export default function Share() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user : currentUser} = useContext(AuthContext);
    const postDesc = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const newPost = {
            userId : currentUser._id,
            desc : postDesc.current.value,
         
        };

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name",fileName );
            data.append("bestand", file);
            newPost.img = fileName;

            try{
                await axios.post("/NodeAPIFB/express/myapp/api/upload", data);

            }catch(err)
            {
                console.log(err);
            }
        }else
        {

        }

        try{
            await axios.post("/NodeAPIFB/express/myapp/api/posts", newPost);
            window.location.reload();

        }catch(err)
        {
            console.log(err);
        }

    }

    //選擇上傳的照片
    const [file, setFile] = useState(null);
    console.log(file);


  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img src={
                  currentUser.profilePicture ? 
                  PUBLIC_FOLDER+currentUser.profilePicture :
                  PUBLIC_FOLDER+'/person/noAvatar.png'} alt='' className='shareProfileImg'/>
                <input type='text' className='shareInput' placeholder='要發表文章嗎?' ref={postDesc}></input>

            </div>
            <hr className='shareHr'/>
            
            <form className='shareButtons' onSubmit={(e) =>{handleSubmit(e)}}>
                <div className='shareOptins'>
                    <label className='shareOption' htmlFor='selectFile'>
                        <Image className='shareIcon' htmlColor='blue'/>
                        <span className='shareOptionText'>照片</span>
                        <input type='file' 
                        id='selectFile' 
                        accept='.png, .jpeg, .jpg'
                        style={{display:'none'}}
                        onChange={(e)=>{setFile(e.target.files[0])}}></input>
                    </label>
                    <div className='shareOption'>
                        <Gif className='shareIcon'htmlColor='hotpink'/>
                        <span className='shareOptionText'>GIT</span>
                    </div>
                    <div className='shareOption'>
                        <Face className='shareIcon'htmlColor='green'/>
                        <span className='shareOptionText'>心情</span>
                    </div>
                    <div className='shareOption'>
                        <Analytics className='shareIcon'htmlColor='red'/>
                        <span className='shareOptionText'>投票</span>
                    </div>
                   
                </div>
                <button className='shareButton' type='submit'>發文</button>
            </form>
           
        </div>
    </div>
  )
}
