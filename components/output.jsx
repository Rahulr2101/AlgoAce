import React from "react";

const OutputConsole = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <h1 className="text-slate-400">Output</h1>
      <pre className="flex flex-col bg-slate-800 p-2 rounded-md border border-gray-300">
        <h1 className="text-slate-400 font-thin">Your Output</h1>
        <div className="bg-slate-700 p-2 rounded-md text-wrap break-words">{data.output}</div>
        <div>
          <h1 className="text-slate-400 font-thin">Expected Output</h1>
          <div className="bg-slate-700 p-2 rounded-md">[1,2,4,5]</div>
        </div>
        <div>
          <h1 className="text-slate-400 font-thin">Input</h1>
          <div className="bg-slate-700 p-2 rounded-md">
            1,3,4,5
          </div>
        </div>
      </pre>
    </div>
  );
};

export default OutputConsole;
