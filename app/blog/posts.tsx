import React from 'react'
import LikeButton from './LikeButton';
interface Post{
    id:string;
    title : string;
    body:string
}
const Posts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const postRes :Post[] = await res.json()
  return (
    <div>
      {postRes.map(post=>
        <ul key ={post.id}>
            <li >{post.title} <br/> {post.body}  <LikeButton/></li>
        </ul>
      )}
    </div>
  )
}

export default Posts
