import { Avatar, IconButton } from "@mui/material";
import React,{useState} from "react";
import "./chart.css";
import axios from '../axios'
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
function Chart({ messages }) {
  const [input , setInput] = useState('')
  const sendMessage = async (e) =>{
e.preventDefault();
await axios.post('/messages/new', {
  message: input,
  name: "emeka daniel",
  timestamp: "i'm  a demo",
  recieved: true
});
setInput('')

  }
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
        {messages.map((message) => {
       return   <p
            className={`chat__message  ${message.recieved && "chat__reciever"}`}
          >
            <span className="chat__name">{message.name} </span>
           {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>;
        })}
      </div>

      <div className="chat__footer">
        <EmojiEmotionsIcon />
        <form action="">
          <input type="text" value={input}  onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chart;
