import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import users from "../../data.js";
import Style from "./PrivateChatPage.module.scss";
import PhoneIcon from "../../components/Icons/PhoneIcon.js";
import ArrowBackIcon from "../../components/Icons/ArrowBackIcon.js";

const PrivateChatPage = () => {
  const { userId } = useParams();

  const currentUser = users.find((user) => user.id === parseInt(userId, 10));

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(currentUser.messages);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [
        ...messages,
        { id: messages.length + 1, text: newMessage, senderId: currentUser.id },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div className={Style.chat_title}>
        <div>
          <ArrowBackIcon />
          <h2>{currentUser.name}</h2>
        </div>
        <Link to={"./call"}>
          <PhoneIcon />
        </Link>
      </div>
      <div className={Style.chat_container}>
        <div className={Style.messages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${Style.message} ${
                message.senderId === currentUser.id
                  ? Style.sent
                  : Style.received
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className={Style.chat_box}>
          <input
            type="text"
            placeholder="Type here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default PrivateChatPage;
