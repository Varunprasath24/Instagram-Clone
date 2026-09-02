import React, { useEffect, useState } from 'react'

function Suggestion() {

  const [profile,setprofile]=  useState(null)
  const [suggestions,setsuggestions]=  useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/profile')
    .then((data)=> data.json())
    .then((data)=>setprofile(data)).catch(err=>console.error(err)) 
   
    fetch('http://localhost:3000/suggestion')
    .then((data)=> data.json())
    .then((data)=>setsuggestions(data)).catch(err=>console.error(err)) 
  }
  
  )

  return (
    <div>
     {profile ?
      <div className='d-flex w-75 m-3 suggestion'>
            <img className ="rounded-circle dp" src={profile.profile_pic} />
            <h5 className='uname'>{profile.username}</h5>
            <h6 className='switch'>Switch</h6>
      </div>: <p>Loading</p>
     }
     <div className='d-flex'>
      <h6 className='m-1'>Suggested for you</h6>
      <b className='ms-auto'>See all</b>
     </div>
    {suggestions.length >0 ? (
      <div>
      {suggestions.map((suggestion)=>(<div key={suggestion.id}>
          <div className='d-flex'>
            <img className ="rounded-circle dp" src={suggestion.profile_pic} />
            <h5 className='uname'>{suggestion.username}</h5>
            <p className='follow ms-auto text-primary'>Follow</p>
          </div>
        </div>))}
        
        </div>) : (<div>Loading</div>)}
    
    </div> 
  )
}

export default Suggestion