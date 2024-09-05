"use client";

import React from "react";

import Editor from '@components/codeEditor'
import Link from "next/link";



const Home = () => {
 
  return (
    <div className="w-full bg-slate-50">
      <div className="flex justify-between p-1 items-center">
        
          <Link href="/">
          <img alt="logo" src="assets/images/logo.png" height={120} width={120} />
          </Link>
     

        <div className="flex gap-2 rounded-md p-2 px-1 py-2 ">
          <div className="flex items-center  bg-slate-200 rounded-md py-2  px-2 ">
            <img
              src="assets/images/upload.svg"
              alt="upload"
              height={20}
              width={20}
            />
            <button
              type="button"
              className="text-green-600 font-medium rounded-lg w-20 h-6"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center  bg-slate-200 px-2 py-2  rounded-md gap-1 ">
            <img
              src="assets/images/play.svg"
              alt="run"
              height={15}
              width={15}
            />
            <button className="font-thin">Run</button>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <h1 className="text-slate-400">Register</h1>
          <h1 className="text-slate-400">SignIn</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white"></div>
       <Editor/>
      </div>

      <p>hello</p>
    </div>
  );
};
export default Home;
