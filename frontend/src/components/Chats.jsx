import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const[chats, setChats] = useState([]);
  const fetchChats = async () => {
    const res = await axios.get("/api/chat");
   setChats(res.data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (

    
    <div className="flex justify-between w-full">
      {chats.map(chat => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
 
)
};

export default Chats;
