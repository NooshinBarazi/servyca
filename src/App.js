import {  Route, Routes } from "react-router-dom";
import "./App.css";
import ChatTab from "./components/ChatTab/ChatTab";
import PrivateChatPage from "./pages/PrivateChatPage/PrivateChatPage";
import CallPage from "./pages/CallPage/CallPage";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<ChatTab />} />
          <Route path="/chats/:userId" element={<PrivateChatPage />} />
         <Route path="/chats/:userId/call" element={<CallPage />} />
        </Routes>
    </>
  );
}

export default App;
