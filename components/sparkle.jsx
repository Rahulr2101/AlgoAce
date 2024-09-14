"use client";
import React from "react";
import { SparklesCore } from "@components/ui/sparkles";

export function SparklesPreview({title,subtitle}) {
  return (
    (<div
      className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />
      </div>
      <h1
        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
       <div className="text-center text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
          <div className="text-slate-500 font-normal">
          {subtitle}
        </div>
        </div>
      </h1>
    </div>)
  );
}
