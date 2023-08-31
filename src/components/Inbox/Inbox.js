import { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import Style from "./Inbox.module.scss";
import AppBar from "../AppBar/Appbar";
import NavBar from "../NavBar/NavBar";
import ChatTab from "../ChatTab/ChatTab";
import CallTab from "../CallTab/CallTab";

const Inbox = () => {
  const [isChat, setIsChat] = useState(true);
  return (
    <div className={Style.inbox}>
      <AppBar text={"Inbox"} icon={<SearchIcon />} />

      <div className={Style.tabs_container}>
        <button className={Style.tab} onClick={() => setIsChat(true)}>
          chats
        </button>
        <button className={Style.tab} onClick={() => setIsChat(false)}>
          calls
        </button>
      </div>

      {isChat ? <ChatTab /> : <CallTab />}
    

      <NavBar />
    </div>
  );
};

export default Inbox;
