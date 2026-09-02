import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='m-3 position-fixed'>
        <div className='d-flex flex-column gap-3'>
            <img src="/src/assets/instatext.png"/>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Expolre</div>
            <div><i className="bi bi-camera-reels"></i>Reels</div>
            <div><i className="bi bi-chat-dots"></i>Massgaes</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-file-plus"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>
            <div><i className="bi bi-house"></i>Home</div>
        </div>

        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3   '>
            <div><i className="bi bi-threads"></i> threads</div>
            <div><i className="bi bi-list"></i> More</div>
        </div>
    </div>
        
    </>
  )
}

export default Sidebar