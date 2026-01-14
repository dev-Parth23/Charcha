import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../context/ChatProvider";
import SplineBlob from "../components/SplineBlob";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { user } = ChatState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="relative h-full w-full overflow-hidden flex">
      <Sidebar />
      <div className="absolute inset-0">
        <SplineBlob />
      </div>
    </div>
  );
};

export default Home;