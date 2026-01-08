import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#080808] text-white flex flex-col">
    
    
      <div className="h-full w-full bg-[#080808] text-white flex flex-col gap-10 justify-center items-center">
        <h3 className="text-9xl">💬</h3>
        <h3 className="text-5xl">Welcome to ChitChat</h3>
      </div>
      <div className="mb-20 bg-[#080808] text-white flex flex-col gap-10 justify-center items-center">
        <h5 className="text-normal text-gray-600 pt-6"> 🔒 Your personal messaging platform</h5>
      </div>
    </div>
  );
};

export default Home;
