import React from 'react'
import './sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function SideBar() {
  return (
   <div className="sidebar">
    
       <div className="sidebar__header">
         <Avatar src='./image/eme.jpeg'/>
           <div className="sidebar__headerRight">
           <IconButton>
           <DonutLargeIcon/>
           </IconButton>
           <IconButton>
           <ChatIcon/>
           </IconButton>
           <IconButton>
           <MoreVertIcon/>
           </IconButton>
         
           </div>
        
       </div>

<div className="sidebar__search">
  <div className="sidebar__searchContainer">
    <SearchIcon/>
     <input type="text"  placeholder='search or start new chat'/>
  </div>
</div>
<div className="sidebar__chats">
  <SidebarChat pic="./image/iii.jpeg"  name="Daniel react" mess="finally finished the build" />
  <SidebarChat  pic="./image/eme.jpeg" name="Node react" mess="did you do it " />
  <SidebarChat pic="./image/ooo.jpeg" name="react" mess="lsat time i checked" />
  <SidebarChat pic="./image/bg.jpeg" name="Blinq" mess="enong id fjghgj" />
  <SidebarChat pic="./image/ooo.jpeg" name="react" mess="lsat time i checked" />
</div>
   </div>
  )
}

export default SideBar