import React from "react";

const OutputConsole = ({ data }) => {
  console.log(data);
  const testCase = {
    false: "text-red-600",
    true: "text-green-600",
  };
  return (
    <div className="flex flex-col gap-2 p-2 flex-grow">
      <div className={`${testCase[data.success]} text-2xl`}>
        {data.success ? "Test Case Success :)" : "Test Case Failed :("}
      </div>
      {data.success ? (
        <></>
      ) : (
        <>
          <h1 className="text-slate-400">Output</h1>
          <pre className="flex flex-col bg-slate-800 p-2 rounded-md border border-gray-300">
            <h1 className="text-slate-400 font-thin">Your Output</h1>
            <div className="bg-slate-700 p-2 rounded-md text-wrap break-words">
              {data.data1.got}
            </div>
            {data.data.run.stderr ? (
              <>
                <h1 className="text-slate-400 font-thin">Stderr</h1>
                <div className="bg-slate-700 p-2 rounded-md">
                  {data.data.run.stderr}
                </div>
              </>
            ) : null}
            <div>
              <h1 className="text-slate-400 font-thin">Expected Output</h1>
              <div className="bg-slate-700 p-2 rounded-md">
                {data.data1.expected}
              </div>
            </div>
            <div>
              <h1 className="text-slate-400 font-thin">Input</h1>
              <div className="bg-slate-700 p-2 rounded-md">
                {data.data1.input}
              </div>
            </div>
          </pre>
        </>
      )}
    </div>
  );
};

export default OutputConsole;
