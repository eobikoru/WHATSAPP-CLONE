import { Avatar } from '@mui/material';
import React from 'react';
import './sidebarchat.css';
function SidebarChat({name , mess , pic}) {
  return (
    <div className="sidebarChat">
     <Avatar src={pic} />
     <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{mess}</p>
     </div>
    </div>
  )
}

export default SidebarChat;