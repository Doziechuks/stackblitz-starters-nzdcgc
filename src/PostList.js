import React from "react";
import Post from "./Post";

function PostList({data,onDelete,setValue,setPosts,setIsSelected,useDate}){
  // console.log(data,"as data")
    return(
      <div className="article">
        {data.map((item)=>{
          return(

            <Post key={item.id} item={item} onDelete={onDelete} setValue={setValue} setPosts={setPosts} setIsSelected={setIsSelected} useDate={useDate}/>
            )
      })}
        </div>
    )
}

export default PostList;