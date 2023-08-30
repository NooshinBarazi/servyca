import { Link } from "react-router-dom";
import users from "../../data";
import Style from './ChatTab.module.scss'
import Inbox from "../Inbox/Inbox";
import CallTab from "../CallTab/CallTab";
import { useState } from "react";

const ChatTab = () => {

  return (
    <Inbox className={Style.inbox_container}>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={Style.users}>
            <Link to={`./chats/${user.id}`} className={Style.user}>
              <img src={user.image} alt={`image of ${user.name}`} />
              <div className={Style.text_message}>
                <h3>{user.name}</h3>
                <p>{user.messages[0]?.text}</p>
              </div>
              <div className={Style.new_message} >
                <div className={Style.message_count}>
                  <span>3</span>
                </div>
                <p>{user.messages[0]?.timestamp}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Inbox>
  );
};

export default ChatTab;
