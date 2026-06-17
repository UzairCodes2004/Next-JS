'use client'
import React, {useState} from 'react'
const LikeButton = () => {

   const [likes,setLikes]=useState<number>(0)
   function handleIncrement():void{
    setLikes((prevLikes)=>prevLikes+1)
   } 
  return (
    <div>
      <button onClick={()=>handleIncrement()}> {likes} ❤️ </button> 
    </div>
  )
}

export default LikeButton
