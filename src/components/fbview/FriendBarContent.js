import React, { useState } from 'react';
import FirendBar from './FirendBar';


const outData = ['小名1','阿2明','3ㄚ銘'];

const FriendBarContent = () => {

    const [emptyData, SetemptyData] = useState(outData);

    function addData(){
        SetemptyData([...emptyData,'123']);
    }

    function changeName(index)
    {
      const newList = [...emptyData];
      newList[index] = newList[index]+"-";
      SetemptyData(newList);

    }
    function deleteF(index){
        const newList = [...emptyData];
        newList.splice(index,1);
        SetemptyData(newList);
    }
    function deleteF2(data){
        SetemptyData(emptyData.filter((value)=> value != data));
    }

    return (
        <div>
            {emptyData.map((data, index) =>(
                <FirendBar props={data} onMyClick={(clickAction)=>{
                   // deleteData();
                   //deleteF(index);
                   deleteF2(data);
                 }}/>
            )
                
            )
            }
        </div>
    );
}

export default FriendBarContent;
