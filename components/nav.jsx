import Link from "next/link";
import React, { useEffect } from "react";

const nav =  ({className,userName}) => {
 
 
 
  

  return (
    <header  className={`flex justify-between p-2 h-20 items-center bg-dark-100 border-b border-5 border-gray-600 ${className}`}>
      <Link href='/'>
      <div className="md:text-3xl text-2xl font-normal">
            <span className="text-green-700 font-bold">
              &lt;<span className="text-orange-600 font-normal">/</span>&gt;
            </span>
            AlgoAce
          </div>
          </Link>
      <div className="flex justify-center items-center gap-2">
        <img src={"https://avatar.iran.liara.run/public"} className="w-12 rounded-2xl"/>
        <h1 className=" text-slate-500">Hi, {userName}</h1>
      </div>
    </header>
  );
};

export default nav;
