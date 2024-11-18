import React from 'react'
import './userinfo.css'
const Userinfo = () => {
  return (
    <div className='userinfo'>
        <div className="user">
            <img src='./avatar.png' alt='avatar'/>
            <h3>John Doe</h3>
        </div>
        <div className='icons'>
            <img src='./more.png' alt='more' />
            <img src='./video.png' alt='video' />
            <img src='./edit.png'  alt='edit' />
        </div>
    </div>
  )
}

export default Userinfo
