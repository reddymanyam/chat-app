import React, { useState } from 'react'
import './chatList.css';
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  const handleClick = () => {
    setAddMode((prev) => !prev)
  }

  return (
    <div className='chatlist'>
      <div className='search'>
        <div className='searchBar'>
          <img src='search.png' alt='search icon' />
          <input type='text' placeholder='search' />
        </div>
        <button onClick={handleClick}>
          <img className='plusicon' src={addMode ? "minus.png" : "plus.png" } />
        </button>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src='avatar.png' alt='avatar' />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
