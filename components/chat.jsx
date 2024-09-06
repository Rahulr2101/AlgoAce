import React from "react";
import Nav from "@components/togglenav";

const chat = (props) => {
  return (
    <div className="flex  flex-col bg-white max-h-screen rounded-lg  px-2 py-2 ">
      <Nav page = {props.page} setpage = {props.setpage} />
      <div className="flex flex-row  justify-center gap-3 h-min w-full">
        <h2 className="text-4xl font-semibold ">AlgoAI</h2>
        <img src="assets/icon/ai.svg" alt="ai" height={30} width={30}/>
      </div>
      <div className="flex flex-col flex-grow justify-end ">
        <div className="flex flex-row gap-2">
          <input type="text" placeholder="Type a message" className="w-full p-2 rounded-lg border-2 border-gray-200"/>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  w-20 h-15 flex justify-center items-center"><img src = "assets/icon/send.svg" height={20} width={20} className="" alt="send"/></button>
        </div>
       
      </div>
    </div>
  );
};

export default chat;
