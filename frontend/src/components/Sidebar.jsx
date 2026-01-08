import React from "react";
import { NavLink } from "react-router-dom";
import { IoChatbubblesOutline, IoPeopleOutline, IoCallOutline, IoVideocamOutline} from "react-icons/io5";

const Sidebar = () => {
  const linkStyle = "transition-colors duration-200";
  const activeStyle = "text-green-600";
  const idleStyle = "text-white hover:text-green-600";

  return (
    <div className="w-16 h-screen border-r border-gray-800 bg-black flex gap-10 items-center pt-12 text-2xl z-50">
      <NavLink
        to="/chats"
        className={({ isActive }) => (isActive ? activeStyle : idleStyle)}
      >
        <IoChatbubblesOutline />
      </NavLink>

      <NavLink
        to="/groups"
        className={({ isActive }) => (isActive ? activeStyle : idleStyle)}
      >
        <IoPeopleOutline />
      </NavLink>

      <NavLink
        to="/calls"
        className={({ isActive }) => (isActive ? activeStyle : idleStyle)}
      >
        <IoCallOutline />
      </NavLink>

      <NavLink
        to="/meetings"
        className={({ isActive }) => (isActive ? activeStyle : idleStyle)}
      >
        <IoVideocamOutline />
      </NavLink>
    </div>
  );
};

export default Sidebar;