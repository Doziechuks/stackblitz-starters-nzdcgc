import React from "react"

function Post({item,onDelete,setValue,setIsSelected,useDate}){
      const { date, getDay, getMonth } = useDate();
      return(
           <div className="post" onClick={()=>{
             
            setValue(item.title)
            setIsSelected(item.id)
            

          }}>
                <div className="info">

             <h4  className="text" >{item.title}</h4>
                <div className="datetime">

                <p>{getDay()}/</p>
                <p>{getMonth()}/</p>
                <p>{date.getFullYear()}</p>
                </div>
                </div>
              <button className="btn" onClick={()=>onDelete(item.id)}>Delete</button>
           </div>
      )

}


export default Post;