import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/posts').
        then((data)=> data.json()).
        then((data=> setPosts(data))).
        catch(err=> console.log(err))
    },[]);

  return (
    <div className='d-flex justify-content-center posts'>
        {posts.length >0 ? (<div>{posts.map((post)=>(<div key={post.id}>
          <div className='d-flex'>
            <img className ="rounded-circle dp" src={post.user.profile_pic} />
            <h5 className='uname'>{post.user.username}</h5>
          </div>
          <img className="post" src={post.image} alt="post" />
          <div className='like'>
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <div>
            <b>{post.likes} Likes</b>
            <p>{post.caption}</p>
          </div>
        </div>))}
        
        </div>) : (<div>Loding Post</div>)}
    
    </div>
  )
}

export default Posts