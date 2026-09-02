import React, { useEffect, useState } from 'react'

function Storys(){

  const[storys,setStorys]=useState([]);
  useEffect(()=> { fetch('http://localhost:3000/storys').then(data=> data.json()).then(data=>setStorys(data)).catch(err=> console.log(err))})

  

  return (
    <div className='d-flex story'>

      {
        storys.length > 0 ? (
        storys.map((story)=> (
          <div key={story.id}>
            <div className='gradient-border'>
              <img src={story.user.profile_pic} alt="dp" className='storydp rounded-circle' />
            </div>
            <p className='text-truncate' storyname style={{width:"50px"}}>{story.user.username}</p>
          </div>
        )
      )
    ):(<p>Loading</p>)}
      
  
    </div>
  )}
  
  

export default Storys