import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";

const Chats = () => {
  const { user } = ChatState();
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      };

      const res = await axios.get("/api/chat", config);
      setChats(res.data);
    } catch (error) {
      console.error("Failed to fetch chats", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchChats();
    }
  }, [user]);

  const getChatName = (chat) => {
    if (!chat.isGroupChat) {
      return chat.users.find((u) => u._id !== user._id)?.name;
    }
    return chat.chatName;
  };

  return (
    <div className="flex flex-col w-full">
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="px-4 py-3 border-b border-gray-800 hover:bg-gray-900 cursor-pointer"
        >
          {getChatName(chat)}
        </div>

      ))}
    </div>
  );
};

export default Chats;
