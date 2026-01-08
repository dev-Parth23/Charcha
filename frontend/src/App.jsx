import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Chats from "./components/Chats";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>

    </div>
  );
}