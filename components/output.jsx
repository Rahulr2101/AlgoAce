import React from "react";

const OutputConsole = ({ data }) => {
  console.log(data);
  const testCase = {
    "Test Case Failed :(":"text-red-600",
    "Test Case Passed :)":"text-green-600"
  }
  return (
    <div className="flex flex-col gap-2 p-2 flex-grow">
      <div className={`${testCase[data.status]} text-2xl`}>{data.status}</div>
      <h1 className="text-slate-400">Output</h1>
      <pre className="flex flex-col bg-slate-800 p-2 rounded-md border border-gray-300">
        <h1 className="text-slate-400 font-thin">Your Output</h1>
        <div className="bg-slate-700 p-2 rounded-md text-wrap break-words">{data.output}</div>
        <div>
          <h1 className="text-slate-400 font-thin">Expected Output</h1>
          <div className="bg-slate-700 p-2 rounded-md">{data.excepted_output}</div>
        </div>
        <div>
          <h1 className="text-slate-400 font-thin">Input</h1>
          <div className="bg-slate-700 p-2 rounded-md">
            {data.input}
          </div>
        </div>
      </pre>
    </div>
  );
};

export default OutputConsole;
