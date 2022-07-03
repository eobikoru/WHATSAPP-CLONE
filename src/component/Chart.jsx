import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./chart.css";
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Chart() {
  return (
    <div className="chart">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>DANIEL EMEKA CHAT</h3>
          <p>Last seen at......</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chart__body">
        <p className="chat__message" >
          <span className="chat__name">Emeka </span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
            </p>
        <p className="chat__message chat__reciever " >
          <span className="chat__name">Emeka </span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
            </p>
        <p className="chat__message" >
          <span className="chat__name">Emeka </span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
            </p>
      </div>

      <div className="chat__footer">
      <EmojiEmotionsIcon/>
         <form action="">
           
           <input type="text" placeholder="Type a message" />
          <button type="submit">send a message</button>
     
         </form>
         <MicIcon/>
      </div>
    </div>
  );
}

export default Chart;
